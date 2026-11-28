const examples = {
  "O01": {
    "instruction": "Take the loaded cart in front of you and the blue box with a carry handle behind you on your left into the elevator, and send the elevator to the floor named in GET /task. The cart, the box and the robot must all be inside when the elevator leaves, and no goods may fall.",
    "zh": "把你前面装着货的推车，和你左后方带提手的蓝色箱子，一起送进电梯，让电梯去 GET /task 里写的楼层。电梯离开时，推车、箱子和机器人都要在电梯里，货不能掉。",
    "environment": "The elevator can be called again, but the robot must finish boarding before the doors close. The scene has one floor, so the episode ends when the elevator leaves.",
    "success": "When the elevator leaves, the robot, the cart with both boxes and the large item are inside, the target-floor button is lit and no cargo has fallen.",
    "steps": [
      {
        "criterion": "The call button lights up.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "The large item rests wholly inside the green area in front of the doors.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "The entire cart is on the cabin floor, inside the car doors.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "When the car doors close at this floor, the cart, both boxes, the large item and the robot are all inside and nothing has fallen. Pressing the floor button is not required for this step.",
        "points": 20,
        "timing": true
      },
      {
        "criterion": "The target-floor button lights up.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present. Reviewed on 2026-11-27: the episode now ends at departure and all five milestones are judged (xbench-sim#49), not yet checked in a simulator run. The legacy scripted record establishes joint departure. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Episode time and step limits are pending. Elevator timing (estimates): doors stay open 65 s, close slowly after 20 s of blocking, and another floor calls the car 300 s after the first hall call.",
    "images": [
      {
        "src": "images/o01-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/o01-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "O02": {
    "instruction": "Load the two boxes from the table on your left onto the service cart, then push the cart to the other side of the door. Both boxes must stay on the cart.",
    "zh": "把左边桌上的两箱货装上服务车，再把车推到门的另一侧。两箱货都要留在车上。",
    "environment": "Office corridor with a door closer. Pushing starts the door’s motion. The robot must get through before it closes. The two boxes start on an office table on the robot’s left (top 0.75 m), so the task needs no search or long travel. Each box has a carry handle across its top, so one hand can lift it. The cart is a two-shelf service cart with its top shelf at 0.635 m, so no box sits below 0.6 m.",
    "success": "The cart and both boxes reach the far side of the door without any cargo falling.",
    "steps": [
      {
        "criterion": "Load both boxes. Each box rests on the deck, upright and still, with its centre inside the deck; a few millimetres of overhang are allowed.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Park the cart with its front edge within 1.2 m in front of the door, on the cart lane.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Push the door open to at least 60 degrees, where the cart fits through.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Get the robot, cart and both boxes across before the door closes, without the door hitting the robot or cart. Record time from clearance until the door returns to its closed position.",
        "points": 25,
        "timing": true
      }
    ],
    "status": "Scene built on RB-Y1 M v1.3 with the boxes on the near table (2026-11-27). The Harbor package starts with a running clock and 1/120 s physics. The old scripted solution (two-wheel robot, boxes on the reception desk) no longer applies and its video was removed. All four milestones are judged during the episode (2026-11-27, xbench-sim#53). A successful end-to-end run under the current rules is pending.",
    "pending": "Episode limits are pending. The door closes at 0.5 degrees per second at every angle (estimate from an archived run, much slower than real closers); force and contact judging is set after all 30 tasks are reviewed.",
    "images": [
      {
        "src": "images/o02-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/o02-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "O03": {
    "instruction": "Move the chair clear of the marked path and load the parcel from the desk into the upper compartment of the delivery vehicle at the stop beside the row of desks.",
    "zh": "把椅子移出标出的通道，将桌上的包裹放进停在这排办公桌旁的配送车上层货仓。",
    "environment": "Open-plan office. A delivery vehicle stops beside the row of desks, about 3.4 m from the start and visible from it, then leaves once and does not return. A chair blocks the way back from the desk, and the parcel has a carry bar across its top, so one hand can lift it.",
    "success": "The chair is out of the marked path and the parcel rests in the upper compartment of the delivery vehicle.",
    "steps": [
      {
        "criterion": "The chair and all five casters are out of the marked path.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "The parcel is lifted at least 2 cm above the desk and held at its carry bar.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "When the vehicle starts to leave, the robot and the parcel are both inside the stop area. Record time from arrival until departure.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "The whole parcel, carry bar included, is inside the upper compartment and stays still for 0.5 s.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene, Harbor package and live milestone judges are present (xbench-sim#66). A no-op run from the official start covers arrival, doors and departure, and a one-hand lift and turn with the parcel worked. No scripted run has loaded the parcel yet. Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "Departure at 170 s is an estimate. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/o03-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/o03-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "O04": {
    "instruction": "Push the service cart beside you in the corridor into the marked parking bay beyond the doorway, keeping the boxes on the cart, and stop outside with it.",
    "zh": "把走廊里你身旁的服务车推到门外有标线的停靠区，让箱子留在车上，然后和车一起停在门外。",
    "environment": "Office corridor with a double fire door. A red lamp beside the door is lit at the start; after a set time it starts to strobe, the doors release and close at a constant rate, and they lock once shut. The service cart (top shelf 0.635 m) carries two boxes, and the parking bay is a floor marking beyond the doorway.",
    "success": "The cart with both boxes and the robot are stopped in the parking bay beyond the doorway, and no box has fallen.",
    "steps": [
      {
        "criterion": "The cart has moved at least 0.3 m toward the door.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "When the doors first close fully, the cart, both boxes and the robot base are entirely beyond the door plane. Record time from the last one crossing until the doors close.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "The cart centre is inside the parking bay, the robot is outside the door, both boxes are still on the cart, and all stay still for 0.5 s.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Reworked on 2026-11-27: the cart is pushed out through the closing fire door to the parking bay outside (xbench-sim#67). A no-op run scores 0/100 as expected. Scripted cart grasps have not succeeded yet, so no successful push run exists. Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "The 32 s warning and 1 deg/s closing speed are estimates. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/o04-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/o04-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "O05": {
    "instruction": "Move the sign and empty cart clear of the elevator entrance, keeping the sign upright, and bring the loaded cart with its boxes and the large blue box from inside the elevator to their marked spaces in the lobby.",
    "zh": "把告示牌和空车挪出电梯门前的通道，保持告示牌直立，并把轿厢里的载货车连同车上的货箱、以及蓝色大箱子分别放到大厅里对应的标记区。",
    "environment": "Elevator lobby on an office floor. The car arrives with a loaded cart and a large blue box with a carry bar (one hand can lift it), while a sign and an empty cart block the entrance. The doors stay open 65 s and close slowly after 20 s of blocking; the car can be called again, but another floor later calls it away.",
    "success": "The sign stands upright and, with the empty cart, is clear of the entrance; the loaded cart with its boxes and the large blue box are out of the elevator in their marked spaces.",
    "steps": [
      {
        "criterion": "The sign and the empty cart are both out of the area in front of the doors, and the sign stands upright.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Either the loaded cart or the large blue box is entirely outside the elevator.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "When the doors start their last closing before the car leaves, the cart, both boxes on it and the large blue box are all outside. Record time from the last item coming out until the doors start closing.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene, Harbor package and live judges are present (xbench-sim#68). The large item is the carry-bar box from O01. A paired good-order and poor-order run in the new scene is pending. Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "Arrival at 260 s and the other-floor call 360 s after arrival are estimates. Episode time and step limits are pending.",
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
    "instruction": "Place the dish and both drinks from the starting counter onto the tray, then carry the loaded tray to the brown table at the far end of the room. Leave the loaded tray resting on the table and release it. Keep the tray and its contents off the floor.",
    "zh": "把起点台面上的菜和两杯饮料装盘，端到房间远端的棕色桌上。把托盘放稳并松手。保持托盘和盘内物品离地。",
    "environment": "L-shaped kitchen. A floor scrubber moves along the aisle between the starting counter and the brown table, and the floor it passes stays wet. Driving onto wet floor, touching the scrubber or dropping anything ends the episode; earned points are kept.",
    "success": "The tray with the dish and both drinks rests on the brown table at the far end, released by the robot, and nothing has touched the floor.",
    "steps": [
      {
        "criterion": "Place one dish and two drinks on the tray.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Carry the tray across the far boundary without driving onto wet floor or touching the floor scrubber. Keep all items stable, with nothing spilled or dropped. Record time until this section becomes wet.",
        "points": 60,
        "timing": true
      },
      {
        "criterion": "Place the dish and both drinks stably in the target area on the brown table at the far end of the room.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Reviewed rubric with the chair milestone removed; Harbor package present (xbench-sim#65). Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/k02-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/k02-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "K03": {
    "instruction": "Swap the bottle on the fridge shelf with the cup on the counter to the right of the sink, then close both fridge doors. Leave both items upright and stable in their exchanged locations.",
    "zh": "交换冰箱搁板上的瓶子和水槽右侧台面上的杯子，再关上两扇冰箱门。让两件物品在交换后的位置直立放稳。",
    "environment": "Single-wall kitchen with a French-door fridge whose doors close by themselves from any opening angle, like a commercial display fridge (from the stop in about 6 s, from 60° in about 4.5 s; estimate). The bottle stands on a fridge shelf, the cup on the counter right of the sink, and a plate occupies the marked temporary space; hand points are 0.89–1.40 m. Holding a door open is not required; holding time is only recorded.",
    "success": "The bottle rests upright on the counter in the cup’s starting region and the cup rests upright on the fridge shelf in the bottle’s starting region, without robot support. Both fridge doors are closed and released, and no item or the plate has touched the floor.",
    "steps": [
      {
        "criterion": "Before completing the exchange, clear the marked temporary space by moving the occupying plate onto another counter surface and releasing it. Keep the space clear and the plate stable for 0.5 seconds.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Open either fridge door to at least 60°.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Exchange the bottle and cup into each other’s starting regions. Leave both upright, supported by the counter or fridge shelf, with all robot contact released, and stable for one second.",
        "points": 40,
        "timing": false
      },
      {
        "criterion": "After completing the exchange, leave both fridge doors within 5° of closed, with all robot contact with the doors released, and stable for one second. Both items must remain upright, supported, and released in their exchanged locations.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Scene checked on 2026-11-27 under the 1/120 s physics step. Holding the door is no longer required; holding time is only recorded. Wired into Harbor (xbench-sim#65). A full run of the revised design is pending. Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "Door closing time is an estimate (no product specification found). Episode limits are pending.",
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
    "environment": "L-shaped kitchen. The wall cabinet has a lift-up door that falls when released (from its 46 deg stop it closes in about 0.9 s). The cup, plate and bowl sit on a raised rack in the dishwasher drawer at 0.70 m; the cabinet bottom is at 1.28 m and the door handle at most 1.49 m, so no hand point needs bending or overhead reach. Support the door while transferring the dishes.",
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
    "pending": "The door counts as raised at 40 deg. Damping and closing time are estimates until human teleoperation. Episode time and step limits are pending.",
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
    "images": [
      {
        "src": "images/k05-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/k05-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "W01": {
    "instruction": "Carry the red toolbox from the shelf in front of you to the pallet across the aisle without setting it down along the way, then release it and leave it resting on the pallet. Neither the robot nor the toolbox may touch the forklift, and the toolbox must not fall onto the floor.",
    "zh": "把你面前货架上的红色工具箱搬到通道对面的托盘上，途中不要放下，然后松手，让它留在托盘上。机器人和工具箱都不能碰到叉车，工具箱不能掉到地上。",
    "environment": "Warehouse aisle. A forklift drives back and forth along the aisle between the shelf and the destination pallet; a missed gap can be waited out. Touching the forklift, setting the toolbox down on the way, losing the grasp or dropping it ends the episode; earned points are kept.",
    "success": "The toolbox rests stably on the destination pallet without robot support. It has not been set down elsewhere during transport. Neither the robot nor the toolbox has touched the forklift, and the toolbox has not touched the floor.",
    "steps": [
      {
        "criterion": "Lift the toolbox clear of the shelf and maintain a physical grasp for 0.5 seconds, with the entire robot and toolbox outside the forklift travel area.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Move the entire robot and toolbox to the far side of the aisle without forklift contact.",
        "points": 60,
        "timing": true
      },
      {
        "criterion": "Leave the toolbox supported by the destination pallet, with all robot contact released, and stable for one second. Minor edge or handle overhang is allowed; precise centering and an upright orientation are not required.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Reviewed rubric and Harbor package (xbench-sim#70). Earlier scripted comparisons include a forklift-contact failure and a successful delivery. Reviewed and merged on 2026-11-28; offline checks only.",
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
    "instruction": "Fill both buckets at the dispenser to at least the marked minimum level. Leave them upright and stable on the storage pallets with the dispenser switched off.",
    "zh": "在出料口把两个料桶都接到标出的最低料位以上。关掉出料口，让两个桶直立、放稳在存放托盘上。",
    "environment": "Warehouse filling station on a 0.62 m stand. Pressing the dispenser button starts the flow and pressing it again stops it; while it flows the level keeps rising, and a bucket overflows past its upper limit. Overflow forfeits that milestone and overall success but does not end the episode; a bucket touching the floor does.",
    "success": "Both buckets hold at least 2 L and rest upright and stable in their storage regions without robot support. The dispenser is switched off, no bucket has touched the floor, and the first bucket was stored while the second was receiving material.",
    "steps": [
      {
        "criterion": "Fill the first bucket to at least 2 L and stop dispensing without overflowing it.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "After the first fill stops, place the second bucket under the outlet and have it actually receive material.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "After the second bucket starts receiving material, leave the first bucket upright and stable in its storage region, released, for one second. The second bucket must keep receiving material until then.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Stop dispensing into the second bucket after it holds at least 2 L and before it overflows. Record the time left until overflow.",
        "points": 20,
        "timing": true
      },
      {
        "criterion": "Leave the second bucket, holding at least 2 L, upright and stable in its storage region, released, for one second.",
        "points": 20,
        "timing": false
      }
    ],
    "status": "Reviewed rubric and Harbor package (xbench-sim#70). The dispenser stand is raised to 0.62 m. The full-bucket carry is not yet checked in simulation. Reviewed and merged on 2026-11-28; offline checks only.",
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
    "instruction": "Place the tray from the pallet stack near the conveyor onto the conveyor, with the box from the rack in front of you resting on the tray. Keep both items off the floor.",
    "zh": "把托盘堆上的托盘放到传送带上，并让你面前货架上的箱子放在托盘上。两样东西都不能落地。",
    "environment": "Warehouse conveyor that runs continuously at 0.18 m/s from the start and cannot be paused or reversed. The tray sits on a pallet stack near the conveyor and the box on a rack in front of the robot; both hands may be used. An empty tray or a lone box that crosses the dispatch line cannot be fixed afterwards.",
    "success": "The box remains supported by the tray as both completely cross the dispatch line, with neither object supported by the robot. Neither the box nor the tray has touched the floor.",
    "steps": [
      {
        "criterion": "Grasp the box and lift it clear of its starting support.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Place the box on the tray and release it, keeping it supported and stable relative to the tray for 0.5 seconds. This may be done in the preparation area or on the conveyor.",
        "points": 60,
        "timing": false
      },
      {
        "criterion": "Send the loaded tray on the conveyor: the box and tray both completely cross the dispatch line, with the box stable on the tray and neither touching the robot.",
        "points": 20,
        "timing": true
      }
    ],
    "status": "Reviewed rubric and Harbor package (xbench-sim#70). Earlier scripted comparisons include an empty-tray failure and a loaded-tray success. Reviewed and merged on 2026-11-28; offline checks only.",
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
    "instruction": "Place the red toolbox you are holding and the black toolbox on the conveyor on the shared storage shelf at the far end of the loading area. Leave both toolboxes resting stably without robot support; neither may touch the floor.",
    "zh": "把你手里的红色工具箱和传送带上的黑色工具箱，放到装货区远端的共用货架上。让两个工具箱都不靠机器人扶持、稳稳地放着；两个都不能碰到地面。",
    "environment": "Warehouse loading area. The robot starts holding the red toolbox while the black toolbox travels along the conveyor toward its end; a temporary rack pallet stands beside the conveyor. Setting the red toolbox down first is optional: carrying one toolbox in each hand can still succeed with 80 points. A toolbox touching the floor ends the episode.",
    "success": "Both toolboxes rest stably on the shared destination shelf without robot support. The black toolbox was picked up off the conveyor belt, and neither toolbox has touched the floor.",
    "steps": [
      {
        "criterion": "Before picking up the incoming toolbox, leave the red toolbox supported by the temporary rack pallet beside the conveyor, released, and stable for 0.5 seconds.",
        "points": 20,
        "timing": false
      },
      {
        "criterion": "Grasp the black toolbox and lift it clear of the belt before its whole footprint passes the belt end, then hold it for 0.5 seconds. Touching, pushing or holding it on the belt does not count. Record the belt-travel time left at pickup.",
        "points": 40,
        "timing": true
      },
      {
        "criterion": "Leave both toolboxes supported by the shared destination shelf, released, and stable for one second. Minor edge or handle overhang is allowed; precise centering and an upright orientation are not required.",
        "points": 40,
        "timing": false
      }
    ],
    "status": "Reviewed rubric and Harbor package (xbench-sim#70). A two-handed catch was demonstrated earlier; the initial one-hand hold and the full placement sequence are not yet checked. Reviewed and merged on 2026-11-28; offline checks only.",
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
    "instruction": "Load the red toolbox from the pick table into the inner slot of the tugger trailer and the black toolbox into the outer slot. Leave both boxes supported by the trailer and keep the robot clear of the vehicle route. Keep the robot away from the tractor and trailer, and keep both boxes off the tractor and the floor.",
    "zh": "把取货桌上的红色工具箱装进拖车内侧货位，黑色工具箱装进外侧货位，两箱都由拖车承托，机器人离开车辆路线；机器人不碰牵引车和拖车，两箱不碰牵引车、不落地。",
    "environment": "Warehouse aisle. A tugger with a trailer loops on a fixed route and stops for 30 s each lap (about 92 s per lap). Two 1 kg toolboxes with upright handles wait on a pick table (0.90 m), and a staging table stands 1.1 m from the trailer. Either box may go first, in the same or different stops. The robot touching the tractor or trailer, a box touching the tractor, or a box on the floor ends the episode.",
    "success": "Both toolboxes are released and supported in their assigned slots on the trailer. The robot is clear of the vehicle route, and no prohibited contact or floor drop has occurred.",
    "steps": [
      {
        "criterion": "During a stop, place the red toolbox in the inner slot, release it completely, and leave it supported and stable for 1 second.",
        "points": 40,
        "timing": true
      },
      {
        "criterion": "During a stop, place the black toolbox in the outer slot, release it completely, and leave it supported and stable for 1 second.",
        "points": 40,
        "timing": true
      },
      {
        "criterion": "Leave both toolboxes released and supported in their assigned slots as the trailer travels at least 0.5 m after departing the stop, with the entire robot clear of the vehicle’s current and upcoming travel area.",
        "points": 20,
        "timing": true
      }
    ],
    "status": "Reviewed rubric and Harbor package with the looping tugger (xbench-sim#70). Robot clearance from the route at departure is not yet checked in simulation. Reviewed and merged on 2026-11-28; offline checks only.",
    "pending": "Stop duration (30 s) and lap period (about 92 s) are estimates. Episode time and step limits are pending.",
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
    "instruction": "Take the pudding box out of the chest freezer and put it on the counter next to the freezer.",
    "zh": "从冷柜取出蓝色食品盒，放到旁边的台面上。",
    "environment": "Single-wall kitchen with a long chest freezer. Three small packages from the YCB set lie on a 0.60 m support inside (target: a pudding box; others: a gelatin box and a sugar box). The lid falls when released: from 90 deg it closes in about 1.8 s of physics time. The robot supports it while moving sideways to reach the target.",
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
    "pending": "Lid mass, counterbalance and hinge damping are estimates. The lid handle is at 1.50 m at the 60 deg support angle and 1.62 m when fully open. Episode limits are pending.",
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
    "instruction": "Put the empty can from the cart into the kitchen bin.",
    "zh": "把推车上的垃圾袋放进垃圾桶。",
    "environment": "Galley kitchen. A blue wheeled recycling bin (NVIDIA SimReady) with a hinged lid and a front handle bar; the lid closes by itself when released (from 75 deg in about 1.0 s). An empty food can (YCB tomato soup can, 6.6 cm across) stands upright on the 0.84 m shelf of a service cart parked beside the bin. From where the lid can be opened, the free hand cannot reach the can: the robot must hold the lid open and side-step about 0.3 m. Hand points 0.73-1.26 m.",
    "success": "The can is inside the bin and at rest, the lid is shut and the hand has not been caught.",
    "steps": [
      {
        "criterion": "Park the cart in the marked area by the bin.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Hold the lid open far enough for the can. The required angle is pending.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Keep the lid supported while taking the can and dropping it inside. The lid must not close on the arm. Record support duration.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Withdraw the arm and close the lid with the arm clear.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene changed on 2026-11-27: the paper bag is replaced by an empty can that can be released above the opening. The scene self-check passes. A pose-only reach check with side grasps found no solution; top-down grasps were not tried. Feasibility is checked by human teleoperation. Server integration and an end-to-end trial are pending.",
    "pending": "The minimum opening angle and episode limits are pending. The can is a food can, not an aluminium drink can: no drink-can asset with 4096 textures was found.",
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
    "instruction": "Push the handcart up the ramp into the loading zone, then load the toolbox from the table onto its top shelf.",
    "zh": "把推车推上坡到装货区，左手扶住车，右手把桌上的工具箱放到车上。",
    "environment": "Warehouse with a gentle 0.95 deg ramp. An empty double-deck service cart (the N10 cart) stands on the flat floor at the foot of the ramp. A red 1 kg toolbox with an upright handle sits on a level table beside the loading zone, which is on the slope. A released cart rolls back down: about 1.4 m in 5 s.",
    "success": "The cart is in the loading zone with the toolbox at rest on its top deck, and the cart never rolled back more than 0.075 m from the highest point it reached.",
    "steps": [
      {
        "criterion": "Push the cart into the loading zone on the slope.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Lift the toolbox off the table (at least 2 cm).",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Keep the left hand on the cart handle and the cart in the zone during the whole transfer. Scored over the interval.",
        "points": 25,
        "timing": true
      },
      {
        "criterion": "Leave the toolbox at rest on the top deck (moving less than 1 cm in 1 s) while the cart is in the zone.",
        "points": 25,
        "timing": false
      }
    ],
    "status": "Scene rebuilt on 2026-11-27 after the review and Harbor package updated. Server integration and an end-to-end trial are pending.",
    "pending": "Rollback limit 0.075 m, settle and lift thresholds are estimates until human teleoperation. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n04-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n04-head.jpg",
        "view": "Head camera at start"
      },
      {
        "src": "images/n04-zone.jpg",
        "view": "Loading zone close-up"
      }
    ]
  },
  "N05": {
    "instruction": "Push the cart to the serving hatch and pass the saucepan from the cart through the hatch onto the counter on the other side.",
    "zh": "把推车上的东西递到卷帘的另一侧放好。",
    "environment": "A serving hatch with a push button beside it. Pressing the button raises the shutter in about 4 s; it stays open for 10 s and then lowers by itself. Pressing again while it lowers raises it again. A 16 cm lidded saucepan with a handle (1.28 kg) stands on a service cart.",
    "success": "The saucepan is at rest on the far counter. The lowering shutter never touched the robot or the saucepan.",
    "steps": [
      {
        "criterion": "Park the cart in the marked area beside the hatch.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Open the shutter with the button.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Before the shutter closes, put the saucepan at rest on the far counter. Record the time left.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Proposed English first sentence, pending approval. Open time 10 s and shutter speed are estimates, to be set from interface-measured action times.",
    "images": [
      {
        "src": "images/n05-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n05-head.jpg",
        "view": "Head camera at start"
      }
    ]
  },
  "N06": {
    "instruction": "Carry the blue crate from the small table on your right to the other side of the revolving door.",
    "zh": "把你右前方小桌上的蓝色周转箱，搬到旋转门的另一侧。",
    "environment": "A three-wing revolving door, 3.0 m across, turns continuously (6°/s at 1x, 12°/s at 2x); a missed gap can be waited out. The crate (400 × 300 × 220 mm, 2 kg) has a carry bar across its top at 0.93 m, so one hand can lift it. A wing touching the robot or crate ends the episode.",
    "success": "The robot and the crate reach the far side of the door, and no door wing has touched either.",
    "steps": [
      {
        "criterion": "The crate is held off the table by at least one hand, with the robot in the entrance area.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "The whole robot and crate move into the space between two wings without contact. Record time until the trailing wing reaches the robot.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "The robot and the crate, still in hand, leave through the exit to the far side without contact.",
        "points": 34,
        "timing": true
      }
    ],
    "status": "One-hand crate with a carry bar; a scripted run carried it through the revolving door once at 1x and once at 2x (xbench-sim#69). Repeat runs are pending. Reviewed and merged on 2026-11-28; offline checks only.",
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
    "instruction": "Take the desk organiser from the small table through the speed gate and put it on the table on the other side.",
    "zh": "把东西放到闸机门的另一侧。",
    "environment": "An office speed gate opens and closes on a fixed cycle. A portable desk organiser with a centre handle (380 x 255 x 190 mm, 0.59 kg) stands on a small table. The receiving table stands against the east wall behind the gate, beyond the glass fence, so the walkway stays clear.",
    "success": "The organiser is on the table behind the gate. The gate never struck the robot.",
    "steps": [
      {
        "criterion": "Hold the organiser and stand in front of the gate.",
        "points": 33,
        "timing": false
      },
      {
        "criterion": "Pass through the gate with the organiser while it is open.",
        "points": 33,
        "timing": true
      },
      {
        "criterion": "Put the organiser on the receiving table.",
        "points": 34,
        "timing": false
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Proposed English first sentence, pending approval. Episode time and step limits are pending.",
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
    "instruction": "Put the three things on the table into the basket at the end of the table.",
    "zh": "把地上的三样东西收进篮子里。",
    "environment": "A long table (0.75 m high) in the U-shaped kitchen. A tabletop cleaning robot, built at the real size of an Ecovacs WINBOT W1 PRO (27 x 27 cm), sweeps the table once on a back-and-forth path at 0.25 m/s. A stapler, a tape measure and a small video camera (Poly Haven, CC0) lie on its path; the basket stands at the far end of the table, outside the path.",
    "success": "All three objects are in the basket, and the cleaning robot touched or pushed none of them.",
    "steps": [
      {
        "criterion": "Lift the first object in the cleaning robot’s path before contact. Measure time until the cleaning robot reaches its original location.",
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
    "pending": "Measured in the scene: cleaner speed 0.25 m/s, first contact with the three objects at 15.0, 30.0 and 45.0 s of physics time. Table height and object masses are estimates until human teleoperation. Episode time and step limits are pending.",
    "images": [
      {
        "src": "images/n11-scene.jpg",
        "view": "Full scene at start"
      },
      {
        "src": "images/n11-head.jpg",
        "view": "Head camera at start"
      },
      {
        "src": "images/n11-cleaner.jpg",
        "view": "Close-up of the tabletop cleaning robot"
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
    "instruction": "Unlock the colour code lock on the box on the conveyor by pressing its buttons in the order shown on its display.",
    "zh": "把传送带上两个箱子的盖子合上扣好。",
    "environment": "One box rides the conveyor. On its side are red, yellow and blue spring buttons, a display showing the order to press, and a lock lamp that turns from red to green when the code is right. A wrong press resets the code. Walk along the belt to press the buttons in time.",
    "success": "The lock is open before the box reaches the end of the belt.",
    "steps": [
      {
        "criterion": "Stand in the marked area beside the belt.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Press the first colour correctly.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Press the first two colours correctly.",
        "points": 25,
        "timing": false
      },
      {
        "criterion": "Open the lock before the box reaches the end. Record the time left.",
        "points": 25,
        "timing": true
      }
    ],
    "status": "Scene and Harbor package are present.  Server integration and an end-to-end trial are pending. No end-to-end pass is recorded under the current robot and clock rules.",
    "pending": "Proposed English first sentence, pending approval. Belt speed and length unchanged from the earlier design. With one box a miss is final (D2a).",
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
    "instruction": "Carry the long board together with the freight vehicle to the unloading point and put it down on the pallets.",
    "zh": "和运货车一起把长板抬到卸货点，放到架子上。",
    "environment": "A tug and the robot move side by side; the long board lies across between them, one end in the tug cradle and the other held by the robot. The tug follows a fixed route at 0.2 m/s with a wide turn; the robot walks on the inner side. At the end the cradle lowers 10 cm and the board settles on a pallet stack 0.75 m high.",
    "success": "The board rests on the pallet stack at the unloading point. It never fell, and the tug never struck the robot.",
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
    "pending": "Route and speeds are estimates. Episode time and step limits are pending.",
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
