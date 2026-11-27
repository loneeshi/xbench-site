const examples = {
  "O01": {
    "instruction": "Take the cart of goods and the large item to the floor named in GET /task. The cart, the item and the robot must all end outside the elevator on that floor, and no goods may fall.",
    "zh": "把一车货和一件大件送到指定的楼层。",
    "environment": "The elevator can be called again, but the robot must finish boarding before the doors close.",
    "success": "The robot, cart and large item are outside the elevator on the requested floor, with no cargo lost.",
    "steps": [
      {
        "criterion": "The call button lights up.",
        "points": 17,
        "timing": false
      },
      {
        "criterion": "Move the large item into the marked waiting area.",
        "points": 17,
        "timing": false
      },
      {
        "criterion": "Bring the entire cart onto the cabin floor.",
        "points": 17,
        "timing": false
      },
      {
        "criterion": "When the elevator leaves, the cart, large item and robot must all be inside. Measure the time from the last entry until closing begins.",
        "points": 17,
        "timing": true
      },
      {
        "criterion": "The target-floor button lights up.",
        "points": 16,
        "timing": false
      },
      {
        "criterion": "At the target floor, all three are in the lobby and no cargo has fallen.",
        "points": 16,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The legacy scripted record establishes joint departure. Arrival and unloading on the target floor remain unverified. Earlier Harbor trials ran with zero reward for both reference and no-op runs. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": []
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
  },
  "O03": {
    "instruction": "Deliver the parcel to the delivery vehicle.",
    "zh": "把包裹交给配送车。",
    "environment": "The delivery vehicle leaves its office stop once. Move the chair and reach the stop before departure.",
    "success": "The parcel is in the vehicle’s cargo compartment.",
    "steps": [
      {
        "criterion": "Move the chair out of the marked route.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Grasp the parcel and lift it from its starting position.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Reach the stop with the parcel before the vehicle moves. Record arrival-to-departure time.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Leave the parcel at rest inside the cargo compartment.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The recording is labelled successful, but the registry accepts only segments because the full episode record is missing. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": []
  },
  "O04": {
    "instruction": "Unload the cargo from the cart at the designated location in the corridor.",
    "zh": "把车上的货卸到走廊的指定位置。",
    "environment": "A warning precedes a one-off fire-door closure in the corridor.",
    "success": "After the warning, clear the cart and boxes before the fire door closes. Park the cart and robot in the bay.",
    "steps": [
      {
        "criterion": "Leave the box stationary in the designated unloading area.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "When closing begins, the aisle must be clear of the cart and boxes. Record time from clearance to closure onset.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Move both robot and cart inside the parking bay.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The recorded forward, retreat and no-warning segments cover an earlier procedure. The current unloading and evacuation sequence still needs a full run. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": []
  },
  "O05": {
    "instruction": "Remove the loaded cart and the large item from the arriving elevator.",
    "zh": "把电梯送上来的一车货和一件大件接出来。",
    "environment": "Clear the elevator lobby and remove both items before the elevator leaves. The elevator can be called again.",
    "success": "The cart and the large item are both outside the elevator.",
    "steps": [
      {
        "criterion": "Move the sign and empty cart out of the area in front of the doors.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Bring either the loaded cart or the large item fully outside.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Bring the other item outside before closing starts. Record the time remaining.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present. The elevator scene exists. No accepted full run is recorded. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/o05-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/o05-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "K02": {
    "instruction": "Bring the two drinks and the dish to the dining table. Nothing may spill or fall.",
    "zh": "把饮料和一盘菜端上餐桌。",
    "environment": "The floor scrubber wets the kitchen aisle as it passes. Cross before that part of the floor becomes wet.",
    "success": "The drinks and dish are on the dining table with nothing spilled or dropped.",
    "steps": [
      {
        "criterion": "Place one dish and two drinks on the tray.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Carry the tray across the far boundary without driving onto wet floor or touching the scrubber. Keep all items tilted less than 15°. Record time until this section becomes wet.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Move the chair out of the placement area.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Place all three items in the table’s target area, each tilted less than 10°.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Earlier Harbor trials ran with zero reward for both reference and no-op runs. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": []
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
  "K04": {
    "instruction": "Put the cup, the plate and the bowl from the dishwasher away in the wall cabinet.",
    "zh": "把洗碗机里的杯子、盘子和餐具放进吊柜。",
    "environment": "The wall cabinet has a lift-up door that falls when released. Support it while transferring the dishes.",
    "success": "All three items are in their designated cabinet positions. Both appliance doors are closed and the cabinet door has not struck the arm or items.",
    "steps": [
      {
        "criterion": "Open the dishwasher fully.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Move all three items into the marked counter area below the cabinet.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Hold the cabinet door open high enough to insert the dishes. The angle is pending.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Store all three in their designated slots while supporting the door. Keep it clear of the arm and items. Record support duration.",
        "points": 20,
        "timing": true
      },
      {
        "criterion": "Withdraw the arm and close both doors with the arm clear.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The built kitchen uses a drawer at 95% travel, allows any free slot per item and substitutes a handled bowl. The design calls for a dishwasher door and assigned slots. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Cabinet drop force and opening-angle threshold are pending. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/k04-scene.png",
        "view": "Full scene at start"
      },
      {
        "src": "images/k04-head.png",
        "view": "Head camera at start"
      }
    ]
  },
  "K05": {
    "instruction": "Get the fire extinguisher and return to the burning stove.",
    "zh": "灶台起火了，去取灭火器，回到灶台前。",
    "environment": "A stove fire grows while the robot retrieves the extinguisher. The opportunity ends when the fire exceeds its limit.",
    "success": "Stand in the designated area by the stove holding the extinguisher before the fire exceeds its limit.",
    "steps": [
      {
        "criterion": "Move the obstructing cart out of the marked route.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Grasp the extinguisher and lift it off its mount.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Reach the marked area with the extinguisher before the fire reaches the limit. Record the time remaining.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present. The recording follows the earlier kitchen procedure. Completion of the current extinguisher task is unverified. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": []
  },
  "W01": {
    "instruction": "Deliver the box to the pallet on the other side of the aisle.",
    "zh": "把一箱货送到通道对面的托盘上。",
    "environment": "A forklift repeatedly crosses the aisle. Carry the box through a gap in traffic.",
    "success": "The box rests on the far pallet. The forklift has not touched the robot or box.",
    "steps": [
      {
        "criterion": "Grasp the box and lift it while remaining outside the aisle boundary.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Move the entire robot and box to the far side without forklift contact. Measure time until the next forklift pass.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Leave the box at rest on the pallet.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. Earlier scripted comparisons include a forklift-contact failure and a successful delivery. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/w01-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/w01-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "W02": {
    "instruction": "Fill both drums to the required level and move them to the storage area. No material may spill.",
    "zh": "把两个料桶接到规定的料位，搬到存放区。",
    "environment": "The robot starts the dispenser. Stop filling the second drum before it overflows.",
    "success": "Both drums are at the required fill level and in storage, with no spill.",
    "steps": [
      {
        "criterion": "Fill the first drum to the specified range.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Place the second drum under the outlet.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Leave the first drum upright in storage.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Stop flow before the second drum exceeds its upper limit. Record the time margin to overflow.",
        "points": 20,
        "timing": true
      },
      {
        "criterion": "Leave the second drum upright in storage.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The second half was accepted from a saved intermediate state. A complete run from the beginning is pending. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/w02-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/w02-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "W03": {
    "instruction": "Put the item on the tray so that the item and the tray leave together on the conveyor.",
    "zh": "把物品放到托盘上，让它们一起随传送带送走。",
    "environment": "Trays travel out of reach on the conveyor. Place the item before its tray leaves.",
    "success": "The item leaves on the tray with the conveyor.",
    "steps": [
      {
        "criterion": "Grasp the item and lift it from its starting position.",
        "points": 50,
        "timing": false
      },
      {
        "criterion": "Put the item on the tray so they leave together. Record time from placement until the tray moves out of reach.",
        "points": 50,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present. Earlier scripted comparisons include an empty-tray failure and a loaded-tray success. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/w03-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/w03-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "W04": {
    "instruction": "Place the box you are holding and the box arriving on the conveyor at their designated places. Neither box may fall.",
    "zh": "把手里的货和传送带送来的货都放到指定位置。",
    "environment": "Incoming cargo travels toward the end of the conveyor. Free a hand to catch it in time.",
    "success": "Both boxes are in their designated places. The incoming box has not fallen off the conveyor.",
    "steps": [
      {
        "criterion": "Place the held box at its designated position and free the receiving hand.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Grasp the incoming box before the belt ends without dropping it. Record time until it would have reached the end.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Leave both boxes stationary at their designated positions.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. A two-handed catch was demonstrated. The full placement sequence is unverified. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/w04-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/w04-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "W05": {
    "instruction": "Load the two boxes into the inner and outer cargo slots of the tugger trailer.",
    "zh": "把两箱货装到牵引车车厢的内侧货位和外侧货位。",
    "environment": "A tugger stops briefly each lap. Load the inner slot first, then the outer slot during a stop.",
    "success": "Both boxes depart in their assigned slots without the tugger hitting the robot or cargo.",
    "steps": [
      {
        "criterion": "Stage both boxes inside the marked area beside the stop.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Place the entire inner box in its slot. Keep the robot off the vehicle route when it moves. Record time until departure.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Apply the same placement and clearance rules to the outer slot. Record time until departure and laps used.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present. The current scene uses a looping tugger. Earlier recordings cover a fixed shelf. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Stop duration and lap period are pending. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/w05-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/w05-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
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
  "N02": {
    "instruction": "Take the dish with the green cover from the buffet counter and put it on the tray on the small table. Put its cover on the cover rack on the counter, and do not knock over or take any other dish.",
    "zh": "从回转餐台上取下指定的那一盘菜，放到托盘上。",
    "environment": "A circular buffet moves at constant speed. Follow the target plate sideways while lifting its cover and retrieving it.",
    "success": "The target plate rests on the tray without tipping, the cover is on the rack, and no other plate was tipped or removed.",
    "steps": [
      {
        "criterion": "Stand in the marked area beside the counter with one hand directly over the target plate.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Follow the plate sideways and lift its cover without tipping another plate. Record lateral distance.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Grasp and lift the target plate clear with tilt under 15°. Record time before it leaves the pickup area.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Leave the plate stationary on the tray and its cover on the rack. Record laps used.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 0.05 m/s counter speed, 1.5 m pickup region, about 30 seconds per opportunity and two minutes per circuit. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n02-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n02-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N03": {
    "instruction": "Put the rubbish bag from the cart into the kitchen bin.",
    "zh": "把推车上的垃圾袋放进垃圾桶。",
    "environment": "The bin lid springs shut when released. Hold it while turning toward the bag on the cart.",
    "success": "The bag is inside the bin, the lid is shut and the hand has not been caught.",
    "steps": [
      {
        "criterion": "Park the bag cart in the marked area by the bin.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Hold the lid open far enough for the bag. The required angle is pending.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Keep the lid supported while taking the bag and placing it inside. The lid must not close on the arm. Record support duration.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Withdraw the arm and close the lid with the arm clear.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The parking region exists in the evaluator. The visible pedal cannot be operated. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "The minimum opening angle is pending. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n03-scene.png",
        "view": "Full scene at start"
      },
      {
        "src": "images/n03-head.png",
        "view": "Head camera at start"
      }
    ]
  },
  "N04": {
    "instruction": "Push the handcart uphill to the loading position and load the cargo onto it.",
    "zh": "把推车推到斜坡上的装货位，再把货搬上车。",
    "environment": "An unsupported cart rolls downhill. Push it uphill and hold it while chocking a wheel.",
    "success": "The cart stays in the loading position with the cargo on it and does not roll back downhill.",
    "steps": [
      {
        "criterion": "Bring the chock on the cart or place it in the marked area beside the loading position.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Reach the loading position without exceeding the permitted rollback distance (pending). Record uphill pushing time.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Set the chock on the downhill side of the wheel. After both hands release, displacement over five seconds must stay below a pending threshold.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Load the cargo while the cart remains in position.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Rollback and post-release displacement limits are pending. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n04-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n04-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N05": {
    "instruction": "Pass the parcel from the cart through the serving hatch and put it down on the counter on the other side.",
    "zh": "把推车上的东西递到卷帘的另一侧放好。",
    "environment": "The serving shutter retracts when released. Keep it supported while reaching for the parcel and passing it through.",
    "success": "The parcel is stable on the far side and the shutter has not struck the arm.",
    "steps": [
      {
        "criterion": "Park the cart in the marked area beside the hatch.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Hold the shutter high enough for the parcel to pass. The height is pending.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Move and pass the parcel while supporting the shutter. Leave it stationary on the far counter without the shutter pressing on the arm. Record support duration.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Withdraw the arm before releasing the shutter.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "The minimum hatch opening height is pending. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n05-scene.png",
        "view": "Full scene at start"
      },
      {
        "src": "images/n05-head.png",
        "view": "Head camera at start"
      }
    ]
  },
  "N06": {
    "instruction": "Carry the blue crate from the small table to the other side of the revolving door, holding it with both hands.",
    "zh": "抱着一个箱子走到旋转门的另一侧。",
    "environment": "The revolving door rotates continuously. Enter a gap and match its motion while carrying the crate.",
    "success": "The robot and crate reach the far side without any door leaf touching them.",
    "steps": [
      {
        "criterion": "Hold the crate clear of the floor with both hands in the entrance area.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Move the entire robot and crate between two leaves without contact. Record time before the trailing leaf catches up.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Follow the door to the exit and bring both robot and crate fully outside without contact.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n06-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n06-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N07": {
    "instruction": "Take the orange canister off the turntable on the round table without knocking over the other items.",
    "zh": "从转盘上取下指定的那一件。",
    "environment": "A turntable repeatedly carries the target past the pickup point.",
    "success": "Remove the designated item without tipping adjacent items.",
    "steps": [
      {
        "criterion": "Reach the pickup height above the edge of the turntable.",
        "points": 50,
        "timing": false
      },
      {
        "criterion": "Lift the target off the turntable as it passes. Neighbouring items must remain upright. Record revolutions used and elapsed time.",
        "points": 50,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n07-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n07-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N08": {
    "instruction": "Put the document box from the small table onto the table on the other side of the speed gate, then pull your arms back to this side.",
    "zh": "把东西放到闸机门的另一侧。",
    "environment": "The gate repeatedly opens and closes. Reach through and withdraw during one opening.",
    "success": "The item rests on the far side and the gate has not trapped the arm.",
    "steps": [
      {
        "criterion": "Grasp the item and move to the approach region.",
        "points": 50,
        "timing": false
      },
      {
        "criterion": "Place the item securely beyond the gate and withdraw without gate contact. Record time from withdrawal until closing starts.",
        "points": 50,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n08-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n08-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N09": {
    "instruction": "Pull the belt of the barrier post across the walkway and hook its end into the slot on the other post. Both posts must stay standing.",
    "zh": "把隔离带拉到对面的立柱上挂好。",
    "environment": "The barrier belt recoils when released. Maintain the grasp while crossing the walkway.",
    "success": "The end stays latched into the opposite post, the belt remains extended and both posts stay upright.",
    "steps": [
      {
        "criterion": "Grasp the end and pull it clear of its housing.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Bring the end into the region beside the opposite post without letting it slip back. Record pulling duration.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Latch and release the end. It must remain in the slot with both posts upright.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n09-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n09-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N10": {
    "instruction": "Load the three boxes from the handcart onto the freight trailer.",
    "zh": "把推车上的三箱货装到运货车的货台上。",
    "environment": "The freight trailer moves through the loading area once without stopping. Walk alongside while loading.",
    "success": "All three boxes depart on the trailer without the vehicle hitting the robot or handcart.",
    "steps": [
      {
        "criterion": "Stage the handcart in the marked area beside the route.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Load box one while following the vehicle. It must rest relative to the trailer with no vehicle contact with the robot or handcart. Record time until the vehicle leaves the loading section.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Load box two under the same stability, contact and time-margin criteria.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Load box three under the same stability, contact and time-margin criteria.",
        "points": 25,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 0.2 m/s along a 12 m loading section, about 60 seconds. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n10-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n10-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N11": {
    "instruction": "Put the three things lying on the kitchen floor into the basket on the counter.",
    "zh": "把地上的三样东西收进篮子里。",
    "environment": "A vacuum makes a single pass along its route. Pick up the objects in time to avoid contact.",
    "success": "All three objects are in the basket without any being touched or swept away by the vacuum.",
    "steps": [
      {
        "criterion": "Lift the first object in the vacuum’s path before contact. Measure time until the vacuum reaches its original location.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Lift the second object before contact and measure the same margin.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Lift the third object before contact and measure the same margin.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Leave all three objects stationary inside the basket.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: vacuum speed 0.25 m/s, arrivals at 15, 30 and 45 seconds. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n11-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n11-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N12": {
    "instruction": "Push the loaded shelf cart outside the door.",
    "zh": "把货架车推到门外。",
    "environment": "A warehouse shutter descends once. Moving a box to a lower shelf reduces cart height and extends the crossing window.",
    "success": "The cart, cargo and robot are fully outside without shutter contact.",
    "steps": [
      {
        "criterion": "Empty the top shelf and leave the box stationary on a lower shelf. A direct exit skips these points.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Get the entire cart and cargo outside without contact. Record time from rear clearance until the shutter reaches the cart’s current height.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Move the entire robot outside without shutter contact.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The shared scorer rejects recorded moving contacts. The scene judge uses the contact role and task phase. Their end-to-end agreement is pending. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 3 m opening, descent at 0.05 m/s, cart heights of 1.8 m and 1.2 m, and a 6 m approach. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n12-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n12-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N13": {
    "instruction": "Close and latch the lids of two boxes on the conveyor.",
    "zh": "把传送带上两个箱子的盖子合上扣好。",
    "environment": "Boxes with hinged lids pass on a conveyor. Follow each one long enough to close and latch it.",
    "success": "Both lids are latched when the boxes reach the end, and neither box has fallen off the belt.",
    "steps": [
      {
        "criterion": "Stand inside the marked area beside the belt with a hand over it.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Close and latch the first lid before the box reaches the end, keeping it on the belt. Record time remaining.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Close and latch the second under the same conditions. Record time remaining and the number of boxes used.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 0.1 m/s belt, 4 m working section, 40 seconds per box and 3 m spacing. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n13-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n13-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N14": {
    "instruction": "Push the cart with the box on it to the far end of the passage, through both doors. The box must stay on the cart.",
    "zh": "把推车推到通道的另一头。",
    "environment": "Two interlocked doors open in alternation. Match their cycle while pushing the loaded cart.",
    "success": "The robot, cart and load reach the far end without door contact.",
    "steps": [
      {
        "criterion": "Stage the cart in the marked area before the first door.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Clear the first door with the entire robot and cart without contact. Record time until closing begins.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Wait between the doors, then clear the second without touching either door. Record the margin to closure and cycles used.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: eight seconds open per door, 2.5 m between doors and a 30-second cycle. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n14-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n14-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N15": {
    "instruction": "Push the handcart on the slope into the parking area.",
    "zh": "把坡上的推车推到停放区。",
    "environment": "The cart rolls down the slope once. Intercept it before it crosses the line.",
    "success": "The cart rests in the parking area without crossing the line, tipping or dropping cargo.",
    "steps": [
      {
        "criterion": "Reach the receiving area with both hands at handle height.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Stop the cart with its front still short of the line, upright and with cargo retained. Measure remaining distance to the line.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Push the cart into the parking area and leave it stationary.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 2° slope, 8 m of rolling distance, 15–20 seconds to the line and a 3 m robot approach. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n15-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n15-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N16": {
    "instruction": "Carry the long board with the freight vehicle to the unloading point and place it on the rack.",
    "zh": "和运货车一起把长板抬到卸货点，放到架子上。",
    "environment": "A freight vehicle supports one end of a board and follows a fixed route. Carry the other end at its pace around the bend.",
    "success": "The board rests on the unloading rack. It has not fallen, and the vehicle has not struck the robot.",
    "steps": [
      {
        "criterion": "Lift the free end from its support with both hands.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Keep both ends supported through the straight segment. Record maximum sliding distance in the vehicle support.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Keep both ends supported throughout the turn without vehicle contact with the robot.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "After the vehicle stops, leave the board stationary on the rack.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. The scene judge can accept stable final placement even if earlier straight or turn milestones were unrecorded. Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Design estimates: 2 m board, 0.2 m/s vehicle and a 6 m straight followed by a right-angle turn and another 3 m. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n16-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n16-head.jpg",
        "view": "Head camera at start"
      }
    ]
  }
};
