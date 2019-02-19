let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedPalindrome = new Phrase("RaceCar");
      assert(mixedPalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuationPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuationPalindrome.palindrome());
    });

    it("should return only letters", function() {
      let punctuationPalindrome = new Phrase("Madam, I'm Adam.");
      assert(/\w+/.test(punctuationPalindrome.processedContent()));
    });

  });
});
