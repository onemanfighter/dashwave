.PHONY: coverage
coverage:
	echo "Running coverage tests"
	yarn test -- --coverage --watchAll=false
	open -a Firefox http://localhost:3000
	serve -s coverage/lcov-report

.PHONY: branch-clean
branch-clean:
	git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -D