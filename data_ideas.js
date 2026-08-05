const ideasData = [
    {
        prompt: "Public transport should be completely free of charge. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Make it Free)",
        bucketB_label: "Disagree (Charge Fares)",
        arguments: [
            { text: "Removing fares encourages commuters to leave their cars at home, drastically reducing urban smog.", type: "A" },
            { text: "It ensures low-income families have equal access to distant employment and educational opportunities.", type: "A" },
            { text: "Without ticket revenue, local councils cannot afford to maintain or upgrade the aging rail network.", type: "B" },
            { text: "Free networks frequently become overcrowded and attract anti-social behavior during late hours.", type: "B" },
            { text: "TRAP: Air travel is heavily subsidized by the government in many developing nations.", type: "Trap" },
            { text: "TRAP: People should buy electric cars to protect the environment from toxic carbon emissions.", type: "Trap" }
        ]
    },
    {
        prompt: "Artificial intelligence and robots will soon replace many human jobs. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "Machines can take over dangerous manual labor, preventing severe workplace injuries and fatalities.", type: "A" },
            { text: "Automation drastically lowers production costs, making essential goods much cheaper for consumers.", type: "A" },
            { text: "Mass displacement of unskilled workers will trigger severe spikes in global poverty and inequality.", type: "B" },
            { text: "A loss of traditional employment robs many individuals of their sense of purpose and daily routine.", type: "B" },
            { text: "TRAP: Children should learn how to code from a very young age in primary school.", type: "Trap" },
            { text: "TRAP: Science fiction movies often exaggerate how smart robots will actually become in the future.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think governments should heavily tax unhealthy food. Others believe citizens should be free to eat whatever they want. Discuss both views.",
        bucketA_label: "Support Junk Food Tax",
        bucketB_label: "Support Freedom of Choice",
        arguments: [
            { text: "A financial penalty naturally deters consumers from purchasing highly processed, sugary items.", type: "A" },
            { text: "The revenue generated can be used to subsidize fresh organic vegetables for poorer communities.", type: "A" },
            { text: "It disproportionately punishes low-income households who rely on cheap meals to survive.", type: "B" },
            { text: "Governments should not act as strict parents dictating the personal dietary habits of adult citizens.", type: "B" },
            { text: "TRAP: Fast food wrappers are a major contributor to non-biodegradable plastic waste in the ocean.", type: "Trap" },
            { text: "TRAP: People should exercise for at least thirty minutes every single day to avoid heart disease.", type: "Trap" }
        ]
    },
    {
        prompt: "Many students take a gap year to travel or work before starting university. What are the advantages and disadvantages of this?",
        bucketA_label: "Advantages",
        bucketB_label: "Disadvantages",
        arguments: [
            { text: "Traveling abroad allows teenagers to gain independence and broadens their cultural horizons.", type: "A" },
            { text: "Working for twelve months gives students practical professional skills before they choose a degree.", type: "A" },
            { text: "A prolonged break from formal education can cause students to completely lose their academic discipline.", type: "B" },
            { text: "It is incredibly expensive, often putting an unfair and highly stressful financial burden on parents.", type: "B" },
            { text: "TRAP: University tuition fees have doubled in many Western countries over the last decade.", type: "Trap" },
            { text: "TRAP: High school teachers should be paid a higher salary to deal with stressful classrooms.", type: "Trap" }
        ]
    },
    {
        prompt: "More people are migrating to cities than ever before. What are the causes of this, and what problems does it bring?",
        bucketA_label: "Causes of Migration",
        bucketB_label: "Problems it Brings",
        arguments: [
            { text: "Metropolitan centers offer vastly superior career opportunities and significantly higher starting salaries.", type: "A" },
            { text: "Cities concentrate world-class infrastructure, including specialized hospitals and prestigious universities.", type: "A" },
            { text: "A sudden influx of residents puts immense strain on housing, triggering skyrocketing rent prices.", type: "B" },
            { text: "Overpopulation inevitably leads to severe traffic congestion and a sharp decline in regional air quality.", type: "B" },
            { text: "TRAP: Farming is an incredibly difficult profession that requires waking up long before sunrise.", type: "Trap" },
            { text: "TRAP: People should spend more time visiting national parks during their summer holidays.", type: "Trap" }
        ]
    },
    {
        prompt: "Many countries are moving towards a cashless society. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Pro-Digital)",
        bucketB_label: "Disadvantages (Keep Cash)",
        arguments: [
            { text: "It significantly reduces petty street crime, as citizens no longer carry physical wallets to steal.", type: "A" },
            { text: "Digital tracking makes it incredibly difficult for large corporations and criminals to evade taxes.", type: "A" },
            { text: "An entirely digital system completely excludes the elderly who struggle to use modern smartphones.", type: "B" },
            { text: "If a natural disaster disables the power grid, the entire regional economy immediately collapses.", type: "B" },
            { text: "TRAP: Cryptocurrencies like Bitcoin are highly volatile and incredibly risky financial investments.", type: "Trap" },
            { text: "TRAP: Online shopping is completely destroying small, family-owned businesses on the high street.", type: "Trap" }
        ]
    },
    {
        prompt: "Governments spend billions on space exploration. Some argue this money should be spent on fixing problems on Earth. Discuss both views.",
        bucketA_label: "Support Space Exploration",
        bucketB_label: "Focus on Earth's Problems",
        arguments: [
            { text: "Orbital research has led to invaluable technological breakthroughs, including GPS and water purifiers.", type: "A" },
            { text: "Discovering habitable planets may ultimately be necessary to ensure the long-term survival of humanity.", type: "A" },
            { text: "It is morally unjustifiable to fund rocket launches while millions of people lack clean drinking water.", type: "B" },
            { text: "The exorbitant funds allocated to NASA could instantly eradicate global poverty if redirected properly.", type: "B" },
            { text: "TRAP: Astronauts suffer from severe bone density loss after spending months in zero gravity.", type: "Trap" },
            { text: "TRAP: Aliens have likely already visited Earth but national governments are hiding the evidence.", type: "Trap" }
        ]
    },
    {
        prompt: "Students should be required to wear uniforms to school. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Pro-Uniform)",
        bucketB_label: "Disagree (Anti-Uniform)",
        arguments: [
            { text: "It instantly eradicates peer pressure and bullying related to wearing expensive designer clothing.", type: "A" },
            { text: "Wearing a formal outfit helps mentally prepare teenagers for the discipline of a professional workplace.", type: "A" },
            { text: "Forcing everyone to dress identically severely stifles childhood creativity and personal self-expression.", type: "B" },
            { text: "Purchasing specialized school blazers and ties places an unnecessary financial burden on poor families.", type: "B" },
            { text: "TRAP: Many private schools have significantly better academic results than public government schools.", type: "Trap" },
            { text: "TRAP: Teachers should also be required to pass a strict academic test every five years.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think zoos are cruel and should be closed. Others think they are useful to protect rare animals. Discuss both views.",
        bucketA_label: "Zoos are Cruel",
        bucketB_label: "Zoos are Useful",
        arguments: [
            { text: "Confining naturally nomadic animals to small concrete enclosures causes severe psychological distress.", type: "A" },
            { text: "Many commercial parks prioritize entertaining paying tourists rather than prioritizing animal welfare.", type: "A" },
            { text: "Carefully managed breeding programs have successfully saved multiple species from total extinction.", type: "B" },
            { text: "They provide a safe educational environment where children can learn to respect the natural world.", type: "B" },
            { text: "TRAP: Keeping a domestic dog or cat in a small city apartment is highly unfair to the pet.", type: "Trap" },
            { text: "TRAP: Deforestation in the Amazon is the primary reason why tropical species are dying out.", type: "Trap" }
        ]
    },
    {
        prompt: "Online university courses are becoming increasingly popular. Do the advantages of remote learning outweigh the disadvantages?",
        bucketA_label: "Advantages of Online",
        bucketB_label: "Disadvantages of Online",
        arguments: [
            { text: "It allows mature students with full-time jobs or children to study flexibly at their own pace.", type: "A" },
            { text: "Digital degrees are substantially cheaper, eliminating the massive cost of campus accommodation.", type: "A" },
            { text: "Staring at a screen entirely removes the spontaneous, collaborative debate of a physical seminar room.", type: "B" },
            { text: "Without a strict physical timetable, many young students lack the discipline to submit assignments.", type: "B" },
            { text: "TRAP: Social media algorithms are deliberately designed to distract teenagers from studying.", type: "Trap" },
            { text: "TRAP: Many university graduates struggle to find a job because they lack practical work experience.", type: "Trap" }
        ]
    },
    // ==========================================
    // BATCH 2: HIGH COMPLEXITY / ACCESSIBLE ENGLISH 
    // ==========================================
    {
        prompt: "More people are working from home instead of travelling to a workplace. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Work from Home)",
        bucketB_label: "Disadvantages (Go to Office)",
        arguments: [
            { text: "It saves workers a lot of money because they do not have to pay for train tickets or gas.", type: "A" },
            { text: "People have more free time to spend with their family because they do not waste time driving.", type: "A" },
            { text: "It is very hard for people to separate their work life from their relaxing time at home.", type: "B" },
            { text: "Team projects are much slower because workers cannot easily talk to each other face-to-face.", type: "B" },
            { text: "TRAP: Looking at a computer screen all day can make your eyes tired and cause headaches.", type: "Trap" },
            { text: "TRAP: Cities need to build more public buses so people can travel more easily.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think sending criminals to prison is the best way to reduce crime. Others believe education and job training are better. Discuss both views.",
        bucketA_label: "Support Prison",
        bucketB_label: "Support Education",
        arguments: [
            { text: "Locking criminals in jail keeps dangerous people away from normal, innocent citizens.", type: "A" },
            { text: "A harsh prison sentence acts as a strong warning to stop other people from breaking the law.", type: "A" },
            { text: "Job training helps criminals find honest work after they are released, so they do not steal to survive.", type: "B" },
            { text: "Many criminals never finished high school, so education fixes the root cause of their bad behavior.", type: "B" },
            { text: "TRAP: Violent video games and movies make young children act aggressively.", type: "Trap" },
            { text: "TRAP: Police officers should wear body cameras so people know they are doing their jobs correctly.", type: "Trap" }
        ]
    },
    {
        prompt: "Many people use too many single-use plastic goods, like bags and bottles. What are the causes of this, and how can we solve the problem?",
        bucketA_label: "Causes of the Problem",
        bucketB_label: "Solutions to the Problem",
        arguments: [
            { text: "Plastic is incredibly cheap for big companies to make compared to glass or paper.", type: "A" },
            { text: "Modern life is very busy, and people want the easiest and fastest way to carry their food.", type: "A" },
            { text: "Governments should add a high tax to plastic bags so people stop buying them.", type: "B" },
            { text: "Supermarkets must be forced by law to offer biodegradable packages made from plants.", type: "B" },
            { text: "TRAP: Global warming is melting the ice in the Arctic and harming polar bears.", type: "Trap" },
            { text: "TRAP: Electric cars are too expensive for normal families to buy right now.", type: "Trap" }
        ]
    },
    {
        prompt: "Schools should teach practical skills like cooking and managing money instead of purely academic subjects. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Teach Practical Skills)",
        bucketB_label: "Disagree (Keep Academic Focus)",
        arguments: [
            { text: "Every student needs to know how to save money and pay taxes to survive as an adult.", type: "A" },
            { text: "It gives confidence to students who are not naturally good at taking math and science tests.", type: "A" },
            { text: "University entrance exams only test academic subjects, so schools must prepare students for them.", type: "B" },
            { text: "Parents should take the responsibility to teach their own children basic life skills at home.", type: "B" },
            { text: "TRAP: Teachers are paid very low salaries for doing a highly stressful job.", type: "Trap" },
            { text: "TRAP: Children eat too much junk food in the school cafeteria, which makes them unhealthy.", type: "Trap" }
        ]
    },
    {
        prompt: "In many countries, the proportion of older people is increasing. Is this a positive or negative development?",
        bucketA_label: "Positive Effects",
        bucketB_label: "Negative Effects",
        arguments: [
            { text: "Healthy older people can take care of their grandchildren while the parents are at work.", type: "A" },
            { text: "They have decades of life experience and wisdom that they can share with younger generations.", type: "A" },
            { text: "It creates a massive cost for the public healthcare system because old people need more medicine.", type: "B" },
            { text: "There are fewer young workers available to pay the taxes needed to run the country.", type: "B" },
            { text: "TRAP: Many young people are moving to other countries to find better jobs and salaries.", type: "Trap" },
            { text: "TRAP: Retirement homes should have larger gardens so people can enjoy the sunshine.", type: "Trap" }
        ]
    },
    {
        prompt: "Social media connects people across the world, but it also makes people feel more lonely. Do you agree or disagree?",
        bucketA_label: "Social Media Connects Us",
        bucketB_label: "Social Media Makes Us Lonely",
        arguments: [
            { text: "People can easily talk to family members and old friends who live in different countries.", type: "A" },
            { text: "It helps people with rare interests or hobbies find groups of people who like the same things.", type: "A" },
            { text: "People only post their best moments online, which makes others feel jealous and depressed.", type: "B" },
            { text: "People spend all their time staring at screens instead of talking to real people face-to-face.", type: "B" },
            { text: "TRAP: The internet is full of fake news, so we must be careful about what we read.", type: "Trap" },
            { text: "TRAP: Modern smartphones have very short battery life compared to older mobile phones.", type: "Trap" }
        ]
    },
    {
        prompt: "International tourism has brought great benefit to many places. At the same time, it has caused problems for local people. Discuss both views.",
        bucketA_label: "Benefits of Tourism",
        bucketB_label: "Problems for Locals",
        arguments: [
            { text: "It creates thousands of jobs for local people working in hotels, restaurants, and tours.", type: "A" },
            { text: "Tourists bring a huge amount of foreign money into the local economy when they travel.", type: "A" },
            { text: "Famous historical places become incredibly crowded, making them difficult for locals to enjoy.", type: "B" },
            { text: "Traditional cultures are often ruined because they are turned into cheap shows for visitors.", type: "B" },
            { text: "TRAP: Airplanes cause a terrible amount of air pollution in the sky.", type: "Trap" },
            { text: "TRAP: Learning a second language like English is very difficult for older adults.", type: "Trap" }
        ]
    },
    {
        prompt: "To improve public health, governments should build more sports facilities. Others say this has little effect and other measures are needed. Discuss both views.",
        bucketA_label: "Build Sports Facilities",
        bucketB_label: "Focus on Other Measures",
        arguments: [
            { text: "Free public gyms make it much easier for poor families to exercise and stay healthy.", type: "A" },
            { text: "Building local basketball courts and parks encourages teenagers to play outside instead of gaming.", type: "A" },
            { text: "Most adults do not exercise because they are too tired after working long hours, not because they lack a gym.", type: "B" },
            { text: "Teaching healthy cooking classes in primary schools is a much more effective way to prevent illness.", type: "B" },
            { text: "TRAP: Professional football and baseball players earn far too much money.", type: "Trap" },
            { text: "TRAP: The Olympic Games cost cities billions of dollars to host and organize.", type: "Trap" }
        ]
    },
    {
        prompt: "In the past, people worked for the same company all their life. Today, people often change jobs many times. What are the reasons for this, and is it positive or negative?",
        bucketA_label: "Reasons for Changing",
        bucketB_label: "Positive or Negative Impacts",
        arguments: [
            { text: "Companies no longer promise lifelong jobs, so workers feel no loyalty to stay.", type: "A" },
            { text: "Moving to a new company is the fastest and easiest way to negotiate a much higher salary.", type: "A" },
            { text: "It is positive because workers can learn many different skills from different managers.", type: "B" },
            { text: "It is negative because businesses lose money constantly training new staff who leave quickly.", type: "B" },
            { text: "TRAP: Working from a laptop in a coffee shop is becoming very popular.", type: "Trap" },
            { text: "TRAP: Many university graduates have a hard time finding a job without experience.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think everyone should become vegetarian because eating meat causes serious environmental problems. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Go Vegetarian)",
        bucketB_label: "Disagree (Keep Eating Meat)",
        arguments: [
            { text: "Raising cows and pigs requires a massive amount of clean water and empty land.", type: "A" },
            { text: "Millions of farm animals produce a huge amount of dangerous greenhouse gases.", type: "A" },
            { text: "Meat provides important vitamins and proteins that are very difficult to get purely from plants.", type: "B" },
            { text: "Millions of farmers and truck drivers would lose their jobs and money if the meat industry closed.", type: "B" },
            { text: "TRAP: Fast food restaurants sell too many unhealthy burgers to children.", type: "Trap" },
            { text: "TRAP: Eating too much sweet food and sugar is the main cause of heart problems.", type: "Trap" }
        ]
    },
    {
        prompt: "In many cities, the use of bicycles is replacing the use of cars. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "Riding a bike creates zero pollution, which keeps the city air clean and healthy.", type: "A" },
            { text: "It is a great way for busy office workers to get daily exercise while traveling to work.", type: "A" },
            { text: "Bicycles are very dangerous to ride on busy roads next to heavy trucks and fast cars.", type: "B" },
            { text: "Bikes are completely useless for people who live very far away or have physical disabilities.", type: "B" },
            { text: "TRAP: Buying a brand new sports car is a bad financial choice.", type: "Trap" },
            { text: "TRAP: Public trains are often late or delayed during the cold winter months.", type: "Trap" }
        ]
    },
    {
        prompt: "Online shopping is quickly replacing traditional local stores. Do the advantages of this outweigh the disadvantages?",
        bucketA_label: "Advantages of Online Shopping",
        bucketB_label: "Disadvantages of Online Shopping",
        arguments: [
            { text: "People can comfortably buy anything they need at any time of the day or night.", type: "A" },
            { text: "It is very easy to compare prices on different websites to find the cheapest option.", type: "A" },
            { text: "It causes many friendly local businesses to close down because they cannot compete with cheap prices.", type: "B" },
            { text: "Shipping millions of items creates a huge amount of wasted cardboard and plastic packaging.", type: "B" },
            { text: "TRAP: Young people spend far too much money buying digital items in video games.", type: "Trap" },
            { text: "TRAP: Credit card companies can charge very high interest rates if you do not pay them back.", type: "Trap" }
        ]
    },
    {
        prompt: "Advertising is everywhere today. Some people think that advertising to children is dangerous and should be banned. Do you agree or disagree?",
        bucketA_label: "Agree (Ban it)",
        bucketB_label: "Disagree (Allow it)",
        arguments: [
            { text: "Young children do not understand that colorful commercials are just trying to trick them into wanting things.", type: "A" },
            { text: "It forces parents to buy expensive toys and sugary food that they cannot afford.", type: "A" },
            { text: "Advertising money actually pays for free children's television shows and online games.", type: "B" },
            { text: "Parents should take the responsibility to teach their own children how to ignore marketing.", type: "B" },
            { text: "TRAP: Toys made out of cheap plastic break easily and are bad for the environment.", type: "Trap" },
            { text: "TRAP: Many primary school children do not get enough sleep because they watch too much television.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think museums should be completely free for everyone. Others think that visitors should pay to enter. Discuss both views.",
        bucketA_label: "Museums Should be Free",
        bucketB_label: "Visitors Should Pay",
        arguments: [
            { text: "Poor families should have the exact same chance to learn about history and art as rich people.", type: "A" },
            { text: "Free entry encourages more foreign tourists to visit the city, which helps local restaurants.", type: "A" },
            { text: "Museums need a lot of money to keep old paintings safe and to pay their expert staff.", type: "B" },
            { text: "If everyone goes for free, the buildings will become too crowded to enjoy the art.", type: "B" },
            { text: "TRAP: Modern art is very confusing and difficult for normal people to understand.", type: "Trap" },
            { text: "TRAP: History is the most important subject taught in high school today.", type: "Trap" }
        ]
    },
    {
        prompt: "People all over the world are watching the same movies, wearing the same clothes, and eating the same food. Is this a positive or negative development?",
        bucketA_label: "Positive (Global Culture)",
        bucketB_label: "Negative (Loss of Tradition)",
        arguments: [
            { text: "It helps people from completely different countries understand each other easily when they meet.", type: "A" },
            { text: "It brings cheap, useful products and new technology to poorer nations much faster.", type: "A" },
            { text: "Small countries are quickly losing their unique cultural traditions and ancient languages.", type: "B" },
            { text: "Small local businesses cannot survive when forced to compete with massive international brands.", type: "B" },
            { text: "TRAP: Fast food is causing child obesity to increase in many developed countries.", type: "Trap" },
            { text: "TRAP: Learning the grammar of the English language is very difficult for adult students.", type: "Trap" }
        ]
    },
    {
        prompt: "In many cities, people are choosing to live in apartments rather than houses. What are the advantages and disadvantages of this?",
        bucketA_label: "Advantages of Apartments",
        bucketB_label: "Disadvantages of Apartments",
        arguments: [
            { text: "They are usually located right next to city centers and major train stations for easy travel.", type: "A" },
            { text: "Small spaces are much cheaper to heat in the winter and cool in the summer than large houses.", type: "A" },
            { text: "You have no private garden or backyard for your young children or pets to play in safely.", type: "B" },
            { text: "You have to deal with loud noise and music from the people living directly next to you.", type: "B" },
            { text: "TRAP: Very old historical buildings should be protected by the local government.", type: "Trap" },
            { text: "TRAP: Moving away to the quiet countryside is much better for your mental health.", type: "Trap" }
        ]
    },
    {
        prompt: "In many countries, the level of crime committed by young people is increasing. What are the causes of this, and how can we solve it?",
        bucketA_label: "Causes of Youth Crime",
        bucketB_label: "Solutions to the Problem",
        arguments: [
            { text: "Many parents work long hours and do not have the time to watch what their children do after school.", type: "A" },
            { text: "Teenagers see a lot of violence and bad behavior on the internet and try to copy it in real life.", type: "A" },
            { text: "Governments must build free sports clubs to keep teenagers busy and off the streets.", type: "B" },
            { text: "Schools should run special programs that teach young students about the real dangers of taking drugs.", type: "B" },
            { text: "TRAP: Prison cells are becoming too crowded with highly dangerous adult criminals.", type: "Trap" },
            { text: "TRAP: Police officers are not paid enough money for the dangerous work they do.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that testing medical products on animals is completely wrong. Others argue it is necessary for human progress. Discuss both views.",
        bucketA_label: "Animal Testing is Wrong",
        bucketB_label: "Animal Testing is Necessary",
        arguments: [
            { text: "Animals feel physical pain and deep fear in exactly the same way that human beings do.", type: "A" },
            { text: "Modern computers are powerful enough to simulate chemical tests without hurting living creatures.", type: "A" },
            { text: "It is the only way to be absolutely sure a new medicine will not accidentally kill a human patient.", type: "B" },
            { text: "Many life-saving cures for terrible human diseases were only discovered by testing them on mice first.", type: "B" },
            { text: "TRAP: Keeping wild lions and tigers in small cages at the city zoo is very cruel.", type: "Trap" },
            { text: "TRAP: Doctors need to spend much more time listening carefully to their sick patients.", type: "Trap" }
        ]
    },
    {
        prompt: "Some companies allow their employees to work four days a week instead of five, for the same pay. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "Having an extra day off makes workers much happier, healthier, and far less stressed.", type: "A" },
            { text: "People actually work faster and focus harder when they know they will get a longer weekend.", type: "A" },
            { text: "Customer service businesses like hotels and hospitals cannot close and must be open every day.", type: "B" },
            { text: "Forcing five days of heavy work into only four days can make employees incredibly tired.", type: "B" },
            { text: "TRAP: Working from a laptop at home allows people to wear comfortable clothes.", type: "Trap" },
            { text: "TRAP: The cost of buying fresh food is becoming too high for average workers.", type: "Trap" }
        ]
    },
    {
        prompt: "The media usually focuses on reporting bad news, like wars and disasters. Some people think they should report more good news. Do you agree or disagree?",
        bucketA_label: "Agree (Report More Good News)",
        bucketB_label: "Disagree (Keep Focus on Bad News)",
        arguments: [
            { text: "Seeing terrible things every single day makes normal people feel depressed and afraid of the world.", type: "A" },
            { text: "Hearing about positive charity work gives people hope and teaches them how to solve local problems.", type: "A" },
            { text: "It is the main job of the news to warn citizens about real dangers and emergencies in their area.", type: "B" },
            { text: "Bad news makes voters angry, which forces the government to take fast action to fix the problems.", type: "B" },
            { text: "TRAP: Traditional newspapers are losing a lot of money because everyone reads on their phones.", type: "Trap" },
            { text: "TRAP: Television reporters often talk much too fast for older people to understand.", type: "Trap" }
        ]
    },
    // ==========================================
    // BATCH 4: EXPANDED IELTS TOPIC CATEGORIES (30 Prompts)
    // ==========================================
    {
        prompt: "Some people think that all university students should study science or technology. Others think they should be allowed to study whatever they like. Discuss both views.",
        bucketA_label: "Force Science/Tech",
        bucketB_label: "Allow Free Choice",
        arguments: [
            { text: "The modern economy desperately needs software engineers and doctors to stay competitive globally.", type: "A" },
            { text: "Degrees in art and philosophy often leave young people without practical skills to find a job.", type: "A" },
            { text: "Society needs musicians, writers, and historians to protect our culture and entertain us.", type: "B" },
            { text: "Students will simply fail or drop out if they are forced to study difficult subjects they hate.", type: "B" },
            { text: "TRAP: High schools should provide free laptop computers to all young students.", type: "Trap" },
            { text: "TRAP: Learning a foreign language like English is very important for international business.", type: "Trap" }
        ]
    },
    {
        prompt: "Environmental problems are too big for individual people to fix. Only governments and large companies can make a real difference. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Only Gov/Companies)",
        bucketB_label: "Disagree (Individuals Matter)",
        arguments: [
            { text: "Massive international factories produce the vast majority of the world's dangerous air pollution.", type: "A" },
            { text: "Only the government has enough money to build giant solar farms and wind power stations.", type: "A" },
            { text: "If millions of normal people choose to recycle at home, the total impact is actually huge.", type: "B" },
            { text: "Customers can force bad companies to change by refusing to buy their plastic products.", type: "B" },
            { text: "TRAP: Polar bears are losing their homes because the ice in the Arctic is melting.", type: "Trap" },
            { text: "TRAP: Space exploration could help us find a new planet to live on in the future.", type: "Trap" }
        ]
    },
    {
        prompt: "The best way to reduce traffic in cities is to increase the price of petrol (gasoline). To what extent do you agree or disagree?",
        bucketA_label: "Agree (Increase Price)",
        bucketB_label: "Disagree (Use Better Ways)",
        arguments: [
            { text: "If driving becomes too expensive, commuters will be forced to take the train or bus instead.", type: "A" },
            { text: "The extra tax money collected from drivers can be used to fix broken roads and bridges.", type: "A" },
            { text: "Rich people will simply pay the higher price and continue to drive, so traffic will not change.", type: "B" },
            { text: "A much better solution is to make public transport completely free and run more often.", type: "B" },
            { text: "TRAP: Electric cars are much quieter and do not release black smoke into the air.", type: "Trap" },
            { text: "TRAP: Walking for thirty minutes a day is an excellent way to prevent heart disease.", type: "Trap" }
        ]
    },
    {
        prompt: "When choosing a job, the salary is the most important factor. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Money is Most Important)",
        bucketB_label: "Disagree (Other Factors Better)",
        arguments: [
            { text: "A high income is absolutely necessary to buy a house, raise children, and pay for medical care.", type: "A" },
            { text: "People naturally feel more respected and successful when they are paid well for their hard work.", type: "A" },
            { text: "Working in a highly paid but deeply stressful job will eventually destroy a person's mental health.", type: "B" },
            { text: "Having a friendly boss and supportive team is much more valuable for daily happiness.", type: "B" },
            { text: "TRAP: Universities charge incredibly high tuition fees for business and medical degrees.", type: "Trap" },
            { text: "TRAP: Many teenagers want to become famous YouTubers because it looks very easy.", type: "Trap" }
        ]
    },
    {
        prompt: "Nowadays, we can get news from many different sources, but we cannot trust all of it. Why is this happening, and how can we solve it?",
        bucketA_label: "Causes of Fake News",
        bucketB_label: "Solutions to the Problem",
        arguments: [
            { text: "Anyone can write a blog or make a video online without proving that their facts are true.", type: "A" },
            { text: "Companies write shocking, fake headlines specifically to get more clicks and make advertising money.", type: "A" },
            { text: "Schools must teach children how to carefully check if a website is a reliable source.", type: "B" },
            { text: "Social media companies should use software to automatically delete dangerous lies.", type: "B" },
            { text: "TRAP: Reading a physical newspaper in the morning is a very relaxing habit for older people.", type: "Trap" },
            { text: "TRAP: Many famous celebrities use Instagram to show fans their expensive clothes and cars.", type: "Trap" }
        ]
    },
    {
        prompt: "In many countries, the gap between the rich and the poor is growing wider. What problems does this cause, and what are the solutions?",
        bucketA_label: "Problems Caused",
        bucketB_label: "Possible Solutions",
        arguments: [
            { text: "When poor people cannot afford basic food, crime rates and violence in the city increase dramatically.", type: "A" },
            { text: "It creates a divided society where wealthy elites and poor workers completely hate each other.", type: "A" },
            { text: "Governments must force massive corporations and billionaires to pay a much higher percentage of tax.", type: "B" },
            { text: "The money collected from taxes must be spent on free university education for the poorest families.", type: "B" },
            { text: "TRAP: Buying a large house with a garden is the dream for many young married couples.", type: "Trap" },
            { text: "TRAP: Designer clothing brands charge thousands of dollars for simple bags and shoes.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that the best way to stay healthy is by exercising daily, while others think eating a balanced diet is more important. Discuss both views.",
        bucketA_label: "Exercise is Best",
        bucketB_label: "Diet is Best",
        arguments: [
            { text: "Running and lifting weights makes the human heart and muscles incredibly strong over time.", type: "A" },
            { text: "Sweating during a tough workout is the most effective way to reduce mental stress and anxiety.", type: "A" },
            { text: "You cannot lose weight simply by running if you continue to eat massive amounts of sugar and fat.", type: "B" },
            { text: "Fresh vegetables give the human immune system the exact vitamins it needs to fight off viruses.", type: "B" },
            { text: "TRAP: Hospital nurses work very long shifts and rarely get a chance to sit down.", type: "Trap" },
            { text: "TRAP: Buying organic food at the supermarket is usually much more expensive than normal food.", type: "Trap" }
        ]
    },
    {
        prompt: "Children today spend hours every day looking at smartphones and tablets. What are the causes of this, and is it a positive or negative development?",
        bucketA_label: "Causes of Screen Time",
        bucketB_label: "Positive or Negative Impacts",
        arguments: [
            { text: "Many tired parents give iPads to their children simply to keep them quiet while cooking dinner.", type: "A" },
            { text: "Video game companies hire psychologists to make their applications incredibly addictive for young brains.", type: "A" },
            { text: "It is a negative trend because staring at screens destroys a child's eyesight and posture.", type: "B" },
            { text: "It is deeply harmful because children fail to learn how to talk to real people face-to-face.", type: "B" },
            { text: "TRAP: Mobile phones are very useful for calling the police quickly in an emergency.", type: "Trap" },
            { text: "TRAP: Schools are slowly replacing heavy textbooks with lightweight laptop computers.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people believe that parents should be legally punished if their teenage children commit serious crimes. Do you agree or disagree?",
        bucketA_label: "Agree (Punish Parents)",
        bucketB_label: "Disagree (Do Not Punish)",
        arguments: [
            { text: "It forces lazy parents to finally take responsibility and watch exactly what their kids are doing.", type: "A" },
            { text: "Parents are the ones who teach morals; if a child is violent, it is usually the parents' fault.", type: "A" },
            { text: "Many good, hard-working parents simply cannot control rebellious teenagers who hang out with bad friends.", type: "B" },
            { text: "Putting a mother in prison means her other innocent children will be left completely alone.", type: "B" },
            { text: "TRAP: Prisons in many developed countries are completely full and cost too much money.", type: "Trap" },
            { text: "TRAP: Teenagers who get part-time jobs learn how to respect the value of money.", type: "Trap" }
        ]
    },
    {
        prompt: "Governments should spend more money on teaching science rather than teaching history and art. Do you agree or disagree?",
        bucketA_label: "Agree (Focus on Science)",
        bucketB_label: "Disagree (Protect Art/History)",
        arguments: [
            { text: "Scientific research directly leads to discovering new medicines that save human lives.", type: "A" },
            { text: "Engineering and computer technology are the only things that create true economic growth for a country.", type: "A" },
            { text: "History teaches young people about the terrible mistakes of the past so we do not repeat them.", type: "B" },
            { text: "Art and music are essential for mental happiness; a world of only machines would be deeply boring.", type: "B" },
            { text: "TRAP: Many famous paintings by artists like Picasso are worth millions of dollars today.", type: "Trap" },
            { text: "TRAP: Teachers often spend too much time preparing for exams instead of doing fun activities.", type: "Trap" }
        ]
    },
    {
        prompt: "Eco-tourism (visiting natural environments safely) is becoming very popular around the world. What are the advantages and disadvantages of this trend?",
        bucketA_label: "Advantages",
        bucketB_label: "Disadvantages",
        arguments: [
            { text: "It gives poor local villages a way to make money without cutting down their own forests.", type: "A" },
            { text: "When city people see beautiful wild animals, they are much more likely to donate money to save them.", type: "A" },
            { text: "Building eco-hotels and walking paths still destroys parts of the delicate natural habitat.", type: "B" },
            { text: "Large groups of noisy tourists walking through the jungle can deeply stress the wild animals.", type: "B" },
            { text: "TRAP: Flying to a foreign country on a big airplane is very expensive during the summer.", type: "Trap" },
            { text: "TRAP: Zoos in major cities try their best to keep their animals comfortable and well-fed.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people believe that there should be one global language that everyone speaks. Is this a positive or negative development?",
        bucketA_label: "Positive (One Language)",
        bucketB_label: "Negative (Keep Many)",
        arguments: [
            { text: "It would make international trade and business incredibly fast and completely perfectly clear.", type: "A" },
            { text: "Tourists and scientists could travel anywhere and instantly share their ideas without translation errors.", type: "A" },
            { text: "A language contains a culture's entire history; if it dies, that unique human history is lost forever.", type: "B" },
            { text: "It would give a massive, unfair advantage to the countries who naturally speak that language.", type: "B" },
            { text: "TRAP: French and Spanish are very popular subjects for high school students to learn.", type: "Trap" },
            { text: "TRAP: Using a smartphone application to translate text is becoming much easier today.", type: "Trap" }
        ]
    },
    {
        prompt: "Advertising convinces people to buy things they do not really need. To what extent do you agree or disagree?",
        bucketA_label: "Agree (It Tricks Us)",
        bucketB_label: "Disagree (It Helps Us)",
        arguments: [
            { text: "Companies use emotional music and famous actors to make us feel jealous if we don't buy their product.", type: "A" },
            { text: "People buy expensive new phones every single year just because an advertisement told them their old one is boring.", type: "A" },
            { text: "Commercials actually help customers discover useful new tools that genuinely improve their daily lives.", type: "B" },
            { text: "Advertising provides the money needed to keep websites, radio stations, and sports events completely free.", type: "B" },
            { text: "TRAP: Many cheap plastic products break after only a few weeks of normal use.", type: "Trap" },
            { text: "TRAP: Watching too much television makes people very lazy and stops them from exercising.", type: "Trap" }
        ]
    },
    {
        prompt: "In modern families, both parents usually work full-time. What are the advantages and disadvantages of this?",
        bucketA_label: "Advantages (Double Income)",
        bucketB_label: "Disadvantages (Less Time)",
        arguments: [
            { text: "Having two salaries protects the family from disaster if one parent suddenly loses their job.", type: "A" },
            { text: "It teaches children a great lesson about equality when they see both the mother and father being successful.", type: "A" },
            { text: "Young children often feel lonely or neglected when they are raised entirely by paid babysitters.", type: "B" },
            { text: "Parents are often too exhausted after work to help their children with difficult homework.", type: "B" },
            { text: "TRAP: Universities are incredibly expensive, so students have to take out massive bank loans.", type: "Trap" },
            { text: "TRAP: Fast food is popular because cooking a fresh meal takes over an hour to do.", type: "Trap" }
        ]
    },
    {
        prompt: "Governments should spend money on building new trains and buses rather than building new roads. Do you agree or disagree?",
        bucketA_label: "Agree (Build Trains)",
        bucketB_label: "Disagree (Build Roads)",
        arguments: [
            { text: "A single train can carry a thousand people, which clears hundreds of polluting cars off the highway.", type: "A" },
            { text: "Public transport is much safer than driving, drastically reducing the number of terrible fatal accidents.", type: "A" },
            { text: "People who live in distant rural farm areas rely entirely on strong roads, as trains cannot reach them.", type: "B" },
            { text: "Delivery trucks absolutely need wide, smooth highways to bring fresh food to supermarkets on time.", type: "B" },
            { text: "TRAP: Riding a bicycle without a helmet is against the law in many developed countries.", type: "Trap" },
            { text: "TRAP: Flying in an airplane is actually the safest way to travel long distances.", type: "Trap" }
        ]
    },
    {
        prompt: "Many wild animals are in danger of dying out. Some people say we should protect all of them, while others say we should only protect the most important ones. Discuss both views.",
        bucketA_label: "Protect All Animals",
        bucketB_label: "Protect Only the Most Important",
        arguments: [
            { text: "Every single insect and bird plays a tiny but vital role in keeping the natural food chain balanced.", type: "A" },
            { text: "Humans do not have the moral right to decide which innocent species are allowed to live or die.", type: "A" },
            { text: "Governments have very limited money, so they must spend it on famous animals like tigers and pandas.", type: "B" },
            { text: "We should only save the animals that directly help humans, like bees that grow our food.", type: "B" },
            { text: "TRAP: Keeping a dog or a cat is proven to lower a person's blood pressure and stress.", type: "Trap" },
            { text: "TRAP: Animal documentaries on television are very educational for primary school children.", type: "Trap" }
        ]
    },
    {
        prompt: "The internet gives us instant access to all kinds of information. Has this had a positive or negative effect on human memory and thinking?",
        bucketA_label: "Positive Effect",
        bucketB_label: "Negative Effect",
        arguments: [
            { text: "Instead of wasting time memorizing basic facts, people can now use their brains to solve complex new problems.", type: "A" },
            { text: "It allows doctors and scientists to instantly find life-saving research from the other side of the world.", type: "A" },
            { text: "People are becoming incredibly lazy and completely panic if they have to remember a phone number without a screen.", type: "B" },
            { text: "The constant flashing of social media has destroyed our ability to focus on reading a long, difficult book.", type: "B" },
            { text: "TRAP: Buying clothes from online stores is much faster than walking to the shopping mall.", type: "Trap" },
            { text: "TRAP: Hackers can easily steal your password if you use a public coffee shop internet connection.", type: "Trap" }
        ]
    },
    {
        prompt: "Because cities are becoming too crowded, some people think we should build new houses in the quiet countryside. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Build in Country)",
        bucketB_label: "Disadvantages (Protect Country)",
        arguments: [
            { text: "It gives poor families a chance to buy a large, cheap home instead of renting a tiny, expensive city apartment.", type: "A" },
            { text: "Moving people away from the center stops the city from having terrible traffic jams every morning.", type: "A" },
            { text: "Building houses requires cutting down huge ancient forests and destroying the homes of wild animals.", type: "B" },
            { text: "People living far away will just drive their cars back into the city for work, creating even more pollution.", type: "B" },
            { text: "TRAP: Many historic buildings in the city center are too old and dangerous to live in.", type: "Trap" },
            { text: "TRAP: Farming vegetables requires a lot of water during the hot summer months.", type: "Trap" }
        ]
    },
    {
        prompt: "Many people are choosing to use traditional plant medicines instead of visiting modern hospital doctors. Is this a positive or negative development?",
        bucketA_label: "Positive (Use Plants)",
        bucketB_label: "Negative (Use Hospitals)",
        arguments: [
            { text: "Natural herbs often have very few bad side effects compared to strong chemical pills made in factories.", type: "A" },
            { text: "It allows poor people to treat basic colds and headaches for free instead of paying huge hospital bills.", type: "A" },
            { text: "Traditional medicine cannot fix serious emergencies like broken bones, heart attacks, or deep cuts.", type: "B" },
            { text: "Many fake doctors trick desperate, sick people into buying useless water mixed with leaves.", type: "B" },
            { text: "TRAP: Fast food is full of cheap sugar and fat, which causes people to gain weight.", type: "Trap" },
            { text: "TRAP: Yoga and meditation are excellent ways to stretch your muscles and relax.", type: "Trap" }
        ]
    },
    {
        prompt: "Formal written examinations are not a fair way to test a student's true ability. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Exams are Unfair)",
        bucketB_label: "Disagree (Exams are Fair)",
        arguments: [
            { text: "Many brilliant students suffer from terrible anxiety and panic when placed in a silent, timed exam room.", type: "A" },
            { text: "Tests only prove that a student is good at memorizing facts for one day, not that they actually understand the topic.", type: "A" },
            { text: "An anonymous written paper means the teacher cannot give a higher grade to their favorite student.", type: "B" },
            { text: "It is the only way for universities to compare thousands of students equally on the exact same day.", type: "B" },
            { text: "TRAP: Private high schools cost a lot of money but usually have smaller class sizes.", type: "Trap" },
            { text: "TRAP: Teenagers need to sleep for at least eight hours a night to grow properly.", type: "Trap" }
        ]
    },
    {
        prompt: "Many young people today want to start their own companies instead of working for a boss. What are the causes, and is this a positive or negative trend?",
        bucketA_label: "Causes of this Trend",
        bucketB_label: "Positive or Negative Impacts",
        arguments: [
            { text: "The internet makes it incredibly cheap and easy to start an online store from a bedroom laptop.", type: "A" },
            { text: "Young people hate the strict rules and boring routines of working in a grey, corporate office.", type: "A" },
            { text: "It is a highly positive trend because these brave new companies create fresh jobs and invent new technology.", type: "B" },
            { text: "It is negative because most new businesses fail, leaving young people with massive bank debt.", type: "B" },
            { text: "TRAP: Many older workers struggle to learn how to use new computer software.", type: "Trap" },
            { text: "TRAP: Large international companies often move their factories to cheaper countries.", type: "Trap" }
        ]
    },
    {
        prompt: "In many countries, more and more people are choosing to live completely alone. What are the reasons for this, and is it a positive or negative development?",
        bucketA_label: "Reasons for Living Alone",
        bucketB_label: "Positive or Negative Impacts",
        arguments: [
            { text: "Modern people are getting married much later in life because they want to focus entirely on their careers first.", type: "A" },
            { text: "Salaries in developed countries are finally high enough that young people do not need to share rent.", type: "A" },
            { text: "It is a deeply negative trend because humans are social creatures and living alone causes severe depression.", type: "B" },
            { text: "It is bad for the environment because every single person now needs their own heater, fridge, and television.", type: "B" },
            { text: "TRAP: Buying a house in the city center is impossible for most young couples today.", type: "Trap" },
            { text: "TRAP: Having a pet dog is a wonderful way to force yourself to walk outside every day.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think the government should make strict laws to force everyone to recycle their rubbish. Do you agree or disagree?",
        bucketA_label: "Agree (Force Recycling)",
        bucketB_label: "Disagree (Encourage, Don't Force)",
        arguments: [
            { text: "Humans are naturally lazy; unless there is a painful fine, they will always throw plastic in the normal bin.", type: "A" },
            { text: "We are rapidly running out of space to bury our trash, so immediate legal action is an absolute emergency.", type: "A" },
            { text: "It is completely impossible for the police to watch inside every single house to check their garbage.", type: "B" },
            { text: "The government should simply educate people through television campaigns rather than punishing them with fines.", type: "B" },
            { text: "TRAP: Nuclear power plants create toxic waste that is very difficult to bury safely.", type: "Trap" },
            { text: "TRAP: Fast fashion companies produce millions of cheap t-shirts that get thrown away quickly.", type: "Trap" }
        ]
    },
    {
        prompt: "Because of the internet, people will soon stop reading printed books completely. Do you agree or disagree?",
        bucketA_label: "Agree (Books will Die)",
        bucketB_label: "Disagree (Books will Survive)",
        arguments: [
            { text: "A single tablet can hold ten thousand books and is much lighter to carry in a backpack.", type: "A" },
            { text: "Electronic books are significantly cheaper to buy because they do not require paper or delivery trucks.", type: "A" },
            { text: "Staring at a glowing screen for hours hurts the eyes, so people will always want real paper before sleeping.", type: "B" },
            { text: "Collectors deeply love the physical smell, feeling, and weight of a real book on their shelf.", type: "B" },
            { text: "TRAP: Public libraries are excellent places for university students to study quietly.", type: "Trap" },
            { text: "TRAP: Many famous novels have been turned into terrible Hollywood action movies.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that planting trees in city centers is the best way to reduce pollution. Others think there are better ways. Discuss both views.",
        bucketA_label: "Plant More Trees",
        bucketB_label: "Use Better Ways",
        arguments: [
            { text: "Leaves naturally absorb dangerous carbon dioxide from the air and replace it with clean, fresh oxygen.", type: "A" },
            { text: "Trees provide beautiful, cool shade during the summer, which stops people from using expensive air conditioning.", type: "A" },
            { text: "Trees cannot possibly absorb the massive amount of thick black smoke produced by millions of cars.", type: "B" },
            { text: "The only true solution is forcing car companies to only manufacture electric vehicles.", type: "B" },
            { text: "TRAP: Many people move to the city because the countryside has very few good jobs.", type: "Trap" },
            { text: "TRAP: Solar panels are too expensive to put on the roof of a normal family home.", type: "Trap" }
        ]
    },
    {
        prompt: "Many students choose to study at universities in foreign countries instead of their home country. What are the advantages and disadvantages?",
        bucketA_label: "Advantages (Study Abroad)",
        bucketB_label: "Disadvantages (Stay Home)",
        arguments: [
            { text: "Being surrounded by a new language every single day is the fastest possible way to become fluent.", type: "A" },
            { text: "International degrees look incredibly impressive to major companies when the student applies for a job later.", type: "A" },
            { text: "Foreign students often suffer from terrible homesickness and culture shock when they first arrive.", type: "B" },
            { text: "International tuition fees and airplane tickets create a massive, unfair financial burden on the parents.", type: "B" },
            { text: "TRAP: Tourist hotels are usually fully booked during the hot summer holiday season.", type: "Trap" },
            { text: "TRAP: Finding a cheap apartment to rent in the city center is becoming nearly impossible.", type: "Trap" }
        ]
    },
    {
        prompt: "Modern life is incredibly stressful for many people. What are the main causes of this stress, and how can people reduce it?",
        bucketA_label: "Causes of Stress",
        bucketB_label: "Solutions to Reduce It",
        arguments: [
            { text: "Because of smartphones, bosses expect their employees to answer work emails late at night and on weekends.", type: "A" },
            { text: "The cost of basic food and rent is rising much faster than normal salaries, causing daily financial panic.", type: "A" },
            { text: "People must strictly turn off their phones at six o'clock to protect their quiet family time.", type: "B" },
            { text: "Companies should be forced by law to give their workers at least four weeks of paid holiday every year.", type: "B" },
            { text: "TRAP: Drinking too much coffee in the afternoon makes it very difficult to fall asleep.", type: "Trap" },
            { text: "TRAP: Traffic jams on the highway are very frustrating for people trying to drive home.", type: "Trap" }
        ]
    },
    {
        prompt: "Famous athletes and actors are paid millions of dollars and act as role models for young people. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "Athletes prove to young children that extreme hard work, practice, and healthy eating lead to great success.", type: "A" },
            { text: "Many celebrities use their massive fame and wealth to build hospitals or donate to poor charities.", type: "A" },
            { text: "Actors are often caught doing illegal drugs or fighting, setting a terrible example for teenagers to copy.", type: "B" },
            { text: "It teaches children that being famous and rich is the only goal, making them ignore important jobs like teaching.", type: "B" },
            { text: "TRAP: Watching movies on a small phone screen hurts your eyes after a few hours.", type: "Trap" },
            { text: "TRAP: Going to a real football stadium to watch a match is incredibly expensive.", type: "Trap" }
        ]
    },
    {
        prompt: "Governments should not waste taxpayer money on supporting artists and musicians. The arts should support themselves. Do you agree or disagree?",
        bucketA_label: "Agree (Stop Funding Art)",
        bucketB_label: "Disagree (Keep Funding Art)",
        arguments: [
            { text: "Tax money is collected to fix roads and hospitals; spending it on paintings is deeply irresponsible.", type: "A" },
            { text: "If an artist is truly talented, normal people will buy their work, so they do not need government charity.", type: "A" },
            { text: "Without government money, classical music and ancient theater traditions would completely die out.", type: "B" },
            { text: "Beautiful statues and free public concerts make a city famous and attract millions of paying tourists.", type: "B" },
            { text: "TRAP: Many famous historical scientists were actually very poor during their lifetimes.", type: "Trap" },
            { text: "TRAP: Learning to play the piano takes many years of very boring daily practice.", type: "Trap" }
        ]
    },
    {
        prompt: "Supermarkets today sell a lot of food that is flown in from other countries. Some people think we should only eat locally grown food. Discuss both views.",
        bucketA_label: "Support Imported Food",
        bucketB_label: "Support Local Food",
        arguments: [
            { text: "Importing goods allows people living in cold countries to eat fresh fruit and vegetables during the winter.", type: "A" },
            { text: "Selling coffee and bananas to rich countries is the only way poor farming nations can make money.", type: "A" },
            { text: "Flying food thousands of miles across the ocean releases a massive amount of toxic greenhouse gases.", type: "B" },
            { text: "Buying local apples and meat ensures that the hard-working farmers in our own country do not go bankrupt.", type: "B" },
            { text: "TRAP: Fast food restaurants are very popular because cooking takes a lot of time.", type: "Trap" },
            { text: "TRAP: Plastic packaging keeps food safe but is terrible for the environment when thrown away.", type: "Trap" }
        ]
    },
    // ==========================================
    // BATCH 5: EXPANDED IELTS TOPIC CATEGORIES (30 Prompts)
    // ==========================================
    {
        prompt: "Some people think that putting security cameras in public places is a good way to reduce crime. Others think it destroys our privacy. Discuss both views.",
        bucketA_label: "Cameras Reduce Crime",
        bucketB_label: "Cameras Destroy Privacy",
        arguments: [
            { text: "Criminals are much less likely to steal a car if they know they are being recorded.", type: "A" },
            { text: "Video evidence makes it incredibly easy for the police to catch dangerous people quickly.", type: "A" },
            { text: "Normal citizens feel very uncomfortable knowing the government is always watching them walk down the street.", type: "B" },
            { text: "Hackers can break into the camera systems and use the videos to blackmail innocent people.", type: "B" },
            { text: "TRAP: Buying high-quality digital cameras is a very expensive hobby for many people.", type: "Trap" },
            { text: "TRAP: Many police officers carry small weapons to protect themselves during an emergency.", type: "Trap" }
        ]
    },
    {
        prompt: "University education should be completely free for everyone. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Make it Free)",
        bucketB_label: "Disagree (Charge Students)",
        arguments: [
            { text: "It allows very smart students from poor families to become doctors and engineers.", type: "A" },
            { text: "A country with a highly educated workforce will easily attract wealthy international businesses.", type: "A" },
            { text: "The government would have to raise taxes on normal workers to pay for the professors' salaries.", type: "B" },
            { text: "If it is free, students might become lazy and not take their difficult studies seriously.", type: "B" },
            { text: "TRAP: High school students often feel very stressed before taking their final math exams.", type: "Trap" },
            { text: "TRAP: Many university dormitories do not have enough bedrooms for all the new students.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think the government should abolish the mandatory retirement age and let people work as long as they want. Do you agree or disagree?",
        bucketA_label: "Agree (Let Them Work)",
        bucketB_label: "Disagree (Force Retirement)",
        arguments: [
            { text: "Older workers possess decades of valuable experience that is completely impossible to teach to beginners.", type: "A" },
            { text: "Continuing to work keeps elderly people mentally sharp and stops them from feeling lonely at home.", type: "A" },
            { text: "Older employees often refuse to learn new computer skills, which slows down the whole company.", type: "B" },
            { text: "If older people never leave their jobs, there will be no open positions for university graduates.", type: "B" },
            { text: "TRAP: The government pays a small amount of money to help old people buy basic food.", type: "Trap" },
            { text: "TRAP: Gardening and playing golf are very popular hobbies for retired couples in the summer.", type: "Trap" }
        ]
    },
    {
        prompt: "Genetically modified (GM) foods are becoming more common. Do the advantages of GM foods outweigh the disadvantages?",
        bucketA_label: "Advantages of GM Foods",
        bucketB_label: "Disadvantages of GM Foods",
        arguments: [
            { text: "Scientists can design crops that survive terrible droughts, which prevents mass starvation in poor countries.", type: "A" },
            { text: "GM plants are naturally resistant to insects, meaning farmers do not have to spray dangerous chemicals.", type: "A" },
            { text: "Changing the DNA of a vegetable could cause unpredictable and dangerous allergic reactions in humans.", type: "B" },
            { text: "Large chemical companies will completely control the global seed market, making small farmers go bankrupt.", type: "B" },
            { text: "TRAP: Eating too much processed food is the leading cause of heart disease in young adults.", type: "Trap" },
            { text: "TRAP: Supermarkets throw away millions of tons of perfectly good food every single year.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people argue that job satisfaction is more important than a high salary. What is your opinion?",
        bucketA_label: "Satisfaction is Better",
        bucketB_label: "Salary is Better",
        arguments: [
            { text: "Waking up every day to do a job you hate will eventually cause severe depression.", type: "A" },
            { text: "People who love their work are much more likely to be creative and get promoted quickly.", type: "A" },
            { text: "A high income provides deep security, allowing you to easily pay for emergencies and nice holidays.", type: "B" },
            { text: "You can use the extra money to enjoy your hobbies on the weekend, making up for a boring job.", type: "B" },
            { text: "TRAP: Many young people want to become famous musicians, but it is very difficult to succeed.", type: "Trap" },
            { text: "TRAP: The cost of buying a house in the city center has doubled in the last ten years.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that violent video games are harmless fun, while others believe they cause real-world violence. Discuss both views.",
        bucketA_label: "Harmless Fun",
        bucketB_label: "Causes Real Violence",
        arguments: [
            { text: "Playing games is simply a fun, safe way for stressed teenagers to relax after a hard day at school.", type: "A" },
            { text: "Millions of people play these games every day, but very few of them ever commit real crimes.", type: "A" },
            { text: "Repeatedly seeing blood and fighting on a screen makes young children think that hurting people is normal.", type: "B" },
            { text: "Players actively control the aggressive characters, which teaches them to solve problems using physical force.", type: "B" },
            { text: "TRAP: Modern video game consoles are extremely expensive and require a fast internet connection.", type: "Trap" },
            { text: "TRAP: Staring at a bright screen in a dark room can severely damage your eyesight.", type: "Trap" }
        ]
    },
    {
        prompt: "In many cities, the government is banning private cars from entering the city center. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "It immediately stops the terrible traffic jams that block the streets every morning.", type: "A" },
            { text: "Pedestrians can safely walk and breathe clean air without breathing toxic exhaust smoke.", type: "A" },
            { text: "It is incredibly inconvenient for elderly or disabled people who cannot easily walk from the bus station.", type: "B" },
            { text: "Small shops in the center will lose money because customers cannot drive there to buy heavy items.", type: "B" },
            { text: "TRAP: Electric cars are very quiet and do not use any expensive gasoline.", type: "Trap" },
            { text: "TRAP: Learning how to drive a manual car takes many weeks of difficult practice.", type: "Trap" }
        ]
    },
    {
        prompt: "When traveling to a foreign country, tourists should follow the local customs. Others think the host country should accept cultural differences. Discuss both views.",
        bucketA_label: "Follow Local Customs",
        bucketB_label: "Host Should Accept Differences",
        arguments: [
            { text: "Covering your shoulders or removing your shoes shows deep respect for the local religion and history.", type: "A" },
            { text: "Acting like the locals helps tourists make friendly connections and prevents angry misunderstandings.", type: "A" },
            { text: "Foreigners bring massive amounts of money, so the host country should be polite and flexible.", type: "B" },
            { text: "It is unreasonable to expect a visitor to perfectly learn complex cultural rules for a short one-week holiday.", type: "B" },
            { text: "TRAP: Taking photographs of famous museums is a great way to remember a nice holiday.", type: "Trap" },
            { text: "TRAP: Learning how to speak Spanish is very useful if you want to travel to South America.", type: "Trap" }
        ]
    },
    {
        prompt: "Using animals for human entertainment, such as in circuses and racing, should be completely banned. Do you agree or disagree?",
        bucketA_label: "Agree (Ban it)",
        bucketB_label: "Disagree (Allow it)",
        arguments: [
            { text: "Whipping elephants and bears to make them perform stupid tricks is incredibly cruel and outdated.", type: "A" },
            { text: "Wild animals suffer from terrible stress when they are forced to travel in small, dark trucks.", type: "A" },
            { text: "Horse racing is an ancient tradition that provides thousands of jobs for farmers and trainers.", type: "B" },
            { text: "Strict government rules already ensure that entertainment animals are fed well and treated properly.", type: "B" },
            { text: "TRAP: Many wild tigers are dying because hunters kill them to sell their beautiful fur.", type: "Trap" },
            { text: "TRAP: Eating a vegan diet is an excellent way to protect the global environment.", type: "Trap" }
        ]
    },
    {
        prompt: "Healthcare should be free for everyone, paid for by taxes. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Make it Free)",
        bucketB_label: "Disagree (Charge Money)",
        arguments: [
            { text: "Medical care is a basic human right; no one should die simply because they are too poor to see a doctor.", type: "A" },
            { text: "A healthy population can work much harder, which ultimately makes the whole country richer.", type: "A" },
            { text: "Free systems are often extremely slow, making patients wait many months for important surgeries.", type: "B" },
            { text: "If people do not pay for the doctor, they will visit the hospital every day for tiny, fake problems.", type: "B" },
            { text: "TRAP: Becoming a doctor requires at least seven years of very difficult study at a university.", type: "Trap" },
            { text: "TRAP: Many traditional medicines are made from special plants found in the rainforest.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that men and women should have an equal number of seats in government and business leadership. Do you agree or disagree?",
        bucketA_label: "Agree (Force Equal Numbers)",
        bucketB_label: "Disagree (Merit Only)",
        arguments: [
            { text: "Women make up half the population, so their unique voices must be heard when making new laws.", type: "A" },
            { text: "Forcing companies to hire female leaders breaks old traditions of men only helping other men.", type: "A" },
            { text: "Jobs should only be given to the smartest, most skilled person, completely ignoring their gender.", type: "B" },
            { text: "If a woman gets a job just to fill a number quota, her coworkers will not respect her true skills.", type: "B" },
            { text: "TRAP: Taking care of a newborn baby is incredibly exhausting for both the mother and the father.", type: "Trap" },
            { text: "TRAP: Working from a laptop at home allows people to have a better work-life balance.", type: "Trap" }
        ]
    },
    {
        prompt: "Because of translation software and apps, learning a foreign language is no longer necessary. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Apps are Enough)",
        bucketB_label: "Disagree (Learning is Needed)",
        arguments: [
            { text: "Modern artificial intelligence can instantly and perfectly translate a menu or a train ticket for a tourist.", type: "A" },
            { text: "It saves adult business workers hundreds of hours of boring vocabulary study.", type: "A" },
            { text: "Apps cannot translate human emotion, humor, or sarcasm during a deep, friendly conversation.", type: "B" },
            { text: "If your phone battery dies in a foreign country, you will be completely lost and helpless.", type: "B" },
            { text: "TRAP: English is the most common language used in international airplane communication.", type: "Trap" },
            { text: "TRAP: Reading classic novels is a wonderful way to relax your mind before going to sleep.", type: "Trap" }
        ]
    },
    {
        prompt: "In the future, computers and robots will completely replace human teachers in the classroom. Do you think this is a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "An AI teacher can instantly change the lesson speed to match exactly how fast the student learns.", type: "A" },
            { text: "Robots do not get tired, angry, or sick, meaning education can happen 24 hours a day.", type: "A" },
            { text: "A computer cannot show real empathy when a student is feeling sad or bullied at school.", type: "B" },
            { text: "Good teachers inspire students with their personal stories and passion, which a machine cannot fake.", type: "B" },
            { text: "TRAP: Many schools are forcing students to wear identical uniforms to stop peer pressure.", type: "Trap" },
            { text: "TRAP: Typing on a keyboard is much faster than writing with a traditional pen and paper.", type: "Trap" }
        ]
    },
    {
        prompt: "The government should be responsible for providing affordable housing to all citizens. Others think private companies should handle housing. Discuss both views.",
        bucketA_label: "Government Should Provide",
        bucketB_label: "Private Companies Should Handle",
        arguments: [
            { text: "Housing is a basic human need, and poor families should not be forced to live on the street.", type: "A" },
            { text: "Private builders only care about making huge profits, so they only build expensive luxury apartments.", type: "A" },
            { text: "Private businesses build houses much faster and use better materials because they are competing with each other.", type: "B" },
            { text: "If the government builds all the houses, they will be ugly, cheap, and all look exactly the same.", type: "B" },
            { text: "TRAP: Living in a small village is much quieter and safer than living in a massive city.", type: "Trap" },
            { text: "TRAP: Installing solar panels on the roof of a house will dramatically lower the electricity bill.", type: "Trap" }
        ]
    },
    {
        prompt: "Nuclear energy is a better alternative to fossil fuels (coal, oil) than renewable energy (solar, wind). To what extent do you agree or disagree?",
        bucketA_label: "Nuclear is Best",
        bucketB_label: "Renewables are Better",
        arguments: [
            { text: "Nuclear plants produce massive, reliable power 24 hours a day, even when the wind is not blowing.", type: "A" },
            { text: "Unlike burning dirty coal, nuclear power does not release any dangerous carbon dioxide into the air.", type: "A" },
            { text: "A nuclear accident, like an earthquake breaking the reactor, can poison the land for a thousand years.", type: "B" },
            { text: "Solar and wind power are completely safe and their technology is becoming much cheaper every year.", type: "B" },
            { text: "TRAP: The price of gasoline goes up very quickly when countries fight wars in the Middle East.", type: "Trap" },
            { text: "TRAP: Electric cars still cause pollution if the electricity they use comes from a coal factory.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that smoking should be completely banned in all public places. Others think it restricts individual freedom. Discuss both views.",
        bucketA_label: "Ban Smoking",
        bucketB_label: "Protect Freedom",
        arguments: [
            { text: "Breathing in second-hand smoke can cause terrible lung cancer in innocent people standing nearby.", type: "A" },
            { text: "Banning it in restaurants prevents disgusting smells from ruining the meals of other paying customers.", type: "A" },
            { text: "Adults have the absolute right to make their own personal choices about their own bodies.", type: "B" },
            { text: "Small bars and cafes will lose a massive amount of money if their smoking customers stop visiting.", type: "B" },
            { text: "TRAP: Drinking too much alcohol causes severe liver damage and destroys families.", type: "Trap" },
            { text: "TRAP: Teenagers often try smoking because they want to look cool and impress their friends.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people prefer to take several short holidays throughout the year, while others prefer to take one long holiday. Which do you think is better?",
        bucketA_label: "Short, Frequent Holidays",
        bucketB_label: "One Long Holiday",
        arguments: [
            { text: "Taking a break every few months stops you from feeling totally exhausted and burned out at work.", type: "A" },
            { text: "It is much easier to ask your boss for a three-day weekend than to ask for an entire month off.", type: "A" },
            { text: "A long trip allows you to completely forget about your job and genuinely relax your mind.", type: "B" },
            { text: "You can travel to the other side of the world without worrying about wasting time on airplanes.", type: "B" },
            { text: "TRAP: Staying in a luxury hotel is much more comfortable than sleeping in a cheap tent.", type: "Trap" },
            { text: "TRAP: Taking photos with a smartphone is the easiest way to remember a beautiful beach.", type: "Trap" }
        ]
    },
    {
        prompt: "Parents should choose what career their children will pursue. Others believe children should choose for themselves. Discuss both views.",
        bucketA_label: "Parents Should Choose",
        bucketB_label: "Children Should Choose",
        arguments: [
            { text: "Adults know how the real world works and will pick a job that pays a safe, reliable salary.", type: "A" },
            { text: "Teenagers are very foolish and might ruin their lives trying to become famous singers or gamers.", type: "A" },
            { text: "Forcing a child to become a doctor when they hate blood will make them deeply miserable.", type: "B" },
            { text: "People naturally work much harder and succeed faster when they follow their true personal passion.", type: "B" },
            { text: "TRAP: University tuition in America is so high that most students have massive debt.", type: "Trap" },
            { text: "TRAP: Many old people want to retire early so they can spend time with their grandchildren.", type: "Trap" }
        ]
    },
    {
        prompt: "Increasing the number of police officers on the streets is the only effective way to reduce crime. Do you agree or disagree?",
        bucketA_label: "Agree (More Police)",
        bucketB_label: "Disagree (Other Ways Better)",
        arguments: [
            { text: "If criminals see an officer standing on the corner, they will immediately stop trying to break into cars.", type: "A" },
            { text: "Having more staff allows the police to respond to emergency 911 calls much faster.", type: "A" },
            { text: "Poverty is the real cause of crime; spending money on creating good jobs is a much better solution.", type: "B" },
            { text: "Installing smart security cameras is a much cheaper and more efficient way to watch the streets safely.", type: "B" },
            { text: "TRAP: Television shows about solving murders are incredibly popular on streaming services.", type: "Trap" },
            { text: "TRAP: Many lawyers charge high fees to defend people who have been arrested.", type: "Trap" }
        ]
    },
    {
        prompt: "Hosting major international sporting events, like the Olympic Games, is a waste of money. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Waste of Money)",
        bucketB_label: "Disagree (Good Investment)",
        arguments: [
            { text: "Building massive, shiny stadiums costs billions of dollars that should be spent on fixing local hospitals.", type: "A" },
            { text: "Once the games are over, the giant swimming pools and running tracks are abandoned and slowly rot.", type: "A" },
            { text: "The event brings millions of tourists to the city, creating huge profits for hotels and restaurants.", type: "B" },
            { text: "The city is forced to finally build new trains and airports, which benefits the citizens forever.", type: "B" },
            { text: "TRAP: Professional athletes have to eat very strict diets and train for ten hours a day.", type: "Trap" },
            { text: "TRAP: Football is the most popular sport in the world because you only need a ball to play.", type: "Trap" }
        ]
    },
    {
        prompt: "Artificial Intelligence (AI) is now being used to create music, write stories, and paint pictures. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "It allows normal people who cannot draw to easily bring their amazing ideas to life on a screen.", type: "A" },
            { text: "Computers can compose custom background music for small video makers instantly and for free.", type: "A" },
            { text: "Machine art has no real emotion or soul, making movies and books feel completely fake and boring.", type: "B" },
            { text: "Talented human writers and designers will lose their jobs because companies will just use free robots.", type: "B" },
            { text: "TRAP: Self-driving cars use very smart computers to avoid crashing into other vehicles.", type: "Trap" },
            { text: "TRAP: Going to a physical museum is the best way to fully appreciate an old painting.", type: "Trap" }
        ]
    },
    {
        prompt: "Cheap air travel has allowed ordinary people to fly around the world, but it is damaging the environment. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Cheap Travel)",
        bucketB_label: "Disadvantages (Environmental Harm)",
        arguments: [
            { text: "Normal families can finally afford to experience foreign cultures instead of just reading about them.", type: "A" },
            { text: "It allows workers to easily visit their parents and friends who live on the other side of the planet.", type: "A" },
            { text: "Jet engines pump thousands of tons of toxic carbon gas directly into the upper atmosphere.", type: "B" },
            { text: "Beautiful beaches and quiet islands are being completely destroyed by massive crowds of cheap tourists.", type: "B" },
            { text: "TRAP: The security lines at international airports take a very long time to get through.", type: "Trap" },
            { text: "TRAP: Traveling by high-speed bullet train in Japan is a very comfortable experience.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people think that studying in a group is better for students. Others think that studying alone is more effective. Discuss both views.",
        bucketA_label: "Group Study is Better",
        bucketB_label: "Studying Alone is Better",
        arguments: [
            { text: "If you do not understand a difficult math problem, a classmate can easily explain it to you.", type: "A" },
            { text: "Working with friends keeps you awake and motivated when you feel like giving up.", type: "A" },
            { text: "Groups usually stop studying and just start talking about movies or gossip, which wastes time.", type: "B" },
            { text: "Reading a textbook in total silence allows your brain to focus completely on the difficult facts.", type: "B" },
            { text: "TRAP: The food in the university cafeteria is usually very unhealthy and expensive.", type: "Trap" },
            { text: "TRAP: Many students listen to quiet classical music to relax before a big test.", type: "Trap" }
        ]
    },
    {
        prompt: "Fast food advertising should be banned in the same way as cigarette advertising. Do you agree or disagree?",
        bucketA_label: "Agree (Ban the Ads)",
        bucketB_label: "Disagree (Allow the Ads)",
        arguments: [
            { text: "Junk food kills millions of people every year through heart disease, so it should be treated like poison.", type: "A" },
            { text: "Banning commercials stops big companies from tricking hungry teenagers into buying greasy burgers.", type: "A" },
            { text: "Eating a pizza once a month is completely safe; it is not instantly addictive like tobacco.", type: "B" },
            { text: "Fast food companies pay millions in taxes, and banning their ads would hurt the national economy.", type: "B" },
            { text: "TRAP: Cooking a fresh meal at home takes a lot of time after a long day at the office.", type: "Trap" },
            { text: "TRAP: Cigarettes cause your teeth to turn yellow and make your clothes smell terrible.", type: "Trap" }
        ]
    },
    {
        prompt: "Living in a large city is much better than living in the countryside. To what extent do you agree or disagree?",
        bucketA_label: "City is Better",
        bucketB_label: "Countryside is Better",
        arguments: [
            { text: "Metropolitan centers have the absolute best hospitals, universities, and international job markets.", type: "A" },
            { text: "You can easily walk to amazing restaurants, cinemas, and concerts at any time of the night.", type: "A" },
            { text: "The air in rural villages is completely clean and fresh, which is wonderful for your lungs.", type: "B" },
            { text: "Farm towns are extremely quiet and peaceful, allowing people to escape the terrible stress of crowds.", type: "B" },
            { text: "TRAP: Farming vegetables requires a lot of hard physical labor early in the morning.", type: "Trap" },
            { text: "TRAP: Taking the subway is much faster than trying to drive a car through traffic.", type: "Trap" }
        ]
    },
    {
        prompt: "In some families, grandparents raise the children because the parents are busy working. What are the advantages and disadvantages of this?",
        bucketA_label: "Advantages (Grandparents Help)",
        bucketB_label: "Disadvantages (Problems Caused)",
        arguments: [
            { text: "It saves the parents thousands of dollars because they do not have to pay for a professional babysitter.", type: "A" },
            { text: "Grandparents love the children deeply and will keep them much safer than a stranger would.", type: "A" },
            { text: "Chasing after energetic, screaming toddlers all day is physically exhausting for an old person's body.", type: "B" },
            { text: "Grandparents often spoil children by giving them too much candy and letting them break the rules.", type: "B" },
            { text: "TRAP: Many schools do not teach children how to cook basic meals or do laundry.", type: "Trap" },
            { text: "TRAP: Teenagers spend far too much time playing games on their smartphones.", type: "Trap" }
        ]
    },
    {
        prompt: "Young people should be given leadership roles in companies instead of older, experienced workers. Do you agree or disagree?",
        bucketA_label: "Agree (Young Leaders)",
        bucketB_label: "Disagree (Old Leaders)",
        arguments: [
            { text: "Young managers have fresh, modern ideas and are not afraid to use brand new digital technology.", type: "A" },
            { text: "They possess incredible energy and are willing to work very late hours to make the business succeed.", type: "A" },
            { text: "Older staff have survived decades of terrible economic crashes and know exactly how to handle a crisis.", type: "B" },
            { text: "It feels incredibly disrespectful when a 25-year-old gives angry orders to a 60-year-old professional.", type: "B" },
            { text: "TRAP: Retiring at the age of sixty allows people to finally relax and travel the world.", type: "Trap" },
            { text: "TRAP: Many university students study business because they want to become rich quickly.", type: "Trap" }
        ]
    },
    {
        prompt: "Keeping a pet (like a dog or cat) is very good for a child's development. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Pets are Good)",
        bucketB_label: "Disagree (Pets are Bad)",
        arguments: [
            { text: "It teaches young children serious responsibility because they must remember to feed and wash the animal.", type: "A" },
            { text: "A dog provides absolute, unconditional love and acts as a comforting friend when a child is sad.", type: "A" },
            { text: "Animals can carry dangerous germs or suddenly bite a child's face if they are frightened.", type: "B" },
            { text: "When a pet eventually dies, the grief and sadness can be totally devastating for a young mind.", type: "B" },
            { text: "TRAP: Wild tigers are losing their homes in the jungle because humans are cutting down trees.", type: "Trap" },
            { text: "TRAP: Many people are allergic to flowers and sneeze very heavily during the spring.", type: "Trap" }
        ]
    },
    {
        prompt: "Watching foreign films and television shows is better than watching local ones. Discuss both views.",
        bucketA_label: "Foreign is Better",
        bucketB_label: "Local is Better",
        arguments: [
            { text: "It allows viewers to naturally learn a new language and see how people live on the other side of the world.", type: "A" },
            { text: "Hollywood studios have billions of dollars, so their special effects and explosions look incredibly realistic.", type: "A" },
            { text: "Local movies tell stories about the viewer's own history and culture, making them feel deeply proud.", type: "B" },
            { text: "Watching domestic television supports local actors and directors, stopping them from losing their jobs.", type: "B" },
            { text: "TRAP: Eating popcorn and drinking soda in a dark theater is very bad for your teeth.", type: "Trap" },
            { text: "TRAP: Books are always better than the movies because they include much more detail.", type: "Trap" }
        ]
    },
    {
        prompt: "Wearable technology, like smartwatches that track your heart rate, improves public health. Do you agree or disagree?",
        bucketA_label: "Agree (Improves Health)",
        bucketB_label: "Disagree (Causes Problems)",
        arguments: [
            { text: "Seeing a low step count on your wrist deeply motivates you to stand up and walk outside.", type: "A" },
            { text: "The watch can instantly call an ambulance if it feels an old person's heart suddenly stop beating.", type: "A" },
            { text: "It causes terrible anxiety because people constantly panic if their heart rate goes up slightly.", type: "B" },
            { text: "It is a total waste of money; humans know they are healthy without a computer telling them.", type: "B" },
            { text: "TRAP: Staring at bright phone screens before bed makes it impossible to fall asleep quickly.", type: "Trap" },
            { text: "TRAP: Hospital nurses have to study for many years to learn how to fix broken bones.", type: "Trap" }
        ]
    },
    // ==========================================
    // BATCH 6: EXPANDED IELTS TOPIC CATEGORIES (30 Prompts)
    // ==========================================
    {
        prompt: "Some people think that teachers should give students homework every single day. Others think homework is a waste of time. Discuss both views.",
        bucketA_label: "Give Daily Homework",
        bucketB_label: "Stop Giving Homework",
        arguments: [
            { text: "Practicing math or writing at home helps permanently lock the new information into a child's memory.", type: "A" },
            { text: "It teaches young people how to manage their time and work independently without a boss watching them.", type: "A" },
            { text: "Children are already exhausted after studying for eight hours and desperately need time to relax their brains.", type: "B" },
            { text: "It prevents families from spending quality time together or eating dinner peacefully in the evening.", type: "B" },
            { text: "TRAP: School cafeterias should serve more fresh fruit and fewer sugary desserts.", type: "Trap" },
            { text: "TRAP: High school teachers must study for many years at university to get their qualifications.", type: "Trap" }
        ]
    },
    {
        prompt: "Historic buildings should be preserved even if they are in the middle of a modern city. Do you agree or disagree?",
        bucketA_label: "Agree (Preserve Them)",
        bucketB_label: "Disagree (Remove Them)",
        arguments: [
            { text: "Ancient architecture connects modern citizens to their ancestors and gives the city a unique, proud identity.", type: "A" },
            { text: "Beautiful old castles and temples attract millions of paying tourists, which helps the local economy.", type: "A" },
            { text: "Old stone buildings take up incredibly valuable land where high-rise apartments could be built for the homeless.", type: "B" },
            { text: "Repairing ancient roofs and walls costs the government millions of tax dollars every single year.", type: "B" },
            { text: "TRAP: Modern art museums often feature very strange paintings that normal people do not understand.", type: "Trap" },
            { text: "TRAP: Buying a large, expensive house in the countryside is a dream for many young families.", type: "Trap" }
        ]
    },
    {
        prompt: "Companies should be legally responsible for the physical health and mental well-being of their employees. Do you agree or disagree?",
        bucketA_label: "Agree (Companies Responsible)",
        bucketB_label: "Disagree (Individuals Responsible)",
        arguments: [
            { text: "Workers who are healthy and not stressed will produce much better work and take fewer sick days.", type: "A" },
            { text: "Businesses force people to sit in uncomfortable chairs for nine hours, so they must pay to fix their backs.", type: "A" },
            { text: "Adults must take personal responsibility for their own lives by choosing to exercise and eat well at home.", type: "B" },
            { text: "Forcing small businesses to pay for expensive gym memberships could easily make them go bankrupt.", type: "B" },
            { text: "TRAP: Hospital nurses have to work terrible hours and are often completely exhausted.", type: "Trap" },
            { text: "TRAP: Humans need to sleep for at least eight hours every night to function properly.", type: "Trap" }
        ]
    },
    {
        prompt: "People should not be allowed to keep exotic wild animals (like snakes, monkeys, or lizards) as pets. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Ban Exotic Pets)",
        bucketB_label: "Disagree (Allow Exotic Pets)",
        arguments: [
            { text: "Wild creatures belong in the jungle, and locking them inside a small glass box is extremely cruel.", type: "A" },
            { text: "Dangerous animals can easily escape from a house and attack innocent children living in the neighborhood.", type: "A" },
            { text: "Private owners who truly love rare animals can help breed them and save the species from total extinction.", type: "B" },
            { text: "As long as the owner passes a strict safety test, the government should not limit their personal freedom.", type: "B" },
            { text: "TRAP: Dogs need to be taken outside for a long walk every single day to stay happy.", type: "Trap" },
            { text: "TRAP: Going to the zoo is a very popular weekend activity for families in the summer.", type: "Trap" }
        ]
    },
    {
        prompt: "Famous people, such as actors and athletes, deserve to have a completely private life. Journalists should not follow them. Do you agree or disagree?",
        bucketA_label: "Agree (Protect Privacy)",
        bucketB_label: "Disagree (Journalists Can Follow)",
        arguments: [
            { text: "Celebrities are normal human beings who suffer from terrible anxiety when strangers take photos of their children.", type: "A" },
            { text: "Aggressive photographers frequently cause dangerous car crashes while trying to chase famous people down the street.", type: "A" },
            { text: "Celebrities actively choose to be famous, and being in the newspaper is how they make millions of dollars.", type: "B" },
            { text: "The public pays for their movies and sports tickets, so the fans have a right to know about their lives.", type: "B" },
            { text: "TRAP: Hollywood action movies use expensive computers to create massive fake explosions.", type: "Trap" },
            { text: "TRAP: Professional football players must train for ten hours a day to win the world cup.", type: "Trap" }
        ]
    },
    {
        prompt: "Air travel should be heavily taxed to discourage people from flying and to reduce global warming. Do you agree or disagree?",
        bucketA_label: "Agree (Tax Airlines)",
        bucketB_label: "Disagree (Do Not Tax)",
        arguments: [
            { text: "Making tickets very expensive will force people to take eco-friendly trains instead of polluting airplanes.", type: "A" },
            { text: "The billions of dollars collected from the tax can be directly used to plant millions of new trees.", type: "A" },
            { text: "It is incredibly unfair because only rich people will be able to afford to travel or see foreign countries.", type: "B" },
            { text: "The international tourism industry would instantly collapse, causing millions of hotel workers to lose their jobs.", type: "B" },
            { text: "TRAP: Train stations in major capital cities are often extremely dirty and overcrowded.", type: "Trap" },
            { text: "TRAP: Staying in a luxury resort on an island is a great way to relax during the summer.", type: "Trap" }
        ]
    },
    {
        prompt: "Some experts believe that it is better for children to begin learning a foreign language at primary school rather than secondary school. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Start Early)",
        bucketB_label: "Disadvantages (Start Later)",
        arguments: [
            { text: "Young brains are incredibly flexible and can naturally absorb new grammar rules without trying hard.", type: "A" },
            { text: "It completely removes the fear of speaking, so children grow up with perfect, native-sounding pronunciation.", type: "A" },
            { text: "It can deeply confuse young children who are still struggling to read and write their own native language.", type: "B" },
            { text: "It takes valuable hours away from teaching essential primary skills like basic math and local history.", type: "B" },
            { text: "TRAP: Using a smartphone application to translate French is completely free and very fast.", type: "Trap" },
            { text: "TRAP: Traveling to another country requires a passport and an expensive airplane ticket.", type: "Trap" }
        ]
    },
    {
        prompt: "A country's success is usually measured by its economic wealth. However, some people believe that other factors are more important. Discuss both views.",
        bucketA_label: "Money is the Best Measure",
        bucketB_label: "Other Factors are Better",
        arguments: [
            { text: "A rich government can easily afford to build the world's best hospitals, highways, and public schools.", type: "A" },
            { text: "Without strong economic growth, citizens will starve and millions of people will be trapped in terrible poverty.", type: "A" },
            { text: "A nation is only truly successful if its citizens report feeling mentally happy and safe walking the streets.", type: "B" },
            { text: "Focusing purely on money often causes terrible environmental destruction as factories ruin the rivers and air.", type: "B" },
            { text: "TRAP: Many rich business owners like to buy expensive sports cars to show off their wealth.", type: "Trap" },
            { text: "TRAP: Gold has been used as a precious, valuable metal by humans for thousands of years.", type: "Trap" }
        ]
    },
    {
        prompt: "Fathers and mothers should share parental leave equally when they have a new baby. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Share Equally)",
        bucketB_label: "Disagree (Do Not Force)",
        arguments: [
            { text: "It allows women to return to their careers quickly, stopping them from losing promotions or taking pay cuts.", type: "A" },
            { text: "It allows fathers to build a deep, emotional bond with their newborn baby during the most important first months.", type: "A" },
            { text: "In many families, the father earns a much higher salary, so the family would lose too much money if he stopped working.", type: "B" },
            { text: "The government should not force families to behave a certain way; traditional roles work perfectly for some people.", type: "B" },
            { text: "TRAP: Finding a good, safe daycare center for a toddler is very stressful for young parents.", type: "Trap" },
            { text: "TRAP: Children love playing with colorful plastic toys because it helps their imagination grow.", type: "Trap" }
        ]
    },
    {
        prompt: "Because online shopping is so easy, people are buying too many things they do not need. Is this a positive or negative development?",
        bucketA_label: "Negative (Too Much Buying)",
        bucketB_label: "Positive (It is Good)",
        arguments: [
            { text: "One-click buying is incredibly addictive and causes young people to fall into terrible credit card debt.", type: "A" },
            { text: "Buying and returning useless items creates millions of tons of wasted cardboard boxes and plastic wrapping.", type: "A" },
            { text: "It allows poor families to easily compare prices on hundreds of websites to find the absolute cheapest option.", type: "B" },
            { text: "It is incredibly convenient for disabled or sick people who cannot physically walk around a large supermarket.", type: "B" },
            { text: "TRAP: Plastic bags are blowing into the ocean and destroying the coral reefs.", type: "Trap" },
            { text: "TRAP: Walking around a shopping mall for a few hours is actually very good physical exercise.", type: "Trap" }
        ]
    },
    {
        prompt: "To reduce traffic and pollution, the government should limit the number of cars a family is allowed to own. Do you agree or disagree?",
        bucketA_label: "Agree (Limit Cars)",
        bucketB_label: "Disagree (Do Not Limit)",
        arguments: [
            { text: "Forcing families to share one vehicle will instantly clear massive traffic jams from the morning highway.", type: "A" },
            { text: "It will force citizens to finally start using public buses and trains, drastically reducing carbon emissions.", type: "A" },
            { text: "It is a terrible violation of personal freedom; if a person earns the money, they should buy what they want.", type: "B" },
            { text: "Families living in deep rural areas desperately need multiple cars because buses do not travel to their farms.", type: "B" },
            { text: "TRAP: Passing a driving test in the city center is much harder than passing in a small town.", type: "Trap" },
            { text: "TRAP: Gasoline has a very strong, bad smell that makes many people feel sick.", type: "Trap" }
        ]
    },
    {
        prompt: "Primary schools should teach children how to grow vegetables and farm, rather than just teaching them to read and write. Do you agree or disagree?",
        bucketA_label: "Agree (Teach Farming)",
        bucketB_label: "Disagree (Focus on Academics)",
        arguments: [
            { text: "Working in the dirt teaches children exactly where food comes from, making them respect nature deeply.", type: "A" },
            { text: "Children are much more likely to happily eat healthy green vegetables if they proudly grew them themselves.", type: "A" },
            { text: "Taking time away from math and reading will make the students fail their important national high school exams.", type: "B" },
            { text: "Schools in the middle of giant cities simply do not have any grass or land to build a garden on.", type: "B" },
            { text: "TRAP: Apples sold in the modern supermarket are incredibly expensive during the winter.", type: "Trap" },
            { text: "TRAP: Driving a heavy farm tractor requires a lot of special training and a license.", type: "Trap" }
        ]
    },
    {
        prompt: "Private companies should be allowed to fly to space and mine resources from the moon and other planets. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Allow Mining)",
        bucketB_label: "Disadvantages (Stop Mining)",
        arguments: [
            { text: "Earth is rapidly running out of precious metals, so we must find new resources to build computers and batteries.", type: "A" },
            { text: "Allowing rich businesses to explore space will create massive new industries and thousands of high-paying jobs.", type: "A" },
            { text: "Greedy companies will completely destroy the beautiful surface of the moon just like they ruined Earth.", type: "B" },
            { text: "It could start terrible new wars if different countries start fighting over who owns the land on Mars.", type: "B" },
            { text: "TRAP: Astronaut spacesuits are incredibly heavy and difficult to wear for a long time.", type: "Trap" },
            { text: "TRAP: Looking up at the bright stars at night is a very romantic thing to do.", type: "Trap" }
        ]
    },
    {
        prompt: "Some experts say that young children learn better by playing games, while others say they learn better by reading books. Discuss both views.",
        bucketA_label: "Playing Games is Better",
        bucketB_label: "Reading Books is Better",
        arguments: [
            { text: "Physical group games teach children essential social skills, like how to share, negotiate, and work as a team.", type: "A" },
            { text: "Games are incredibly fun, which naturally keeps young children focused and interested in the lesson for much longer.", type: "A" },
            { text: "Reading forces a child to sit quietly and develop deep, intense focus, which is required for university later.", type: "B" },
            { text: "Books expose children to thousands of complex new words, expanding their vocabulary much faster than simple toys.", type: "B" },
            { text: "TRAP: Staring closely at violent video games for five hours a day will damage a child's eyes.", type: "Trap" },
            { text: "TRAP: Public libraries are very strict and force everyone to be absolutely quiet.", type: "Trap" }
        ]
    },
    {
        prompt: "Immigrants should be forced to learn the local language immediately when they move to a new country. Do you agree or disagree?",
        bucketA_label: "Agree (Force Language)",
        bucketB_label: "Disagree (Do Not Force)",
        arguments: [
            { text: "Speaking the local language allows immigrants to quickly find safe, well-paying jobs to support their families.", type: "A" },
            { text: "It breaks down walls between different cultures, creating a united, friendly community where everyone can talk.", type: "A" },
            { text: "Older adults find it biologically incredibly difficult to learn new grammar, so a strict rule is highly unfair.", type: "B" },
            { text: "People have a human right to keep their native culture and speak their mother tongue in their own homes.", type: "B" },
            { text: "TRAP: Sitting on a crowded airplane for twelve hours is extremely tiring for older people.", type: "Trap" },
            { text: "TRAP: Trying exciting foreign food in a new restaurant is a great weekend activity.", type: "Trap" }
        ]
    },
    {
        prompt: "The 'fast fashion' industry produces very cheap clothes that are thrown away quickly. Is this a positive or negative development?",
        bucketA_label: "Negative Development",
        bucketB_label: "Positive Development",
        arguments: [
            { text: "Clothing factories dump millions of gallons of highly toxic chemical dyes directly into the local drinking rivers.", type: "A" },
            { text: "Millions of perfectly good shirts are thrown into garbage dumps every week simply because the trend changed.", type: "A" },
            { text: "It finally allows very poor families to afford nice, warm clothing for their children without borrowing money.", type: "B" },
            { text: "The massive demand for cheap shirts creates millions of factory jobs for workers in developing countries.", type: "B" },
            { text: "TRAP: Wearing a dark, expensive suit to a job interview makes you look very professional.", type: "Trap" },
            { text: "TRAP: Modern washing machines use a massive amount of water and electricity.", type: "Trap" }
        ]
    },
    {
        prompt: "Rich countries should be forced to share all their medical research and new drugs with poor countries for free. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Share for Free)",
        bucketB_label: "Disagree (Do Not Share)",
        arguments: [
            { text: "Saving innocent human lives from terrible diseases is morally much more important than making a corporate profit.", type: "A" },
            { text: "Sharing vaccines globally is the absolute only way to stop a deadly pandemic from spreading around the world.", type: "A" },
            { text: "If companies cannot make money from selling pills, they will simply stop inventing new life-saving medicines.", type: "B" },
            { text: "Inventing a new drug costs billions of dollars in laboratory research, which the poor countries did not pay for.", type: "B" },
            { text: "TRAP: Sleeping on a hard hospital bed for two weeks is very uncomfortable for patients.", type: "Trap" },
            { text: "TRAP: Doctors and nurses usually wear perfectly clean white uniforms to stop germs.", type: "Trap" }
        ]
    },
    {
        prompt: "Internet access should be considered a basic human right and provided for free by the government. Do you agree or disagree?",
        bucketA_label: "Agree (Make it Free)",
        bucketB_label: "Disagree (Keep it Private)",
        arguments: [
            { text: "It is now completely impossible to apply for a job or a bank account without using an online website.", type: "A" },
            { text: "Free Wi-Fi allows poor children to do their school homework and research exactly like rich children do.", type: "A" },
            { text: "Building thousands of computer towers across the entire country would cost the government too much tax money.", type: "B" },
            { text: "The internet is a luxury used mostly for watching movies and playing games, not a necessity like food or water.", type: "B" },
            { text: "TRAP: Criminal hackers often try to steal secret credit card numbers from completely innocent people.", type: "Trap" },
            { text: "TRAP: Staring at a bright computer screen all day is the main cause of terrible headaches.", type: "Trap" }
        ]
    },
    {
        prompt: "Schools should group students into different classes based on their academic ability, rather than mixing smart and slow students together. Discuss both views.",
        bucketA_label: "Group by Ability",
        bucketB_label: "Mix All Students",
        arguments: [
            { text: "Gifted students do not get incredibly bored, and the teacher can move the lesson at a very fast, exciting speed.", type: "A" },
            { text: "Slow learners can get special, careful attention without feeling stupid for asking simple questions.", type: "A" },
            { text: "Putting children in the 'bottom' class completely destroys their confidence and makes them want to quit school.", type: "B" },
            { text: "Mixed classrooms naturally teach the smarter children how to be patient and kindly help their struggling friends.", type: "B" },
            { text: "TRAP: Forcing students to wear identical green uniforms stops them from bullying each other.", type: "Trap" },
            { text: "TRAP: Solving complex math problems is considered much harder than painting a beautiful picture.", type: "Trap" }
        ]
    },
    {
        prompt: "Teenagers who commit terrible crimes, such as murder, should receive the exact same punishment as adults. Do you agree or disagree?",
        bucketA_label: "Agree (Punish as Adults)",
        bucketB_label: "Disagree (Punish Differently)",
        arguments: [
            { text: "A violent murder destroys a family forever, regardless of the killer's age, so the victim deserves equal justice.", type: "A" },
            { text: "If teenagers know they will go to a real adult prison, they will be terrified and stop joining dangerous street gangs.", type: "A" },
            { text: "A teenager's brain is not fully developed, meaning they cannot truly understand the consequences of their actions.", type: "B" },
            { text: "Young people can still be fixed and rehabilitated using therapy, but adult prison will just make them worse.", type: "B" },
            { text: "TRAP: Police cars use incredibly loud sirens to warn drivers to move out of the way.", type: "Trap" },
            { text: "TRAP: Lawyers are required to wear very expensive, professional suits when they go to court.", type: "Trap" }
        ]
    },
    {
        prompt: "In the future, robots will be used to care for elderly people in their homes. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Robots are Good)",
        bucketB_label: "Disadvantages (Robots are Bad)",
        arguments: [
            { text: "Machines never get tired or hurt their backs when lifting heavy patients out of their beds.", type: "A" },
            { text: "It completely solves the massive global shortage of young nurses and expensive hospital staff.", type: "A" },
            { text: "Old people will feel deeply, terribly lonely if they never have a real conversation with another human being.", type: "B" },
            { text: "A robot cannot show true love, empathy, or sadness when holding the hand of a dying patient.", type: "B" },
            { text: "TRAP: Modern mobile phones with small buttons are very confusing for old people to use.", type: "Trap" },
            { text: "TRAP: Hospitals must keep their bright lights on all night to keep the building completely safe.", type: "Trap" }
        ]
    },
    {
        prompt: "Written exams should be completely replaced with ongoing coursework and projects. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Use Projects)",
        bucketB_label: "Disagree (Keep Exams)",
        arguments: [
            { text: "Projects teach students real-world office skills, like how to do deep research and work in a team.", type: "A" },
            { text: "It stops students from having terrible panic attacks on the morning of a massive, terrifying test.", type: "A" },
            { text: "Students can easily cheat by paying someone else to write their project or by copying the internet.", type: "B" },
            { text: "Sitting in a silent room for two hours guarantees that the test is perfectly fair and equal for everyone.", type: "B" },
            { text: "TRAP: Cheap wooden pencils break very easily when students press down too hard on the paper.", type: "Trap" },
            { text: "TRAP: Waking up at six o'clock in the morning to catch the school bus is very difficult.", type: "Trap" }
        ]
    },
    {
        prompt: "The government should heavily tax rich people who own empty houses, to solve the homelessness crisis. Do you agree or disagree?",
        bucketA_label: "Agree (Tax Empty Houses)",
        bucketB_label: "Disagree (Do Not Tax Them)",
        arguments: [
            { text: "A massive fine will force greedy investors to finally rent out their empty apartments to normal families.", type: "A" },
            { text: "The tax money collected could be used directly to build safe, warm shelters for people sleeping on the streets.", type: "A" },
            { text: "People have an absolute human right to do whatever they want with the private property they paid for.", type: "B" },
            { text: "Many empty houses are simply holiday homes that the owners visit safely during the summer.", type: "B" },
            { text: "TRAP: Painting the outside walls of a large house takes many weeks of hard work.", type: "Trap" },
            { text: "TRAP: Living in the center of the capital city is far too noisy during the night.", type: "Trap" }
        ]
    },
    {
        prompt: "Dangerous extreme sports like skydiving and mountain climbing should be banned by the government. Do you agree or disagree?",
        bucketA_label: "Agree (Ban Extreme Sports)",
        bucketB_label: "Disagree (Allow Them)",
        arguments: [
            { text: "When people crash on a mountain, it costs the public health system millions of dollars in helicopter rescue bills.", type: "A" },
            { text: "Uploading videos of deadly jumps encourages foolish young teenagers to copy the stunts and get killed.", type: "A" },
            { text: "Adults must have the absolute freedom to take personal risks with their own bodies if they want to.", type: "B" },
            { text: "These incredible sports push the absolute limits of human bravery and physical achievement.", type: "B" },
            { text: "TRAP: Swimming slowly in a warm indoor pool is a fantastic way to relax tired muscles.", type: "Trap" },
            { text: "TRAP: Professional football players earn far too much money just for kicking a ball.", type: "Trap" }
        ]
    },
    {
        prompt: "Schools should stop teaching children how to write by hand, and only teach them how to type on a keyboard. Do you agree or disagree?",
        bucketA_label: "Agree (Only Teach Typing)",
        bucketB_label: "Disagree (Keep Handwriting)",
        arguments: [
            { text: "Typing is incredibly fast and is the absolute only skill required to work in a modern digital office.", type: "A" },
            { text: "No one writes formal letters on paper anymore; everything is sent instantly via email or text message.", type: "A" },
            { text: "Forming letters slowly with a pen naturally helps a young child's brain remember spelling and facts better.", type: "B" },
            { text: "Handwriting is a beautiful, deeply human tradition that connects us to thousands of years of history.", type: "B" },
            { text: "TRAP: Reading short emails on a bright mobile phone screen is very easy to do.", type: "Trap" },
            { text: "TRAP: Cheap plastic pens run out of black ink very quickly if you use them every day.", type: "Trap" }
        ]
    },
    {
        prompt: "Large museums should be forced to return historical objects to the countries they were originally found in. Discuss both views.",
        bucketA_label: "Return the Objects",
        bucketB_label: "Keep the Objects",
        arguments: [
            { text: "Many ancient statues were violently stolen during terrible wars, so returning them is a matter of basic justice.", type: "A" },
            { text: "Giving back religious items restores a sense of deep pride and cultural identity to the original country.", type: "A" },
            { text: "Massive international museums have the expensive technology required to keep the fragile objects perfectly safe.", type: "B" },
            { text: "Keeping them in London or Paris allows millions of global tourists to easily learn about the world in one building.", type: "B" },
            { text: "TRAP: Private art galleries often sell modern paintings for millions of dollars to rich collectors.", type: "Trap" },
            { text: "TRAP: High school teenagers usually find reading about ancient history to be incredibly boring.", type: "Trap" }
        ]
    },
    {
        prompt: "Is it better for a child to grow up in a large family with many siblings, or a small family with no siblings?",
        bucketA_label: "Large Family is Better",
        bucketB_label: "Small Family is Better",
        arguments: [
            { text: "Having many brothers and sisters naturally teaches a child how to share, wait their turn, and negotiate.", type: "A" },
            { text: "You will never feel completely alone in life because you have a built-in group of supportive friends.", type: "A" },
            { text: "Parents in a small family have much more money to spend on giving the child an expensive university education.", type: "B" },
            { text: "The parents are not exhausted and can give the single child all of their calm, careful attention.", type: "B" },
            { text: "TRAP: Living completely alone in a dark city apartment can make people feel very depressed.", type: "Trap" },
            { text: "TRAP: Grandparents really enjoy giving expensive birthday presents to their favorite grandchildren.", type: "Trap" }
        ]
    },
    {
        prompt: "High school students should be forced to do unpaid charity work in their local community. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Force Charity Work)",
        bucketB_label: "Disagree (Do Not Force It)",
        arguments: [
            { text: "Helping the homeless naturally teaches rich, spoiled teenagers to have deep empathy for poor people.", type: "A" },
            { text: "Working in a charity shop builds amazing practical communication skills that look great on a future resume.", type: "A" },
            { text: "Teenagers are already completely exhausted from studying for exams, and this will just cause severe burnout.", type: "B" },
            { text: "If you force someone to volunteer, they will hate doing it and completely miss the moral lesson.", type: "B" },
            { text: "TRAP: Donating a massive amount of money to charity allows rich people to pay fewer taxes.", type: "Trap" },
            { text: "TRAP: Wealthy business owners often buy giant luxury boats to sail on the ocean.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people believe that great business leaders are naturally born, while others think leadership can be learned. Discuss both views.",
        bucketA_label: "Leaders are Born",
        bucketB_label: "Leadership is Learned",
        arguments: [
            { text: "Some individuals naturally possess loud, highly confident personalities that make other people instantly trust them.", type: "A" },
            { text: "Natural charisma and a brave attitude toward extreme risk cannot be taught in a boring classroom.", type: "A" },
            { text: "Anyone can become a manager if they simply read books about psychology and practice talking to groups.", type: "B" },
            { text: "Great leadership is actually just learning how to organize spreadsheets and properly schedule team meetings.", type: "B" },
            { text: "TRAP: Government politicians often give extremely long, boring speeches on the television news.", type: "Trap" },
            { text: "TRAP: Sitting in a cheap office chair for nine hours a day is terrible for your lower back.", type: "Trap" }
        ]
    },
    {
        prompt: "Violent sports, such as boxing and mixed martial arts, should be completely banned by the government. Do you agree or disagree?",
        bucketA_label: "Agree (Ban Violent Sports)",
        bucketB_label: "Disagree (Allow Them)",
        arguments: [
            { text: "Repeatedly punching another human in the head causes terrible, permanent brain damage and memory loss.", type: "A" },
            { text: "Paying to watch two men bleed promotes pure savagery and teaches society that violence is fun entertainment.", type: "A" },
            { text: "It is a highly regulated sport with doctors watching, so it is actually much safer than fighting on the street.", type: "B" },
            { text: "Boxing gives very angry, poor young men a disciplined way to escape poverty and become rich heroes.", type: "B" },
            { text: "TRAP: Running a marathon in the hot summer sun makes the human body completely exhausted.", type: "Trap" },
            { text: "TRAP: Playing basketball is incredibly popular in American high schools during the winter.", type: "Trap" }
        ]
    },
    // ==========================================
    // BATCH 7: THE FINAL IELTS TOPICS (30 Prompts)
    // ==========================================
    {
        prompt: "When new buildings are built in a city, they should be required to match the traditional style of the old buildings. Do you agree or disagree?",
        bucketA_label: "Agree (Match Old Styles)",
        bucketB_label: "Disagree (Allow Modern Styles)",
        arguments: [
            { text: "Keeping a single, historical design makes the city look beautiful and protects its unique cultural identity.", type: "A" },
            { text: "Tourists travel thousands of miles specifically to see ancient architecture, which helps the local economy.", type: "A" },
            { text: "Modern glass and steel buildings are much cheaper to build and are far more energy-efficient.", type: "B" },
            { text: "Forcing architects to copy the past completely destroys modern artistic creativity and urban progress.", type: "B" },
            { text: "TRAP: Buying a large, expensive house in the countryside is a dream for many young families.", type: "Trap" },
            { text: "TRAP: Many historical museums do not allow visitors to use the flash on their cameras.", type: "Trap" }
        ]
    },
    {
        prompt: "Because we have the internet, public libraries are no longer necessary and should be closed. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Close Libraries)",
        bucketB_label: "Disagree (Keep Libraries)",
        arguments: [
            { text: "Maintaining large brick buildings and paying librarians costs the government millions in wasted tax dollars.", type: "A" },
            { text: "A cheap smartphone can instantly access ten times more information than the biggest library in the world.", type: "A" },
            { text: "Libraries provide a completely silent, safe space for poor students to study and do their homework.", type: "B" },
            { text: "They act as important community centers where elderly people can take free computer and reading classes.", type: "B" },
            { text: "TRAP: Many famous fantasy novels have been turned into incredibly successful Hollywood movies.", type: "Trap" },
            { text: "TRAP: Social media applications are deliberately designed to keep teenagers addicted to their screens.", type: "Trap" }
        ]
    },
    {
        prompt: "In many countries, traditional local food is being replaced by international fast food. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "International restaurants guarantee a very cheap, fast, and safe meal for busy workers on their lunch break.", type: "A" },
            { text: "It allows local citizens to easily experience foreign cultures and exciting new flavors from around the world.", type: "A" },
            { text: "The ancient recipes and unique cooking skills of the local culture will be completely forgotten and lost.", type: "B" },
            { text: "Fast food is highly processed and filled with dangerous amounts of sugar, causing severe national health problems.", type: "B" },
            { text: "TRAP: Learning how to cook a complex meal requires buying many expensive pots and pans.", type: "Trap" },
            { text: "TRAP: Supermarkets often throw away hundreds of apples just because they have a strange shape.", type: "Trap" }
        ]
    },
    {
        prompt: "Some people believe there should be a strict legal limit on how much money a company boss (CEO) is allowed to earn. Do you agree or disagree?",
        bucketA_label: "Agree (Limit Wages)",
        bucketB_label: "Disagree (Do Not Limit)",
        arguments: [
            { text: "It is morally disgusting for one boss to earn millions while their factory workers struggle to buy food.", type: "A" },
            { text: "The extra profits could be used to lower the price of the products or hire thousands of new staff.", type: "A" },
            { text: "If you cap salaries, the smartest and most talented leaders will simply move to a different country.", type: "B" },
            { text: "Taking extreme financial risks to build a global company deserves a massive financial reward.", type: "B" },
            { text: "TRAP: Buying stocks and shares on the internet is a very risky way to invest your savings.", type: "Trap" },
            { text: "TRAP: People who work in dangerous jobs like mining should wear strong safety equipment.", type: "Trap" }
        ]
    },
    {
        prompt: "People who commit minor crimes (like stealing food or breaking windows) should do unpaid community service instead of going to prison. Do you agree or disagree?",
        bucketA_label: "Agree (Community Service)",
        bucketB_label: "Disagree (Send to Prison)",
        arguments: [
            { text: "Cleaning the streets forces criminals to give back to the specific community that they damaged.", type: "A" },
            { text: "Putting young people in prison just surrounds them with dangerous adult criminals who teach them worse behavior.", type: "A" },
            { text: "Picking up trash is not a scary punishment, so they will probably just steal again the next day.", type: "B" },
            { text: "Victims of crime feel deeply betrayed if the person who robbed their house does not go to jail.", type: "B" },
            { text: "TRAP: Police officers must pass a very difficult physical fitness test before they can join the team.", type: "Trap" },
            { text: "TRAP: Many rich people donate millions of dollars to charities that build new hospitals.", type: "Trap" }
        ]
    },
    {
        prompt: "Physical Education (PE) and sports should be mandatory for all students every single day at school. Do you agree or disagree?",
        bucketA_label: "Agree (Mandatory Sports)",
        bucketB_label: "Disagree (Not Mandatory)",
        arguments: [
            { text: "Daily exercise perfectly solves the massive child obesity crisis happening in modern developed countries.", type: "A" },
            { text: "Running and playing releases stress, making children focus much better when they return to the math classroom.", type: "A" },
            { text: "Taking an hour away from studying every day will cause students to fail their important university entrance exams.", type: "B" },
            { text: "Students who are not naturally athletic often suffer from terrible bullying and embarrassment during gym class.", type: "B" },
            { text: "TRAP: Professional football players must eat a very strict diet of protein and vegetables.", type: "Trap" },
            { text: "TRAP: History textbooks are often very heavy and cause back pain for students who carry them.", type: "Trap" }
        ]
    },
    {
        prompt: "To solve environmental problems, people should focus on producing less trash rather than focusing on recycling. Do you agree or disagree?",
        bucketA_label: "Agree (Produce Less Trash)",
        bucketB_label: "Disagree (Focus on Recycling)",
        arguments: [
            { text: "The recycling process itself uses massive amounts of dirty electricity and fuel to melt down old plastic.", type: "A" },
            { text: "If we stop buying useless plastic packaging, factories will simply stop manufacturing it in the first place.", type: "A" },
            { text: "It is impossible to force modern humans to completely stop buying packaged food and medical supplies.", type: "B" },
            { text: "Modern recycling technology is highly efficient and turns old trash into valuable materials for new products.", type: "B" },
            { text: "TRAP: Wind turbines and solar panels are becoming much cheaper to build every single year.", type: "Trap" },
            { text: "TRAP: Heavy rain and rising oceans are destroying the houses of people who live near the beach.", type: "Trap" }
        ]
    },
    {
        prompt: "Universities should accept equal numbers of male and female students into every subject, including science and engineering. Do you agree or disagree?",
        bucketA_label: "Agree (Force Equal Numbers)",
        bucketB_label: "Disagree (Base on Skill/Choice)",
        arguments: [
            { text: "It breaks the unfair traditional stereotype that women cannot succeed in difficult mathematical careers.", type: "A" },
            { text: "Having diverse opinions in a science laboratory leads to much better and more creative medical research.", type: "A" },
            { text: "University places should be given strictly to the smartest students, regardless of their gender.", type: "B" },
            { text: "You cannot force women to study engineering if they genuinely prefer to study nursing or literature.", type: "B" },
            { text: "TRAP: University tuition fees have become so expensive that students have massive bank loans.", type: "Trap" },
            { text: "TRAP: Primary school children usually learn to read much faster if their parents help them at home.", type: "Trap" }
        ]
    },
    {
        prompt: "The legal voting age should be lowered to 16, allowing high school students to vote in national elections. Do you agree or disagree?",
        bucketA_label: "Agree (Lower to 16)",
        bucketB_label: "Disagree (Keep at 18/21)",
        arguments: [
            { text: "Teenagers will have to live with the consequences of environmental and economic laws the longest.", type: "A" },
            { text: "It encourages young people to pay close attention to the news and care about their local community.", type: "A" },
            { text: "Most sixteen-year-olds lack real-world financial experience and will just vote for whoever their parents support.", type: "B" },
            { text: "Teenagers are highly emotional and easily tricked by politicians making unrealistic promises on social media.", type: "B" },
            { text: "TRAP: The government collects taxes from citizens to pay for public hospitals and smooth roads.", type: "Trap" },
            { text: "TRAP: Many schools use computers to test students instead of using traditional paper exams.", type: "Trap" }
        ]
    },
    {
        prompt: "Foreign tourists should be charged a higher price than local citizens to visit cultural and historical sites. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Charge Tourists More)",
        bucketB_label: "Disagree (Charge Everyone Equally)",
        arguments: [
            { text: "Local citizens already pay high daily taxes to maintain these museums, so they deserve a cheaper entry ticket.", type: "A" },
            { text: "The extra money collected from wealthy foreigners can be used to properly repair the fragile ancient buildings.", type: "A" },
            { text: "It feels incredibly unwelcoming and makes tourists feel like they are just being used for their money.", type: "B" },
            { text: "If prices become too high, international travelers will simply choose to spend their holiday in a different country.", type: "B" },
            { text: "TRAP: Traveling on an airplane requires passengers to arrive at the airport two hours early.", type: "Trap" },
            { text: "TRAP: Many old statues have been slowly destroyed by acid rain and terrible city pollution.", type: "Trap" }
        ]
    },
    {
        prompt: "Some parents choose to educate their children at home (homeschooling) instead of sending them to a traditional school. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages of Homeschooling",
        bucketB_label: "Disadvantages of Homeschooling",
        arguments: [
            { text: "Parents can completely customize the daily lessons to perfectly match the child's natural learning speed.", type: "A" },
            { text: "It completely protects fragile children from experiencing terrible bullying and dangerous peer pressure.", type: "A" },
            { text: "Children will struggle to develop essential social skills because they never talk to large groups of strangers.", type: "B" },
            { text: "Most parents do not have the high-level scientific knowledge required to properly teach high school chemistry.", type: "B" },
            { text: "TRAP: Teachers spend many hours grading homework papers after the students have gone home.", type: "Trap" },
            { text: "TRAP: Living in a large family teaches brothers and sisters how to share their toys fairly.", type: "Trap" }
        ]
    },
    {
        prompt: "Clean water is becoming a very rare resource. The government should strictly control how much water each household is allowed to use. Do you agree or disagree?",
        bucketA_label: "Agree (Control Water Use)",
        bucketB_label: "Disagree (Do Not Control It)",
        arguments: [
            { text: "Without strict legal limits, selfish people will waste thousands of gallons washing their cars during a drought.", type: "A" },
            { text: "It is the only way to guarantee that poor communities will have enough water to drink in the future.", type: "A" },
            { text: "It is a massive violation of human freedom; the government should not watch people taking showers.", type: "B" },
            { text: "A better solution is for the government to simply fix broken, leaking pipes that run under the city streets.", type: "B" },
            { text: "TRAP: Plastic bottles floating in the ocean are incredibly dangerous for wild sea turtles to eat.", type: "Trap" },
            { text: "TRAP: Taking a hot bath in the evening is an excellent way to relax tired muscles after work.", type: "Trap" }
        ]
    },
    {
        prompt: "Many university students work part-time jobs while they are studying. Does this have a positive or negative effect on their education?",
        bucketA_label: "Positive Effect",
        bucketB_label: "Negative Effect",
        arguments: [
            { text: "It teaches young adults vital time-management skills and shows them the real value of earning hard money.", type: "A" },
            { text: "Having customer service experience on a resume makes it much easier to find a professional job after graduation.", type: "A" },
            { text: "Working late at night leaves students totally exhausted, causing them to sleep through their morning lectures.", type: "B" },
            { text: "It takes away valuable hours that should be spent doing deep research in the library for their final exams.", type: "B" },
            { text: "TRAP: Universities often charge massive fees for students who want to live in the campus dormitories.", type: "Trap" },
            { text: "TRAP: Buying cheap fast food is often the only way busy people have time to eat lunch.", type: "Trap" }
        ]
    },
    {
        prompt: "People today often move to different cities or countries to find work. What are the advantages and disadvantages of moving away for a job?",
        bucketA_label: "Advantages (Moving for Work)",
        bucketB_label: "Disadvantages (Problems Caused)",
        arguments: [
            { text: "Relocating to a major international city usually provides a much higher salary and incredible promotion opportunities.", type: "A" },
            { text: "It builds immense personal confidence as the worker learns how to survive entirely on their own.", type: "A" },
            { text: "Moving away means losing your entire support network, leading to terrible loneliness and homesickness.", type: "B" },
            { text: "If married couples have to move to different cities for their jobs, the relationship usually breaks down.", type: "B" },
            { text: "TRAP: Learning how to speak a new foreign language is extremely difficult for older adults.", type: "Trap" },
            { text: "TRAP: Working from a laptop at home allows people to wear casual clothes instead of a suit.", type: "Trap" }
        ]
    },
    {
        prompt: "It is morally wrong for humans to use animals for food and clothing. To what extent do you agree or disagree?",
        bucketA_label: "Agree (It is Wrong)",
        bucketB_label: "Disagree (It is Acceptable)",
        arguments: [
            { text: "Modern factory farms lock animals in dark, tiny cages for their entire lives, causing unimaginable suffering.", type: "A" },
            { text: "We now have cheap, warm synthetic materials and healthy plant proteins, making animal products completely unnecessary.", type: "A" },
            { text: "Eating meat is a completely natural biological process that humans have relied on for thousands of years.", type: "B" },
            { text: "Millions of traditional farmers in poor countries would starve if they could not sell their sheep and cows.", type: "B" },
            { text: "TRAP: Keeping wild snakes or monkeys as pets inside a city apartment is very dangerous.", type: "Trap" },
            { text: "TRAP: Designing fashionable clothes requires a lot of artistic creativity and drawing skills.", type: "Trap" }
        ]
    },
    {
        prompt: "Large corporations should sponsor national sports teams and major sporting events. Do the advantages of corporate sponsorship outweigh the disadvantages?",
        bucketA_label: "Advantages of Sponsorship",
        bucketB_label: "Disadvantages of Sponsorship",
        arguments: [
            { text: "Corporate money allows stadiums to be built and keeps the ticket prices incredibly cheap for normal fans.", type: "A" },
            { text: "It provides the vital funding needed for poor athletes to travel and train for the Olympic Games.", type: "A" },
            { text: "Fast food and alcohol companies use sports to trick young children into buying their deeply unhealthy products.", type: "B" },
            { text: "Rich companies gain too much control and will force the sports games to be played at strange television hours.", type: "B" },
            { text: "TRAP: Running and swimming every single day is an excellent way to maintain a healthy human heart.", type: "Trap" },
            { text: "TRAP: Famous actors often make millions of dollars by starring in loud Hollywood action movies.", type: "Trap" }
        ]
    },
    {
        prompt: "Governments use traffic cameras to catch drivers who drive too fast. Some people think this makes the roads safer, while others think it is just a way for the government to make money. Discuss both views.",
        bucketA_label: "Cameras Make Roads Safer",
        bucketB_label: "Cameras Just Make Money",
        arguments: [
            { text: "Knowing a camera is watching forces drivers to slow down, drastically reducing the number of fatal car crashes.", type: "A" },
            { text: "Machines are perfectly fair and will automatically catch every dangerous driver without any human bias.", type: "A" },
            { text: "Cameras are often hidden in confusing areas specifically to trick innocent drivers into paying huge fines.", type: "B" },
            { text: "If safety was the real goal, the government would spend money fixing broken roads instead of buying cameras.", type: "B" },
            { text: "TRAP: Taking the public train is much better for the environment than driving a private car.", type: "Trap" },
            { text: "TRAP: Buying a brand new sports car is a terrible financial decision because they lose value quickly.", type: "Trap" }
        ]
    },
    {
        prompt: "Companies should allow their employees to wear casual, comfortable clothes to work instead of formal business suits. Do you agree or disagree?",
        bucketA_label: "Agree (Allow Casual Clothes)",
        bucketB_label: "Disagree (Keep Formal Suits)",
        arguments: [
            { text: "Workers are much more creative and productive when they are physically comfortable at their desks.", type: "A" },
            { text: "It saves young employees thousands of dollars because they do not have to buy expensive professional jackets.", type: "A" },
            { text: "Wearing a sharp suit automatically gives clients a feeling of deep trust and respect for the business.", type: "B" },
            { text: "A formal dress code creates a strict psychological boundary between relaxing at home and working hard.", type: "B" },
            { text: "TRAP: Working from a computer in a coffee shop is becoming incredibly popular for young people.", type: "Trap" },
            { text: "TRAP: The fashion industry creates a massive amount of pollution when making cheap t-shirts.", type: "Trap" }
        ]
    },
    {
        prompt: "Computer programming (coding) should be a mandatory subject for all primary school children. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Mandatory Coding)",
        bucketB_label: "Disagree (Not Mandatory)",
        arguments: [
            { text: "Understanding software is exactly as important as reading and writing in the modern digital economy.", type: "A" },
            { text: "Learning to write code naturally teaches young children incredible logic and complex problem-solving skills.", type: "A" },
            { text: "Adding coding to the timetable means children will spend less time exercising outside or learning art.", type: "B" },
            { text: "Technology changes so incredibly fast that the coding languages taught today will be totally useless in ten years.", type: "B" },
            { text: "TRAP: Playing violent video games makes young boys act very aggressively toward their friends.", type: "Trap" },
            { text: "TRAP: Mobile phones have very small screens that can cause terrible headaches if used too long.", type: "Trap" }
        ]
    },
    {
        prompt: "Traditional festivals and national holidays are losing their original meaning and are now just an excuse to buy things. To what extent do you agree or disagree?",
        bucketA_label: "Agree (They are Ruined)",
        bucketB_label: "Disagree (They still have Meaning)",
        arguments: [
            { text: "Supermarkets completely ignore the religious history and simply use the holiday to sell expensive plastic decorations.", type: "A" },
            { text: "People feel terrible financial pressure to buy massive gifts instead of quietly reflecting on the culture.", type: "A" },
            { text: "These events are still the only time during the year when busy modern families finally gather to eat together.", type: "B" },
            { text: "Local communities still take great pride in wearing traditional clothing and cooking ancient recipes.", type: "B" },
            { text: "TRAP: International tourism brings millions of dollars into small villages during the summer.", type: "Trap" },
            { text: "TRAP: Shopping on the internet is much faster than walking to the center of the city.", type: "Trap" }
        ]
    },
    {
        prompt: "To improve public health, governments should restrict the amount of sugar allowed in manufactured food. Do you agree or disagree?",
        bucketA_label: "Agree (Restrict Sugar)",
        bucketB_label: "Disagree (Do Not Restrict)",
        arguments: [
            { text: "It forces lazy food companies to finally invent healthier recipes instead of pumping cheap syrup into bread.", type: "A" },
            { text: "It will drastically lower the number of heart attacks, saving the public hospital system millions of dollars.", type: "A" },
            { text: "Adults must have the absolute human freedom to choose exactly what they want to eat and drink.", type: "B" },
            { text: "It would destroy the chocolate and soda industries, causing thousands of factory workers to lose their jobs.", type: "B" },
            { text: "TRAP: Growing fresh vegetables in a home garden is a wonderful hobby for elderly people.", type: "Trap" },
            { text: "TRAP: Running on a treadmill for thirty minutes a day makes the human body very strong.", type: "Trap" }
        ]
    },
    {
        prompt: "Seeing violence on television news and in movies is the primary cause of violent crime in society. To what extent do you agree or disagree?",
        bucketA_label: "Agree (TV Causes Crime)",
        bucketB_label: "Disagree (Other Causes Better)",
        arguments: [
            { text: "Constantly seeing murders on screen makes human brains numb, making real blood seem completely normal.", type: "A" },
            { text: "Young teenagers often blindly copy the cool, aggressive behavior of their favorite action movie heroes.", type: "A" },
            { text: "The true root cause of robbery and gang violence is extreme poverty and a lack of decent local jobs.", type: "B" },
            { text: "Millions of peaceful people watch horror movies every weekend and never commit a single real crime.", type: "B" },
            { text: "TRAP: Going to the cinema is very expensive because popcorn and tickets cost a lot of money.", type: "Trap" },
            { text: "TRAP: Security cameras on the street are very helpful for police trying to catch a thief.", type: "Trap" }
        ]
    },
    {
        prompt: "Prisons should be highly uncomfortable places to punish criminals, rather than comfortable places focused on education. Do you agree or disagree?",
        bucketA_label: "Agree (Make Prisons Harsh)",
        bucketB_label: "Disagree (Focus on Education)",
        arguments: [
            { text: "A brutal, miserable experience guarantees that the criminal will be utterly terrified of ever breaking the law again.", type: "A" },
            { text: "It provides true mental peace and justice to the innocent victims who suffered from the crime.", type: "A" },
            { text: "If you treat prisoners like angry animals, they will act like violent animals when they are finally released.", type: "B" },
            { text: "Providing computers and degrees ensures they can find a legal job instead of returning to a street gang.", type: "B" },
            { text: "TRAP: Many innocent people suffer from terrible anxiety when walking alone at night.", type: "Trap" },
            { text: "TRAP: Teachers working in high schools deserve to be paid a much higher national salary.", type: "Trap" }
        ]
    },
    {
        prompt: "It is better to be self-employed and run your own business than to work for a large company. Discuss both views.",
        bucketA_label: "Self-Employed is Better",
        bucketB_label: "Company Work is Better",
        arguments: [
            { text: "You have the absolute freedom to choose your own hours and take a holiday whenever you want.", type: "A" },
            { text: "If your creative ideas are successful, you get to keep all the profits instead of giving them to a boss.", type: "A" },
            { text: "Working for a huge corporation guarantees a perfectly safe, stable salary at the end of every month.", type: "B" },
            { text: "The company pays for expensive health insurance and provides a safe pension for when you get old.", type: "B" },
            { text: "TRAP: Buying products from local farmers is much better for the environmental ecosystem.", type: "Trap" },
            { text: "TRAP: Using a computer to design a website is a very popular hobby for young students.", type: "Trap" }
        ]
    },
    {
        prompt: "The government should force large factories and businesses to move out of the city center and into the countryside. Do the advantages outweigh the disadvantages?",
        bucketA_label: "Advantages (Move Factories)",
        bucketB_label: "Disadvantages (Keep Factories)",
        arguments: [
            { text: "It immediately removes thick, toxic smoke and heavy truck noise from the crowded city streets.", type: "A" },
            { text: "It brings thousands of excellent new jobs to poor rural villages that desperately need money.", type: "A" },
            { text: "Building giant industrial warehouses will completely destroy beautiful green fields and natural animal habitats.", type: "B" },
            { text: "City workers will be forced to drive two hours into the country every day, creating massive new traffic jams.", type: "B" },
            { text: "TRAP: Historic castles in the center of town attract millions of rich tourists every summer.", type: "Trap" },
            { text: "TRAP: Buying organic vegetables from a farm is much healthier than eating fast food.", type: "Trap" }
        ]
    },
    {
        prompt: "In some cultures, old age is valued and respected, while in others, youth is considered more important. Discuss both views.",
        bucketA_label: "Valuing Old Age",
        bucketB_label: "Valuing Youth",
        arguments: [
            { text: "Elderly people have survived decades of hardship, giving them deep wisdom that books cannot teach.", type: "A" },
            { text: "Respecting grandparents creates a highly stable, traditional society where families stay tightly connected.", type: "A" },
            { text: "Young people possess incredible physical energy and the brave confidence needed to invent new technology.", type: "B" },
            { text: "Focusing on youth ensures the country is always looking forward to modern progress rather than the past.", type: "B" },
            { text: "TRAP: The government must build more hospitals to take care of sick people in the winter.", type: "Trap" },
            { text: "TRAP: Primary school children need to sleep for at least nine hours every single night.", type: "Trap" }
        ]
    },
    {
        prompt: "Museums should focus on entertaining people rather than just educating them. To what extent do you agree or disagree?",
        bucketA_label: "Agree (Focus on Entertainment)",
        bucketB_label: "Disagree (Focus on Education)",
        arguments: [
            { text: "Using fun virtual reality screens is the only way to keep young children from getting incredibly bored.", type: "A" },
            { text: "If the museum feels like a fun theme park, thousands more tourists will buy expensive entry tickets.", type: "A" },
            { text: "Turning a museum into a playground completely ruins the serious, quiet respect required for ancient history.", type: "B" },
            { text: "The sole fundamental purpose of a museum is to preserve pure academic facts, not to act like a cinema.", type: "B" },
            { text: "TRAP: Famous paintings by old artists are often stolen by very clever international thieves.", type: "Trap" },
            { text: "TRAP: Reading a long textbook is a very difficult task for students before an exam.", type: "Trap" }
        ]
    },
    {
        prompt: "It is better to learn a foreign language (like English) in a country where it is spoken, rather than in a classroom in your home country. Do you agree or disagree?",
        bucketA_label: "Learn Abroad",
        bucketB_label: "Learn at Home",
        arguments: [
            { text: "Living in London forces the student to use English to survive, making them fluent incredibly quickly.", type: "A" },
            { text: "Students learn the real, natural slang used by locals instead of boring, robotic textbook sentences.", type: "A" },
            { text: "Traveling abroad costs thousands of dollars in airplane tickets, making it impossible for poor students.", type: "B" },
            { text: "A local classroom provides a safe, quiet environment where a teacher can slowly explain complex grammar rules.", type: "B" },
            { text: "TRAP: Translation software on a mobile phone makes it very easy to read a foreign menu.", type: "Trap" },
            { text: "TRAP: Tourism is a massive global industry that provides jobs for millions of hotel workers.", type: "Trap" }
        ]
    },
    {
        prompt: "In many cities, shops and supermarkets are now open 24 hours a day. Is this a positive or negative development?",
        bucketA_label: "Positive Development",
        bucketB_label: "Negative Development",
        arguments: [
            { text: "It is incredibly convenient for hospital nurses and police officers who finish their work shifts at midnight.", type: "A" },
            { text: "Keeping the store open all night forces the company to hire more staff, which creates excellent local jobs.", type: "A" },
            { text: "Working in a bright shop at three in the morning completely destroys the human body's natural sleep cycle.", type: "B" },
            { text: "Leaving massive electric lights and heaters running all night is a terrible waste of environmental energy.", type: "B" },
            { text: "TRAP: Buying items online is often much cheaper because the website has no physical building.", type: "Trap" },
            { text: "TRAP: Eating fast food late at night is the leading cause of massive weight gain.", type: "Trap" }
        ]
    },
    {
        prompt: "Many young people are forced to do unpaid internships (working for free) to get experience before they can find a real job. Is this a positive or negative development?",
        bucketA_label: "Positive (Good Experience)",
        bucketB_label: "Negative (Unfair Exploitation)",
        arguments: [
            { text: "It gives university graduates the chance to learn vital, practical office skills that textbooks do not teach.", type: "A" },
            { text: "If the young person works incredibly hard for free, the boss will usually offer them a permanent contract.", type: "A" },
            { text: "It is deeply unfair because only rich kids can afford to live in a city without earning a daily salary.", type: "B" },
            { text: "Greedy companies use desperate students as free slaves to do boring work, taking jobs away from paid adults.", type: "B" },
            { text: "TRAP: Studying at a prestigious university in America costs hundreds of thousands of dollars.", type: "Trap" },
            { text: "TRAP: Working from a laptop in a coffee shop allows people to wear casual, comfortable clothes.", type: "Trap" }
        ]
    }
];