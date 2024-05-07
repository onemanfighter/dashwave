.PHONY: coverage
coverage:
	echo "Running coverage tests"
	yarn test:coverage
	open -a "Google Chrome" coverage/lcov-report/index.html

.PHONY: branch-clean
branch-clean:
	git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -D