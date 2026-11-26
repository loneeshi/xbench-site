const examples = {
  "N01": {
    "instruction": "Take the blue food container out of the chest freezer and put it on the counter next to the freezer.",
    "zh": "从冷柜取出蓝色食品盒，放到旁边的台面上。",
    "environment": "Single-wall kitchen with a long chest freezer. The lid falls when released. The robot supports it while moving sideways to reach the container.",
    "success": "The container rests on the counter and the lid is closed. The lid must not strike the arm or the container.",
    "steps": [
      {
        "criterion": "Open the lid far enough for retrieval and support it by hand. The required angle is pending.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Move sideways and remove the container while supporting the lid. The lid must stay clear of the arm and item. Record total support time.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Leave the container at rest inside the counter region.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Withdraw the arm and close the lid with the arm clear of its underside.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene built. The full-scene and head-camera images show the mecanum robot at the start. The package includes the environment and tests. Server integration and an end-to-end pass are pending.",
    "pending": "Lid mass and counterbalance are estimates. The opening-angle threshold and episode limits are pending.",
    "images": [
      {
        "src": "images/n01-scene.png",
        "view": "Full scene at start"
      },
      {
        "src": "images/n01-head.png",
        "view": "Head camera at start"
      }
    ]
  },
  "K03": {
    "instruction": "Swap the bottle inside the fridge with the cup outside it, then close the fridge door. Both items must end upright.",
    "zh": "交换冰箱里的瓶子和外面的杯子，让两件物品保持直立，再关上冰箱门。",
    "environment": "The design calls for a narrow kitchen. The built scene uses an L-shaped kitchen. The robot holds a self-closing door while swapping the items.",
    "success": "The bottle and cup are upright in their exchanged locations. The fridge is closed and the door has not trapped an arm or either item.",
    "steps": [
      {
        "criterion": "Clear all other objects from the marked temporary space on the counter.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Open the fridge door to at least 60°.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Keep the door supported while swapping both objects into each other’s starting regions. Both must be upright and clear of the door. Record total support time.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "After withdrawing the arm, close the door to within 5° with the arm outside the gap.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene built. The current package includes the environment and tests. Server integration and a full run of the revised design are pending. The legacy recording shows a different procedure.",
    "pending": "Door return force and episode limits are pending.",
    "images": [
      {
        "src": "images/k03-scene.png",
        "view": "Full scene at start"
      },
      {
        "src": "images/k03-head.png",
        "view": "Head camera at start"
      }
    ]
  },
  "O02": {
    "instruction": "Load the two boxes onto the flat cart and push the cart to the other side of the door. Both boxes must stay on the cart.",
    "zh": "把两箱货装上平板车，把车推到门的另一侧。两箱货都要留在车上。",
    "environment": "Office corridor with a door closer. Pushing starts the door’s motion. The robot must get through before it closes.",
    "success": "The cart and both boxes reach the far side of the door without any cargo falling.",
    "steps": [
      {
        "criterion": "Load both boxes. They must be at rest inside the cart deck boundary.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Move the front of the cart into the approach region by the door.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Push the door to an angle that allows the cart through. The numeric threshold is pending.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Get the robot, cart and both boxes across before the door closes, without the door hitting the robot or cart. Record time from clearance until the door returns to its closed position.",
        "points": 25,
        "timing": true
      }
    ],
    "status": "Scene built. The package includes the environment, tests and a reference-solution entry point. Earlier Harbor trials ran; both the reference and no-op runs received zero reward. A successful end-to-end run under the current rules is pending.",
    "pending": "The passable door angle and episode limits are pending.",
    "images": []
  }
};
