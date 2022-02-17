// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Test {
  struct Hero {
    uint120 strength;
    uint120 charisma;
    uint120 intelligence;
    uint120 wisdom;
	}

  uint120 public balance;

  Hero public hero;

  mapping(address => Hero) public heroes;
  NPC[] public followers;

	constructor() {
		balance = 10;
    hero = Hero({ strength: 1, charisma: 1, intelligence: 1, wisdom: 1 });
	}

  function resetBalance() public {
    balance = 0;
  }

  function resetStrength() public {
    hero.strength = 0;

    resetBalance();
  }

  struct NPC {
    bytes32 name;
  }
}

contract Overloaded {
  function forOverload() public pure returns (string memory) {
    return "first";
  }

  function forOverload(string memory input)
    public
    pure
    returns (string memory)
  {
    return input;
  }

  function forOverload(uint120 input) public pure returns (string memory) {
    if (input == 1) {
      return "third";
    }

    return "third";
  }
}

contract User {
  Overloaded base;

  constructor(address o) {
    base = Overloaded(o);
  }

  function getString() public view returns (string memory) {
    uint120 aNumber = 5;

    base.forOverload();
    base.forOverload("example2");
    base.forOverload(aNumber);

    return "a string";
  }
}
