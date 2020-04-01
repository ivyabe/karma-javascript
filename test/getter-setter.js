describe("Getter/Setter", function() {

	beforeEach(function() {
	  setFirstName("John");
	  setLastName("Doe");
	});
  
	it ("getFirstName()", function() {
	  assert.equal(getFirstName(), "John");
	});
  
	it("setFirstName", function() {
	  expect(setFirstName("John")).toHaveBeenCalled;
	});
  
	it ("getLastName()", function() {
		assert.equal(getLastName(), "Doe");
	});
  
	it("setLastName", function() {
	  expect(setLastName("Doe")).toHaveBeenCalled;
	});
  
  });