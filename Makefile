#
# Makefile
#
# by: zander - zand3rs@gmail.com
#
# usage:
# make test
# make test <path/to/test>
#
# override default MOCHA_OPTS:
# make MOCHA_OPTS='-C -R dot' test
#
# make deploy
# make deploy TAG='<version-tag>'
#

ENV_VARS = NODE_ENV=test PORT=9999
TEST_DIR = test/unit/

MOCHA_BIN = mocha
MOCHA_DEFAULT_OPTS = --recursive -t 30000
MOCHA_OPTS = -R spec

ifneq "$(wildcard ./node_modules/sails-test-helper/node_modules/.bin/mocha)" ""
    MOCHA_BIN = ./node_modules/sails-test-helper/node_modules/.bin/mocha
endif
ifneq "$(wildcard ./node_modules/.bin/mocha)" ""
    MOCHA_BIN = ./node_modules/.bin/mocha
endif

GRUNT_BIN = grunt
ifneq "$(wildcard ./node_modules/sails/node_modules/.bin/grunt)" ""
    GRUNT_BIN = ./node_modules/sails/node_modules/.bin/grunt
endif

CWD = $(shell pwd)
TAG = $(shell git describe --tags)

PACKAGE_NAME = $(shell git remote -v | grep fetch | sed -E 's/^.*\/([^/]+)\.git.*$$/\1/')
S3_BUCKET = s3://packages-rocketequities/$(PACKAGE_NAME)/
S3_ACCESS_KEY = ""
S3_SECRET_KEY = ""

BUILD_FILE = /tmp/.$(PACKAGE_NAME)-last-build
DEPLOY_FILE = /tmp/.$(PACKAGE_NAME)-last-deploy

DIST_DIR = $(CWD)/dist
DIST_WWW = $(PACKAGE_NAME)-$(TAG)-www.tgz
DIST_APP = $(PACKAGE_NAME)-$(TAG)-app.tgz


all:
	@echo 'make [dist|deploy|test|clean]'

dist: build

build:
	@echo 'Creating distribution packages (version: $(TAG))...'
	@\
	LAST_BUILD=`[ -r $(BUILD_FILE) ] && cat $(BUILD_FILE)`; \
	if [ -n "$(TAG)" ] && [ "$(TAG)" != "$$LAST_BUILD" ]; then \
	    \rm -Rf node_modules && \
	    npm install --production && \
	    $(GRUNT_BIN) build --tag=$(TAG) && \
	    echo "$(TAG)" > $(BUILD_FILE); \
	fi

deploy: build
	@echo 'Deploying distribution packages (version: $(TAG))...'
	@\
	S3_OPTIONS=""; \
	if [ -n "$(S3_ACCESS_KEY)" ]; then \
	    S3_OPTIONS+=" --access_key=$(S3_ACCESS_KEY)"; \
	fi; \
	if [ -n "$(S3_SECRET_KEY)" ]; then \
	    S3_OPTIONS+=" --secret_key=$(S3_SECRET_KEY)"; \
	fi; \
	DIST_FILES=""; \
	if [ -r "$(DIST_DIR)/$(DIST_APP)" ]; then \
	    DIST_FILES+=" $(DIST_DIR)/$(DIST_APP)"; \
	fi; \
	if [ -r "$(DIST_DIR)/$(DIST_WWW)" ]; then \
	    DIST_FILES+=" $(DIST_DIR)/$(DIST_WWW)"; \
	fi; \
	LAST_DEPLOY=`[ -r $(DEPLOY_FILE) ] && cat $(DEPLOY_FILE)`; \
	if [ -n "$(TAG)" ] && [ "$(TAG)" != "$$LAST_DEPLOY" ] && [ -n "$$DIST_FILES" ]; then \
	    echo "Copying files to S3..."; \
	    s3cmd $$S3_OPTIONS put $$DIST_FILES $(S3_BUCKET) && \
	    \rm -Rf $$DIST_FILES && \
	    echo "$(TAG)" > $(DEPLOY_FILE); \
	fi

test:
	@$(eval TARGETS=$(filter-out $@,$(MAKECMDGOALS)))
	@$(eval TARGETS=$(TARGETS:test/%=%))
	@$(eval TARGETS=$(TARGETS:unit%=%))
	@$(eval TARGETS=$(TARGETS:/%=%))
	@$(eval TARGETS=$(addprefix $(TEST_DIR),$(TARGETS)))
	@$(eval TARGET=$(shell [ -z $(firstword ${TARGETS}) ] && echo ${TEST_DIR}))
	@$(ENV_VARS) $(MOCHA_BIN) $(MOCHA_DEFAULT_OPTS) $(MOCHA_OPTS) $(TARGET) $(TARGETS)

clean:
	@echo 'Deleting node_modules...'
	@\rm -Rf node_modules
	@echo 'Deleting log files...'
	@\rm -Rf *.log
	@echo 'Deleting dist packages..'
	@\rm -Rf $(DIST_DIR)/*

cleanall: clean
	@echo 'Deleting build temp files...'
	@\rm -Rf $(BUILD_FILE)
	@\rm -Rf $(DEPLOY_FILE)

silent:
	@:

%: silent
	@:

.PHONY: silent clean cleanall test dist build deploy all
