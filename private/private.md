# interview preparation

- introduction

Hi, I'm Fang Zihan! I graduated from Wuhan University of Technology in 2015. I started my career as a C programmer at TCL in Shenzhen. Later, I worked as a PHP developer at Shanghai Leqee, focusing on e-commerce API development using PHP.

In 2018, I joined Shanghai Tencent as a full-stack engineer, where I worked on developing a game assistant app. I used PHP, Swoole, and Golang for the backend, and also learned React and React Native for frontend development.

In 2021, I moved to Bybit as a full-stack engineer, working on a trading bot using Golang.

Last year, I joined Bitdeer as a backend developer, where I'm currently involved in web3 projects related to tokenized US Treasury bills and precious metals on the blockchain using Golang.

- projects

I am working on a project called STBT, which is a Web3 Real-World Asset (RWA) project. Basically, it lets users hold tokens on the blockchain that are equivalent to U.S. Treasury Bonds. This means users can earn returns just like they would if they held actual U.S. Treasury Bonds. They can use stablecoins like USDT or USDC to buy STBT tokens, hold them to earn returns, or burn them to get their stablecoins back.

At STBT, our system is mainly divided into several key modules: the API interface module, the order processing module, and the blockchain interaction module. We use MySQL as our fundamental storage system, Kafka for order driving, we using another separate service for sending messages at regular intervals in kafka. With each message received, the system automatically checks the current database for orders and facilitates their flow.

The blockchain interaction involves both initiating blockchain action actively and pulling logs periodically. The initiating action relies on our company's blockchain operation service, while the log pulling is driven by cron tasks that fetch the latest blockchain information.

My main job was to handle the core logic for the order processing, especially focusing on 'mint' and 'burn' orders. When a user creates a mint order, it starts in the 'init' state and moves to 'waiting approve'. If the user isn't verified as a qualified investor, the admin won't approve the order. Once approved, it goes to the 'approved' state, ready for the minting process.

Minting on the blockchain involves interacting with smart contracts, which needs to be done carefully to avoid mistakes and prevent hacks. So, we added a 'time locker' mechanism. This means a mint operation has to be scheduled in advance and can only proceed after a set time.

When an admin schedules a mint operation, the order enters 'waiting schedule result'. After the time lock ends and the blockchain confirms the operation, we should receive callback from blockchain operation system, the order moves to 'waiting execute'. Then, the admin can execute the mint operation, which moves the order to 'waiting execute result'. Once the blockchain process is done and callback received, the order is completed.

If the schedule or mint operation fails, the order goes into a 'failed' state. The admin can retry the operation, and the system will mark it as 'retrying'. Depending on the data, the system will decide whether to retry the schedule or the mint operation, and once it gets the callback, it moves to the successful state.

The burn orders work pretty much like the mint orders, but after the burn execute is done, there's an extra step for financial settlement.

To speed things up, the mint and burn processes can be handled automatically depending on the order volume. This reduces the amount of manual work needed from the team.

In our order state design, some states can transition automatically. For example, after a mint order is approved, it automatically schedules the next step. But others, like executing the mint, need to be done manually. These transitions rely on our scheduling service. The service regularly checks the database for orders that are in a state that can move automatically and processes them.

The basic idea behind our state machine design is simple: the current order state plus the current action equals the next order state. This makes it easy to figure out what needs to happen next for each order.

This approach has not only streamlined our operations but also ensured that our processes are both efficient and secure.

- summary

I'm currently working on a Web3 project that's all about tokenizing U.S. Treasury Bonds, letting users buy these tokens with stablecoins like USDT or USDC. My main focus is on handling the core logic for STBT orders, particularly the mint and burn processes.

For mint orders, I'm managing a series of state transitions like 'init', 'waiting approve', 'approved', and 'waiting execute'. Some of these states transition automatically based on the order volume, which really helps to cut down on manual intervention and speeds up the whole process. For example, once a mint order gets approved, it automatically moves to the next phase without needing any manual input.

Burn orders follow a similar path but include an extra step for financial settlement after execution. This step is crucial to make sure all the financial data is accurate and everything adds up correctly after a burn.

To keep everything running smoothly, we've set up a scheduling service that periodically checks the database for orders that can move to the next state automatically. This service is key to maintaining efficiency and security in our operations by ensuring state transitions happen correctly and on time.

The state machine design we're using is pretty straightforward: the current state of an order plus the current action determines the next state. This makes development and debugging much simpler and helps the team easily understand and manage the order lifecycle.

Overall, this project is a great opportunity for me to use my skills in Web3 technologies, state machine design, and process automation, making the order processing system more efficient and secure.