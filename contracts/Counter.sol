// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
  uint public x;


  event Increment(uint by);

  function inc() public {
    x++;
    emit Increment(1);
  }

  function incBy(uint by) public {
    require(by > 0, "incBy: increment should be positive");
    x += by;
    emit Increment(by);
  }



    uint public number;

    event Incremented(address indexed user, uint256  newValue);
    event SetNumber(address indexed user, uint256  newValue);


    function increment() public {
        number += 1;
        emit Incremented(msg.sender, number);
    }


    function setNumber(uint256 _number) public {
        number = _number;
        emit SetNumber(msg.sender, _number);
    }


   function getNumber() public view returns (uint256) {
        return number;
    }

}
