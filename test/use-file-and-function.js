describe('#testSuffix()', function () {
	it('should return true when the value ends with the suffix', function () {
		assert.equal(true, testSuffix("abcd", "d"));
	});

	it('should return false when the value does not end with the suffix', function () {
		assert.equal(false, testSuffix("abcd", "de"));
	});
});

describe('#isMatching()', function() {
	it('returns true if the values match', function() {
	  assert.equal(true, isMatching("swift", "swift"));
	});

	it('returns false if the values does not match', function() {
		assert.equal(false, isMatching("taylor", "alison"));
	});
});

describe('#callOtherFunction()', function() {
	it('calls isMatching() if testSuffix is true', function () {
		callOtherFunction("abcd", "d");
		expect(isMatching).toHaveBeenCalled;
	});

	it('will return if testSuffix is false', function () {
		callOtherFunction("abcd", "de");
		expect('return');
	});
});

describe('#funcWithLoop()', function() {
	it('calls funcWithLoop() function', function () {
		funcWithLoop();
	});

	it('checks if colors array is not empty', function () {
	});
});
