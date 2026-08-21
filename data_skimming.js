const skimmingData = [
    // ==========================================
    // 1. DATA & NUMBER SCANNING (10 Tasks - Find the shape)
    // ==========================================
    {
        prompt: "Find the exact year the initial environmental legislation was passed.",
        target: "1994",
        text: "The industrial revolution brought unprecedented economic growth, but it also introduced severe ecological consequences. Urban smog became a daily reality for millions of citizens, leading to chronic respiratory issues. In response to mounting public pressure, the government finally intervened. Although early drafts of the bill were heavily contested by factory owners, the sweeping environmental legislation was officially passed in 1994, fundamentally changing manufacturing protocols."
    },
    {
        prompt: "Find the percentage of modern consumers who prioritize sustainable packaging.",
        target: "68%",
        text: "Modern retail has undergone a massive paradigm shift in the last decade. Shoppers are no longer driven solely by price and convenience. Recent market analysis reveals that 68% of modern consumers actively look for sustainable, biodegradable packaging when purchasing household goods. This trend has forced major corporations to completely rethink their supply chains and invest heavily in eco-friendly alternatives to single-use plastics."
    },
    {
        prompt: "Find the total distance of the annual butterfly migration.",
        target: "3,000",
        text: "Every spring, the majestic monarch butterflies undertake an incredible journey across the continent. Biologists have tracked their flight patterns using lightweight sensors attached to their wings. They discovered that the total distance of this annual migration is over 3,000 miles, ending in the warm, densely packed pine forests of central Mexico where they spend the winter."
    },
    {
        prompt: "Find the exact weight of the newly launched satellite.",
        target: "450kg",
        text: "The space agency recently deployed a new weather monitoring device into low Earth orbit. Designed to track severe oceanic storms, the newly launched satellite represents a major technological leap. Despite its highly advanced sensory capabilities and robust solar panels, it is remarkably lightweight, with an exact weight of only 450kg upon liftoff."
    },
    {
        prompt: "Find the number of participants in the medical trial.",
        target: "12,000",
        text: "Testing a new vaccine requires extensive clinical trials to ensure absolute public safety. The pharmaceutical company spent three years gathering a diverse group of volunteers across multiple continents. By the final phase, the number of participants had reached exactly 12,000, making it the largest and most comprehensive medical trial in the organization's history."
    },
    {
        prompt: "Find the year the royal tomb was originally discovered.",
        target: "1922",
        text: "The Valley of the Kings holds some of the most spectacular archaeological wonders of the ancient world. While many resting places were violently robbed in antiquity, the undisturbed tomb of King Tutankhamun remained hidden beneath the desert sand for centuries. It was finally uncovered in 1922, revealing a breathtaking collection of golden artifacts and perfectly preserved chariots."
    },

    // ==========================================
    // 2. PROPER NOUN SCANNING (10 Tasks - Find the Capitals)
    // ==========================================
    {
        prompt: "Find the name of the Swedish botanist who developed this system.",
        target: "Linnaeus",
        text: "The classification of plant and animal species was incredibly chaotic during the 17th century. Different countries used entirely different naming conventions, making international scientific collaboration almost impossible. This confusion was finally resolved by Carl Linnaeus, a brilliant botanist who introduced the binomial nomenclature system. By giving every species a two-part Latin name, he created a universal language."
    },
    {
        prompt: "Find the name of the island where the unique bird species was discovered.",
        target: "Madagascar",
        text: "Evolutionary biology relies heavily on studying isolated ecosystems. When animals are cut off from mainland predators, they often develop highly unusual physical traits. A perfect example of this phenomenon was documented by a team of researchers exploring Madagascar in the early 20th century. They discovered a species of flightless bird that had evolved an elongated beak."
    },
    {
        prompt: "Find the name of the corporation responsible for the data leak.",
        target: "OmniTech",
        text: "Data privacy has become the most pressing civil rights issue of the digital age. Millions of users blindly accept terms and conditions without realizing how their personal information is harvested and monetized. Public outrage reached a boiling point last year when OmniTech suffered a catastrophic security breach, exposing the private emails and financial records of over fifty million users."
    },
    {
        prompt: "Find the name of the river valley where the early civilization flourished.",
        target: "Mekong",
        text: "The development of early agricultural societies relied heavily on proximity to reliable water sources. In Southeast Asia, ancient farming communities thrived in the incredibly fertile Mekong river valley. The predictable annual flooding provided nutrient-rich soil, allowing these early civilizations to harvest rice multiple times a year and support rapidly expanding populations."
    },
    {
        prompt: "Find the European city where the historic humanitarian treaty was signed.",
        target: "Geneva",
        text: "Following the devastating global conflicts of the early 20th century, international leaders recognized the urgent need for a unified diplomatic framework. Delegates from across the world gathered in the neutral city of Geneva to draft a historic treaty. This massive document finally established formal humanitarian rules for the ethical treatment of prisoners of war."
    },
    {
        prompt: "Find the name of the space telescope that captured the deep-field images.",
        target: "Hubble",
        text: "Our understanding of the universe's sheer scale was fundamentally altered in the 1990s. Astronomers pointed a powerful orbital lens at a seemingly empty patch of dark space for several consecutive days. The resulting deep-field images captured by Hubble revealed thousands of entirely new galaxies, proving that the universe was infinitely larger than previously calculated."
    },
    {
        prompt: "Find the surname of the famous architect who designed the twisted museum.",
        target: "Gehry",
        text: "Modern architecture frequently pushes the boundaries of structural engineering and visual aesthetics. The famous art museum in Spain is widely considered a masterpiece of contemporary design. Designed by Frank Gehry, the building features a highly unusual exterior composed of twisting titanium panels that brilliantly reflect the sunlight and completely defy traditional geometric shapes."
    },
    {
        prompt: "Find the surname of the CEO who unexpectedly stepped down.",
        target: "Torres",
        text: "The technology sector was heavily shaken by sudden corporate restructuring last week. Following a prolonged period of disappointing financial quarters and fierce internal disagreements regarding artificial intelligence, Elena Torres unexpectedly stepped down from her position as chief executive. The board of directors is currently scrambling to find a suitable replacement to stabilize the company's plummeting stock value."
    },
    {
        prompt: "Find the name of the mountain range where the rare species is found.",
        target: "Andes",
        text: "Altitude heavily dictates the types of flora and fauna that can survive in extreme environments. High above the tree line, a incredibly rare species of short-haired fox manages to thrive despite the freezing temperatures. Found exclusively in the rugged Andes mountain range, this resilient predator has developed uniquely thick footpads to walk silently across jagged, icy rocks."
    },
    {
        prompt: "Find the name of the ancient empire that built the massive aqueducts.",
        target: "Byzantine",
        text: "Mastering the flow of fresh water was the absolute key to sustaining massive ancient populations. Long before modern plumbing, brilliant classical engineers constructed sprawling networks of stone channels to transport water across vast valleys. The spectacular aqueducts built by the Byzantine empire stand today as a testament to their unrivaled mastery of urban hydrology and civic planning."
    },

    // ==========================================
    // 3. PIVOT & CONTRAST SCANNING (10 Tasks - Find the Trap)
    // ==========================================
    {
        prompt: "Find the transition word that signals a shift from a positive result to a negative reality.",
        target: "nevertheless",
        text: "The new agricultural policies initially brought a massive surge in crop yields, which successfully stabilized the local economy. Farmers reported record-breaking profits during the first three harvests, leading to widespread celebration. Nevertheless, the heavy reliance on chemical fertilizers slowly poisoned the groundwater, creating an absolute ecological crisis for the following generation."
    },
    {
        prompt: "Find the transition word that introduces a completely opposite argument.",
        target: "conversely",
        text: "Many sociologists argue that the rapid rise of remote work has deeply improved employee mental health by eliminating the daily commute. Workers save money and enjoy a vastly superior work-life balance. Conversely, strict corporate managers insist that working from home entirely destroys team cohesion and severely limits spontaneous workplace creativity."
    },
    {
        prompt: "Find the transition word used to suggest a different, secondary option.",
        target: "alternatively",
        text: "To combat severe urban congestion, the local council has proposed introducing a heavy toll for any cars entering the central business district. This would immediately force citizens to utilize the city's bus network. Alternatively, the government could spend those funds constructing dedicated underground cycle paths, making non-motorized transport highly appealing and remarkably safe."
    },
    {
        prompt: "Find the transition word that breaks the expected outcome.",
        target: "however",
        text: "The startup company launched their new application with a massive, multi-million dollar marketing campaign. They secured endorsements from high-profile celebrities and dominated social media algorithms for a solid month. However, the app suffered from terrible technical bugs upon release, causing millions of frustrated users to delete it within the very first week."
    },
    {
        prompt: "Find the transition word that shows an action occurred despite the negative facts.",
        target: "nonetheless",
        text: "The expedition team was warned repeatedly about the incredibly hostile weather conditions approaching the summit. Their supplies were dwindling, and two members were already suffering from severe frostbite. Nonetheless, the determined team pushed forward through the blinding blizzard, ultimately reaching the highest peak just before the sun completely set."
    },
    {
        prompt: "Find the transition word used to directly compare two totally different things.",
        target: "whereas",
        text: "Understanding dietary habits requires analyzing both cultural history and geography. In heavily landlocked, mountainous regions, traditional meals primarily consist of preserved meats and dense root vegetables out of sheer necessity. Whereas, coastal communities have historically enjoyed incredibly varied diets rich in fresh marine fish, seaweed, and light seasonal fruits."
    },
    {
        prompt: "Find the small transition word that acts like 'but' to contradict the previous point.",
        target: "yet",
        text: "Artificial intelligence has achieved remarkable milestones in data processing and mathematical calculation. The modern algorithms can sift through millions of legal documents in absolute seconds, outperforming any human lawyer. Yet, these highly advanced systems remain entirely incapable of experiencing genuine human empathy or understanding deeply nuanced emotional context during a conversation."
    },
    {
        prompt: "Find the transition word that introduces a concession or a 'despite this' statement.",
        target: "although",
        text: "The expansion of the international airport was deemed absolutely vital for the region's economic future. The mayor argued it would bring thousands of lucrative tourism jobs to the struggling town. Although the financial promises were highly attractive, the local residents vehemently protested the expansion, fearing catastrophic noise pollution and plummeting residential property values."
    },
    {
        prompt: "Find the transition word that shows one action replacing another.",
        target: "instead",
        text: "Traditional academic grading systems heavily prioritize stressful, written examinations at the end of the semester. Students are forced to frantically memorize massive amounts of data just to pass. Progressive universities are now completely abandoning this outdated format. Instead, they are evaluating students based on continuous practical projects and collaborative group presentations throughout the entire year."
    },
    {
        prompt: "Find the transition word indicating an action continues no matter what the circumstances are.",
        target: "regardless",
        text: "The controversial tax reform bill faced massive public backlash and severe criticism from independent economists. Protesters marched through the capital for three consecutive weeks, demanding the immediate resignation of the prime minister. Regardless of the overwhelming public anger, the ruling political party forcefully pushed the legislation through parliament late on a Friday evening."
    },

    // ==========================================
    // 4. COLLOCATION SCANNING (10 Tasks - Summary Completion Prep)
    // ==========================================
    {
        prompt: "Find the specific adjective used in the text to describe the city's 'infrastructure'.",
        target: "crumbling",
        text: "The city council currently faces an impossible budget crisis. While wealthy citizens demand the construction of new public parks and modern sports facilities, the existing utilities are in a state of absolute disrepair. The mayor has firmly stated that the city must prioritize fixing its crumbling infrastructure, such as broken water pipes and collapsed bridges, before spending taxpayer money on luxury projects."
    },
    {
        prompt: "Find the exact verb that explains what the chlorine does to the 'bacteria'.",
        target: "neutralizes",
        text: "To ensure absolute public safety, the municipal water supply undergoes a rigorous and highly monitored purification process. Before reaching residential homes, the raw water is pumped through massive carbon filters to remove physical debris. Finally, a highly specific dose of chlorine is added, which effectively neutralizes any remaining harmful bacteria without endangering human health."
    },
    {
        prompt: "Find the specific noun that 'this vital resource' refers to.",
        target: "groundwater",
        text: "The rapid expansion of vast, water-intensive agricultural mega-farms in the desert requires heavily drilling deep into ancient subterranean aquifers. As massive industrial pumps extract millions of gallons daily, the natural underground reservoirs are failing to replenish. The rapid depletion of this vital groundwater threatens to completely collapse the regional farming economy within a decade."
    },
    {
        prompt: "Find the exact adjective used to describe the modern consumer 'demand'.",
        target: "insatiable",
        text: "The fast fashion industry is responsible for generating mountains of toxic textile waste every single year. Brands constantly release new clothing lines every week to heavily encourage impulsive purchasing. This highly aggressive marketing creates an insatiable demand among young shoppers, who feel intense social pressure to constantly update their wardrobes with cheap, disposable garments."
    },
    {
        prompt: "Find the verb that explains what the industrial mining does to natural 'resources'.",
        target: "depletes",
        text: "The rapid expansion of the electric vehicle market has created an enormous global scramble for rare earth metals. Lithium and cobalt are absolutely critical for manufacturing modern car batteries. However, extracting these materials requires highly aggressive industrial mining, which rapidly depletes finite natural resources and leaves massive, toxic craters in the surrounding ecosystem."
    },
    {
        prompt: "Find the adjective describing the 'impact' of the newly discovered invention.",
        target: "profound",
        text: "When Alexander Fleming accidentally discovered penicillin in his unwashed laboratory dishes, he did not immediately realize the historical magnitude of his mistake. This simple mold produced a natural substance that effortlessly killed deadly infectious bacteria. This singular medical breakthrough had a profound impact on global human survival, ultimately saving hundreds of millions of lives."
    },
    {
        prompt: "Find the verb detailing what the strict new law does to corporate 'innovation'.",
        target: "stifles",
        text: "Regulating the artificial intelligence sector is a highly delicate balancing act for modern governments. If lawmakers implement virtually no rules, rogue companies might develop highly dangerous, biased algorithms. On the other hand, if the government introduces overly aggressive legal restrictions, it completely stifles innovation and forces brilliant domestic engineers to relocate their startups to other countries."
    },
    {
        prompt: "Find the adjective used to describe the massive cultural 'shift'.",
        target: "paradigm",
        text: "The transition from traditional physical media to digital streaming services did not happen overnight. It was a gradual evolution driven by increasing internet speeds and smartphone accessibility. However, this technological leap represented a total paradigm shift in how humanity consumes art, completely destroying the global profitability of traditional video rental stores within a single decade."
    },
    {
        prompt: "Find the verb explaining what the medication does to muscular 'tension'.",
        target: "alleviates",
        text: "Chronic lower back pain is one of the most common medical complaints among modern office workers. Sitting stationary in poorly designed chairs for eight hours heavily strains the spinal column. While strong prescription medication temporarily alleviates the deep muscular tension, it does absolutely nothing to fix the underlying posture issues causing the actual physical damage."
    },
    {
        prompt: "Find the adjective describing the ecological 'consequences' of the disaster.",
        target: "irreversible",
        text: "When the massive offshore oil rig suffered a catastrophic structural failure, millions of gallons of crude oil violently erupted into the ocean. Volunteer crews worked tirelessly for months trying to clean the blackened beaches and rescue suffocating seabirds. Sadly, marine biologists confirmed that the toxic spill caused irreversible consequences to the delicate deep-water coral reefs."
    },
    {
        prompt: "Find the verb detailing what the empirical data does to the scientist's 'theory'.",
        target: "validates",
        text: "For decades, theoretical physicists heavily debated the potential existence of invisible gravitational waves rippling through space. It remained a purely mathematical concept until highly sensitive orbital lasers finally detected a microscopic ripple caused by colliding black holes. This stunning physical evidence completely validates Einstein's original theory, entirely reshaping our modern understanding of classical physics."
    },

    // ==========================================
    // 5. REFERENCE SCANNING (20 Tasks - The "This/These" Trap)
    // ==========================================
    {
        prompt: "Find the specific noun that the phrase 'this ambitious project' refers to.",
        target: "dam",
        text: "The government recently announced plans to construct a massive hydroelectric dam across the primary river. Although it promised an era of clean, sustainable energy, local environmentalists protested almost immediately. They argued that this ambitious project would inevitably flood thousands of acres of ancient forest and permanently destroy the habitats of rare wildlife."
    },
    {
        prompt: "Find the specific noun that 'these severe symptoms' refers to.",
        target: "migraines",
        text: "Prolonged exposure to the blue light emitted by digital screens severely disrupts the brain's natural sleep cycles. Patients who work long office hours frequently report experiencing intense migraines and chronic dry eye. If these severe symptoms are repeatedly ignored, doctors warn that they can lead to long-term visual impairment and psychological exhaustion."
    },
    {
        prompt: "Find the specific noun that 'this ancient practice' refers to.",
        target: "meditation",
        text: "Modern psychiatrists are increasingly incorporating traditional mindfulness techniques into cognitive behavioral therapy. Daily meditation has been clinically proven to lower blood pressure and significantly reduce baseline anxiety levels. Remarkably, this ancient practice physically alters the neural pathways of the human brain, allowing patients to process highly stressful emotional situations with absolute calm."
    },
    {
        prompt: "Find the specific noun that 'these synthetic materials' refers to.",
        target: "plastics",
        text: "The invention of lightweight, highly durable packaging revolutionized the global food transport industry in the mid-twentieth century. However, because highly versatile plastics are completely non-biodegradable, they accumulate indefinitely in the natural environment. Today, microscopic fragments of these synthetic materials have been detected in the deepest ocean trenches and even within human bloodstreams."
    },
    {
        prompt: "Find the specific noun that 'this radical approach' refers to.",
        target: "taxation",
        text: "To combat the spiraling public health crisis of childhood obesity, several progressive nations have introduced a strict financial penalty on heavily processed, sugary foods. The revenue generated by this aggressive taxation is then utilized to heavily subsidize fresh fruits and vegetables. Public health experts argue that this radical approach is the only mathematically viable solution."
    },
    {
        prompt: "Find the specific noun that 'these nocturnal creatures' refers to.",
        target: "bats",
        text: "Despite their terrifying reputation in popular folklore, highly misunderstood fruit bats play an absolutely vital role in maintaining tropical ecosystems. They act as the primary pollinator for dozens of rare jungle plants. Furthermore, these nocturnal creatures consume millions of crop-destroying mosquitoes every single night, saving local farmers thousands of dollars in chemical pesticides."
    },
    {
        prompt: "Find the specific noun that 'these fragile ecosystems' refers to.",
        target: "reefs",
        text: "Rising oceanic temperatures are triggering a devastating biological phenomenon known as coral bleaching. When the surrounding water becomes too warm, the highly stressed coral violently expels the symbiotic algae living in its tissues, turning completely white. If temperatures do not drop quickly, these fragile coral reefs starve to death, destroying the habitat of thousands of fish."
    },
    {
        prompt: "Find the specific noun that 'this controversial policy' refers to.",
        target: "conscription",
        text: "Facing a severe decline in voluntary military recruitment, the struggling government unexpectedly reintroduced mandatory conscription for all young adults. Citizens over the age of eighteen were suddenly legally required to serve two years in the armed forces. Unsurprisingly, this controversial policy triggered massive student protests and fierce debates regarding fundamental human rights."
    },
    {
        prompt: "Find the specific noun that 'these invisible forces' refers to.",
        target: "currents",
        text: "The global climate is heavily regulated by massive, slow-moving underwater ocean currents that transport warm tropical water toward the freezing polar regions. If melting glacial ice disrupts the delicate salt balance of the ocean, the circulation will completely halt. The sudden collapse of these invisible forces would violently plunge northern Europe into a deep freeze."
    },
    {
        prompt: "Find the specific noun that 'this fundamental right' refers to.",
        target: "privacy",
        text: "In the modern digital landscape, aggressive tech corporations endlessly track user behavior to serve highly targeted advertisements. Many legal scholars argue that total digital privacy must be legally protected under the international constitution. Stripping citizens of this fundamental right opens the door to terrifying corporate manipulation and unprecedented government surveillance."
    },
    {
        prompt: "Find the specific noun that 'these toxic emissions' refers to.",
        target: "fumes",
        text: "The heavy reliance on diesel-powered delivery trucks heavily pollutes the dense air of the central business district. Pedestrians and cyclists are constantly subjected to inhaling thick, black exhaust fumes while navigating the busy city streets. Prolonged daily exposure to these toxic emissions is directly linked to a sharp regional increase in chronic childhood asthma."
    },
    {
        prompt: "Find the specific noun that 'this devastating event' refers to.",
        target: "drought",
        text: "The agricultural sector in the southern provinces completely collapsed after three consecutive years without a single drop of rain. The unprecedented drought caused millions of crops to wither and deeply cracked the dry, barren earth. The massive financial fallout from this devastating event forced thousands of desperate rural families to permanently migrate to the capital."
    },
    {
        prompt: "Find the specific noun that 'these vulnerable communities' refers to.",
        target: "villages",
        text: "As global sea levels continue to subtly rise, low-lying coastal villages are facing an imminent existential threat. High tides now regularly flood traditional residential streets, contaminating the local fresh drinking water with salt. Relocating these vulnerable communities inland is highly expensive and permanently destroys their traditional fishing-based cultural heritage."
    },
    {
        prompt: "Find the specific noun that 'this innovative technology' refers to.",
        target: "blockchain",
        text: "The financial sector is rapidly being transformed by the integration of highly secure, decentralized digital ledgers. By using complex mathematical encryption, the blockchain allows users to transfer massive amounts of money internationally without ever relying on a traditional bank. Consequently, this innovative technology threatens to completely disrupt the monopoly of legacy financial institutions."
    },
    {
        prompt: "Find the specific noun that 'this historical artifact' refers to.",
        target: "manuscript",
        text: "Deep within the heavily guarded archives of the national library, an incredibly rare, hand-written medieval manuscript was finally uncovered by a visiting scholar. Written entirely in an extinct dialect, the delicate parchment details the lost medicinal recipes of a forgotten empire. Translating this historical artifact could fundamentally rewrite our understanding of ancient medical science."
    },
    {
        prompt: "Find the specific noun that 'these essential nutrients' refers to.",
        target: "vitamins",
        text: "A heavily processed modern diet fundamentally lacks the highly complex biological compounds required for optimal cellular function. Fresh leafy greens and bright citrus fruits are packed densely with natural vitamins and vital organic antioxidants. Failing to regularly consume these essential nutrients severely compromises the human immune system, inviting chronic fatigue and illness."
    },
    {
        prompt: "Find the specific noun that 'this alarming trend' refers to.",
        target: "obesity",
        text: "The rapid global expansion of incredibly cheap, ultra-processed fast food has heavily impacted public health statistics. Medical professionals report that severe childhood obesity has more than tripled in developing nations over the last two decades. Reversing this alarming trend requires highly aggressive governmental intervention and the complete banning of junk food advertisements targeting minors."
    },
    {
        prompt: "Find the specific noun that 'these aggressive predators' refers to.",
        target: "wolves",
        text: "To restore the deeply unbalanced ecological hierarchy of the national park, wildlife biologists highly controversially reintroduced a small pack of native wolves. Without them, the local deer population had exploded, overgrazing the forest and causing severe soil erosion. The successful reintroduction of these aggressive predators instantly stabilized the numbers and saved the local vegetation."
    },

    // ==========================================
    // 6. SYNONYM SCANNING (20 Tasks - Vocabulary Matching)
    // ==========================================
    {
        prompt: "Find the synonym for 'dangerous' or 'risky'.",
        target: "hazardous",
        text: "The disposal of electronic waste is a growing global crisis. When old computers and smartphones are thrown into standard landfills, the heavy metals inside them begin to degrade. Lead, mercury, and cadmium slowly leak into the surrounding soil. These incredibly hazardous materials eventually seep into underground water reservoirs, poisoning the local drinking supply."
    },
    {
        prompt: "Find the synonym for 'worldwide' or 'universal'.",
        target: "global",
        text: "The transition to renewable energy cannot be achieved by a single nation working alone. Air pollution and greenhouse gases do not respect international borders. Therefore, developing a sustainable economic framework requires massive, unprecedented global cooperation. Wealthy nations must be willing to share advanced solar and wind technology with developing countries."
    },
    {
        prompt: "Find the synonym for 'tiredness' or 'exhaustion'.",
        target: "fatigue",
        text: "The modern corporate work environment demands constant connectivity. Employees are expected to answer emails late at night and during their weekends, blurring the line between professional and personal time. This relentless schedule inevitably leads to severe mental fatigue, which actually decreases overall productivity and destroys creative problem-solving."
    },
    {
        prompt: "Find the synonym for 'farming' or 'crop-growing'.",
        target: "agriculture",
        text: "Water scarcity is arguably the greatest threat facing humanity in the coming decades. While residential water use is a concern, the vast majority of fresh water is consumed by commercial agriculture. Traditional irrigation methods are highly inefficient, with millions of gallons lost to evaporation under the hot sun."
    },
    {
        prompt: "Find the synonym for 'necessary' or 'vital'.",
        target: "essential",
        text: "When attempting to learn a complex second language as an adult, passive listening is simply not enough. You cannot become fluent solely by watching foreign movies with subtitles. It is absolutely essential to force yourself into uncomfortable, live speaking situations where your brain must actively build sentences under pressure."
    },
    {
        prompt: "Find the synonym for 'plentiful' or 'copious'.",
        target: "abundant",
        text: "The deep-sea hydrothermal vents present one of the most hostile environments on the entire planet. Surrounded by boiling water and absolute darkness, scientists expected to find a completely dead zone. Instead, they discovered an incredibly abundant ecosystem of highly strange crabs and giant tube worms thriving on the toxic chemicals."
    },
    {
        prompt: "Find the synonym for 'old-fashioned' or 'outdated'.",
        target: "obsolete",
        text: "The rapid integration of sophisticated artificial intelligence into the creative industry is fundamentally reshaping digital art. Graphic designers who rely purely on manual drawing techniques are finding their core skills increasingly obsolete. To remain relevant in the modern job market, artists must rapidly learn to command and manipulate these complex AI generation tools."
    },
    {
        prompt: "Find the synonym for 'complex' or 'complicated'.",
        target: "intricate",
        text: "The successful construction of the ancient mechanical clock completely baffled modern archaeologists. Found deeply buried inside a sunken Roman ship, the heavy bronze device contained over thirty perfectly interlocked gears. Reconstructing this highly intricate mechanism proved that classical engineers possessed a mathematical genius far beyond what history textbooks previously claimed."
    },
    {
        prompt: "Find the synonym for 'enough' or 'adequate'.",
        target: "sufficient",
        text: "The defense attorney presented a highly emotional argument regarding the young defendant's difficult childhood. While the jury was visibly moved by the tragic story, the judge reminded them of their strict legal duty. Sympathy alone is not sufficient to acquit a suspect; the verdict must be based entirely on the hard physical evidence."
    },
    {
        prompt: "Find the synonym for 'fake' or 'artificial'.",
        target: "synthetic",
        text: "The demand for cheap, highly fashionable clothing relies heavily on the massive production of inexpensive polyester fabrics. Because these incredibly cheap garments are woven from heavily processed synthetic fibers, they shed millions of toxic micro-plastics directly into the municipal water supply every single time they are washed in a standard machine."
    },
    {
        prompt: "Find the synonym for 'important' or 'critical'.",
        target: "crucial",
        text: "The early development of strong social skills heavily dictates a child's future academic success. During kindergarten, toddlers learn to share physical resources and quietly resolve minor interpersonal conflicts without adult intervention. This early unstructured playtime is absolutely crucial for developing the foundational emotional intelligence required for adult professional relationships."
    },
    {
        prompt: "Find the synonym for 'native' or 'original'.",
        target: "indigenous",
        text: "When aggressive European settlers rapidly colonized the isolated island, they intentionally brought several breeds of domestic cats with them. Unfortunately, these highly efficient foreign predators escaped into the wild and began hunting the small, flightless local birds. Within a single decade, half of the deeply unique indigenous bird species were hunted to total extinction."
    },
    {
        prompt: "Find the synonym for 'harmful' or 'damaging'.",
        target: "detrimental",
        text: "Many ambitious students heavily rely on highly caffeinated energy drinks to violently force themselves to stay awake during stressful exam periods. While this temporarily boosts their late-night focus, sacrificing deep REM sleep is incredibly detrimental to long-term memory consolidation, ultimately causing them to forget the very facts they stayed up to study."
    },
    {
        prompt: "Find the synonym for 'widespread' or 'everywhere'.",
        target: "ubiquitous",
        text: "The invention of the incredibly cheap, highly reliable microchip fundamentally altered modern human behavior. Originally reserved for massive military supercomputers, these tiny electronic brains have deeply infiltrated almost every aspect of daily civilian life. Today, highly advanced computing power is completely ubiquitous, quietly operating inside our wristwatches, refrigerators, and personal vehicles."
    },
    {
        prompt: "Find the synonym for 'unpredictable' or 'inconsistent'.",
        target: "erratic",
        text: "The financial stock market operates on a deeply complex web of human emotion and cold algorithmic trading. When unexpected political scandals suddenly break on social media, the resulting panic causes highly erratic fluctuations in massive corporate stock values, wiping out billions of dollars of theoretical global wealth in mere minutes."
    },
    {
        prompt: "Find the synonym for 'speed up' or 'hasten'.",
        target: "accelerate",
        text: "The natural breakdown of thick plastic waste normally takes hundreds of years in a dark underground landfill. However, progressive scientists recently engineered a highly specialized biological enzyme that essentially eats the dense polymer chains. When sprayed on massive garbage piles, this brilliant chemical dramatically acts to accelerate the degradation process to a mere few weeks."
    },
    {
        prompt: "Find the synonym for 'decrease' or 'reduce'.",
        target: "diminish",
        text: "The intense daily physical demands of professional gymnastics heavily tax the human skeletal system. Even with rigorous daily stretching and highly advanced physical therapy, a professional athlete's incredible muscular flexibility will inevitably begin to heavily diminish by their mid-twenties, forcing them into highly premature, forced retirement."
    },
    {
        prompt: "Find the synonym for 'clear' or 'obvious'.",
        target: "apparent",
        text: "The initial marketing data from the highly expensive advertising campaign was intensely confusing to the corporate board. They spent millions of dollars promoting the new luxury product, yet regional sales remained completely stagnant. It quickly became highly apparent that the complex commercials entirely failed to clearly explain what the complex product actually did."
    },
    {
        prompt: "Find the synonym for 'strong' or 'sturdy'.",
        target: "robust",
        text: "Designing infrastructure for the active earthquake zone requires heavily advanced architectural mathematics. Buildings cannot be rigidly stiff, or they will violently snap during the heavy tremors. Instead, engineers must construct highly robust internal steel skeletons that are deeply designed to quietly sway and absorb the massive kinetic energy of the moving earth."
    },
    {
        prompt: "Find the synonym for 'strict' or 'rigid'.",
        target: "stringent",
        text: "To heavily combat the rising epidemic of international money laundering, the global banking commission introduced new financial legislation. Wealthy clients are no longer permitted to silently open anonymous offshore accounts. Banks must now adhere to highly stringent identity verification protocols, ensuring that every massive financial transfer is deeply traced and legally documented."
    },
    // ==========================================
    // FOUNDATIONS: DATA & NUMBER SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the recommended number of hours of sleep per night.",
        target: "8",
        text: "Doctors usually tell people that sleep is very important. Most adults need about 8 hours of sleep every single night to stay healthy. If you do not sleep enough, your brain will feel very tired the next day."
    },
    {
        prompt: "Find the percentage of plastic that is actually put into the correct bins.",
        target: "45%",
        text: "Recycling is a simple way to protect the environment. However, many people still throw their rubbish into the wrong bins. In fact, only about 45% of the plastic we use is recycled properly by ordinary citizens."
    },
    {
        prompt: "Find the average number of minutes people spend traveling to work.",
        target: "40",
        text: "Traffic in the city center is getting worse every year. Because the roads are so busy, the average worker now spends 40 minutes sitting on a bus or train just to get to their office in the morning."
    },
    {
        prompt: "Find the year when the worst forest fires happened.",
        target: "2019",
        text: "Climate change is making the weather much hotter and drier. The summer of 2019 was unusually hot, which caused the worst forest fires in the country's history. Thousands of trees were completely burned down in just one week."
    },
    {
        prompt: "Find the number of words needed for a basic conversation.",
        target: "600",
        text: "Learning a new language can seem like a very scary task. But language teachers say you only need to know about 600 common words to have a basic conversation with a native speaker while traveling abroad."
    },

    // ==========================================
    // FOUNDATIONS: PROPER NOUN SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the name of the planet scientists want to visit next.",
        target: "Mars",
        text: "Space exploration has become very popular again. In the near future, the international space agency plans to send a group of brave astronauts to Mars. They hope to discover if water ever existed there."
    },
    {
        prompt: "Find the surname of the person who invented the telephone.",
        target: "Bell",
        text: "Communication changed forever during the industrial revolution. When Alexander Graham Bell finally invented the first working telephone, people could suddenly speak to their friends and family over very long distances."
    },
    {
        prompt: "Find the country where the kangaroo lives naturally.",
        target: "Australia",
        text: "Many unique animals can only be found in one specific place on Earth. For example, wild kangaroos live naturally in Australia and nowhere else. They have very strong legs that allow them to jump incredibly far."
    },
    {
        prompt: "Find the name of the famous art museum in Paris.",
        target: "Louvre",
        text: "Tourism is a huge part of the European economy. Millions of tourists travel to Paris every single year just to visit the Louvre, which is a massive museum that holds many famous historical paintings and statues."
    },
    {
        prompt: "Find the name of the healthy diet from Southern Europe.",
        target: "Mediterranean",
        text: "Eating the right food is the best way to live a long life. Doctors often recommend the Mediterranean diet because it includes lots of healthy olive oil, fresh fish, and green vegetables, instead of heavy red meat."
    },

    // ==========================================
    // FOUNDATIONS: PIVOT & CONTRAST SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the word that introduces a negative point after a positive one.",
        target: "however",
        text: "Electric cars are very quiet and do not pollute the air in cities. They are much better for the environment than gas cars. However, they are still far too expensive for many normal working families to buy."
    },
    {
        prompt: "Find the transition word that means 'even though'.",
        target: "although",
        text: "Fast food restaurants are very popular because they are cheap and convenient for busy people. Although hamburgers and fries taste very good, eating them every day will quickly make a person gain a lot of weight."
    },
    {
        prompt: "Find the word showing that one action is replacing another action.",
        target: "instead",
        text: "Many young people do not watch traditional television programs anymore. Instead, they spend their evenings watching short, funny videos on their smartphones or playing video games with their friends online."
    },
    {
        prompt: "Find the word that shows an action continues despite a problem.",
        target: "nevertheless",
        text: "The local weather forecast predicted heavy rain and strong, dangerous winds for the entire weekend. Nevertheless, the outdoor football match was not canceled, and thousands of dedicated fans still came to watch."
    },
    {
        prompt: "Find the word that introduces a bad alternative result.",
        target: "otherwise",
        text: "University students must make sure they save their written work frequently on the computer. Otherwise, they might lose their entire final essay if the electricity suddenly goes out during a bad storm."
    },

    // ==========================================
    // FOUNDATIONS: COLLOCATION SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the adjective used to describe the 'traffic'.",
        target: "heavy",
        text: "Living in the city center is very convenient because you are close to many shops and restaurants. But the heavy traffic makes it very difficult to drive to work in the morning, which makes people feel stressed."
    },
    {
        prompt: "Find the exact adjective used to describe the 'exercise'.",
        target: "regular",
        text: "To lose weight safely, you should eat a lot less sugar. You also need to do regular exercise, such as jogging in the park or swimming in a pool, at least three times a week to keep your heart strong."
    },
    {
        prompt: "Find the adjective used to describe the school 'rules'.",
        target: "strict",
        text: "The headmaster wanted to improve the behavior of the students at the high school. He introduced very strict rules about wearing uniforms properly to make sure all the children looked smart and professional."
    },
    {
        prompt: "Find the verb that explains what the team must do to the 'problem'.",
        target: "solve",
        text: "The computer system suddenly stopped working on Monday morning. The company manager asked his best technology team to solve the problem before the end of the week, so the business would not lose any more money."
    },
    {
        prompt: "Find the exact verb that explains what the chemicals do to the 'damage'.",
        target: "cause",
        text: "Factory owners must be very careful with how they dispose of their waste water. Dangerous industrial chemicals can cause terrible damage to the local river, killing the fish and poisoning the drinking water."
    },

    // ==========================================
    // FOUNDATIONS: REFERENCE SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the specific noun that 'this material' refers to.",
        target: "plastic",
        text: "Modern supermarkets use a lot of plastic to wrap fresh fruit and vegetables to keep them clean. Unfortunately, this material takes hundreds of years to break down in nature, creating a lot of pollution."
    },
    {
        prompt: "Find the specific noun that 'this extra practice' refers to.",
        target: "homework",
        text: "School teachers usually give students a lot of homework at the end of the day. They hope that this extra practice will help the children remember the difficult math and science lessons for their final exams."
    },
    {
        prompt: "Find the specific noun that 'this industry' refers to.",
        target: "tourism",
        text: "Many beautiful small island countries rely completely on tourism to make money. If this industry suddenly stops because of a global crisis, the local people will not have any jobs or income to support their families."
    },
    {
        prompt: "Find the specific noun that 'these animals' refers to.",
        target: "dogs",
        text: "Some people train special guide dogs to help blind people walk safely through busy streets. These animals are incredibly smart and can remember the way home without any help from humans."
    },
    {
        prompt: "Find the specific noun that 'this network' refers to.",
        target: "internet",
        text: "The invention of the internet completely changed the modern world forever. Today, this network allows anyone with a computer to share pictures, watch movies, and send messages instantly to friends overseas."
    },
    {
        prompt: "Find the specific noun that 'this sweet ingredient' refers to.",
        target: "sugar",
        text: "Food companies often add a large amount of sugar to their fruit juices to make them taste better for kids. Sadly, this sweet ingredient is very bad for children's teeth and causes them to gain a lot of weight."
    },
    {
        prompt: "Find the specific noun that 'these vehicles' refers to.",
        target: "cars",
        text: "In the near future, almost everyone will probably drive electric cars instead of traditional gas ones. Because these vehicles use batteries, they will help keep the city air clean and reduce noise pollution."
    },
    {
        prompt: "Find the specific noun that 'this healthy habit' refers to.",
        target: "exercise",
        text: "Medical doctors agree that daily exercise is the absolute best way to avoid heart disease. Furthermore, this healthy habit can make you feel happier, sleep better at night, and feel much less stressed at work."
    },
    {
        prompt: "Find the specific noun that 'these devices' refers to.",
        target: "smartphones",
        text: "Teenagers today seem completely addicted to their mobile smartphones. They constantly use these devices to talk to their friends, play video games, and even do their schoolwork while riding the bus."
    },
    {
        prompt: "Find the specific noun that 'this language' refers to.",
        target: "English",
        text: "Many international businesses now require all their workers to speak English fluently. If you can speak this language well, it is much easier to travel safely and find a high-paying job in another country."
    },

    // ==========================================
    // FOUNDATIONS: SYNONYM SCANNING (Band 6)
    // ==========================================
    {
        prompt: "Find the synonym for 'hard' or 'tough'.",
        target: "difficult",
        text: "Learning to play the piano is very difficult at the beginning. You have to practice every single day to make your fingers move correctly and read the music notes at the same time."
    },
    {
        prompt: "Find the synonym for 'advantages' or 'good points'.",
        target: "benefits",
        text: "Riding a bicycle to work instead of driving has many health benefits. It makes your heart much stronger and helps you lose weight without needing to pay for an expensive gym membership."
    },
    {
        prompt: "Find the synonym for 'important' or 'necessary'.",
        target: "essential",
        text: "Drinking enough fresh water is absolutely essential during the hot summer months. If you do not drink enough water, you will quickly become very tired and could even get sick from the heat."
    },
    {
        prompt: "Find the synonym for 'danger' or 'risk'.",
        target: "threat",
        text: "Air pollution from factories and cars is a major threat to human health in big cities. Breathing dirty air every day can cause bad lung diseases, especially in young children and older people."
    },
    {
        prompt: "Find the synonym for 'make' or 'produce'.",
        target: "generate",
        text: "Wind turbines are very tall machines with large blades. When the wind blows strongly, the blades spin around quickly and generate clean electricity for the nearby towns without creating any smoke."
    },
    {
        prompt: "Find the synonym for 'fast' or 'quick'.",
        target: "rapid",
        text: "The population of the capital city has seen a rapid increase over the last ten years as people move from farms. Because of this fast growth, it is very hard to find a cheap apartment."
    },
    {
        prompt: "Find the synonym for 'big' or 'huge'.",
        target: "massive",
        text: "Building a new international airport requires a massive amount of money and empty land. The government must be absolutely sure that many people will use it before they start the building project."
    },
    {
        prompt: "Find the synonym for 'decrease' or 'go down'.",
        target: "drop",
        text: "During the cold winter months, the temperature can drop below zero degrees very quickly after the sun sets. People must remember to wear thick coats to stay warm when they go outside at night."
    },
    {
        prompt: "Find the synonym for 'common' or 'normal'.",
        target: "typical",
        text: "A typical working day in a Japanese office usually starts at nine o'clock in the morning. However, many dedicated workers do not go home until eight or nine o'clock at night."
    },
    {
        prompt: "Find the synonym for 'help' or 'support'.",
        target: "assist",
        text: "The main job of a hospital nurse is to carefully assist the doctors during medical operations. They also give medicine to the patients and make sure they are comfortable while they recover."
    },
    // ==========================================
    // WILDLIFE PACK: DATA & NUMBER SCANNING
    // ==========================================
    {
        prompt: "Find the maximum weight of an adult male African elephant in kilograms.",
        target: "6,000",
        text: "The African elephant is the largest land animal currently living on Earth. Adult males can reach a towering shoulder height of up to four meters. When fully grown, their total body mass can hit an astonishing 6,000 kilograms. This massive bulk requires them to consume hundreds of pounds of roots, grasses, and fruit every single day just to survive the harsh dry seasons."
    },
    {
        prompt: "Find the top sprinting speed of a cheetah in kilometers per hour.",
        target: "120",
        text: "The cheetah is universally recognized as the fastest land mammal in existence. Its entire anatomy is built for explosive acceleration, featuring a highly flexible spine and non-retractable claws for grip. During a hunt, a healthy adult cheetah can reach a maximum top speed of roughly 120 kilometers per hour, though it can only maintain this intense sprint for about twenty seconds before overheating."
    },
    {
        prompt: "Find the estimated natural lifespan of a wild sea turtle.",
        target: "80",
        text: "Marine biologists have long been fascinated by the incredible longevity of ocean reptiles. Unlike many terrestrial animals that age rapidly, the green sea turtle ages at a remarkably slow biological pace. If they manage to avoid commercial fishing nets and plastic pollution, the estimated lifespan of a healthy sea turtle can easily exceed 80 years in the open ocean."
    },
    {
        prompt: "Find the exact distance the emperor penguins travel in miles.",
        target: "10,000",
        text: "The annual migration patterns of Antarctic seabirds are among the most brutal endurance tests in nature. To find open water during the freezing winter months, emperor penguins must march across vast sheets of solid ice. Scientists using satellite tags discovered that over a single year, a penguin might travel an incredible 10,000 miles to hunt for fish and return to its breeding colony."
    },
    {
        prompt: "Find the estimated number of wild snow leopards remaining.",
        target: "4,000",
        text: "The elusive snow leopard is one of the most difficult big cats to study in the wild. Because they inhabit the incredibly hostile, freezing altitudes of the Central Asian mountains, tracking them relies heavily on motion-sensor cameras. Current conservation data sadly estimates that only about 4,000 of these beautiful predators remain alive, making them highly vulnerable to extinction."
    },

    // ==========================================
    // WILDLIFE PACK: PROPER NOUN SCANNING
    // ==========================================
    {
        prompt: "Find the name of the rainforest where the poison dart frog lives.",
        target: "Amazon",
        text: "The incredibly vibrant poison dart frog is famous for its highly toxic skin. Native exclusively to the dense, deeply humid jungles of the Amazon basin, indigenous hunters historically used the frog's deadly biological secretions to tip their blowdarts. Today, aggressive agricultural deforestation heavily threatens their highly specialized natural habitat."
    },
    {
        prompt: "Find the surname of the famous primatologist who studied chimpanzees.",
        target: "Goodall",
        text: "Our modern understanding of primate intelligence was fundamentally revolutionized in the 1960s. Rather than studying animals in sterile laboratory cages, Jane Goodall famously spent decades living alongside wild chimpanzees in the African jungle. Her groundbreaking research proved that chimpanzees could actively make and use tools, completely shattering the belief that only humans possessed this ability."
    },
    {
        prompt: "Find the name of the isolated islands famous for their giant tortoises.",
        target: "Galapagos",
        text: "Evolutionary biology relies heavily on studying geographically isolated ecosystems. When animals are cut off from mainland predators, they often develop highly unusual physical traits over thousands of years. A perfect example of this phenomenon can be found on the remote Galapagos islands, where massive, ancient tortoises evolved to survive for months without fresh drinking water."
    },
    {
        prompt: "Find the name of the African national park known for the wildebeest migration.",
        target: "Serengeti",
        text: "Every single year, over one million grazing herbivores undertake a highly dangerous, cyclical journey across the African savanna. Driven purely by the seasonal rains, massive herds of wildebeest and zebra travel across the Serengeti national park in search of fresh green grass. This incredible mass movement constantly attracts hundreds of hungry lions and crocodiles."
    },
    {
        prompt: "Find the name of the island inhabited by the world's largest lizard.",
        target: "Komodo",
        text: "Apex predators come in many terrifying biological forms. While mammals dominate most continents, a highly unique reptilian predator rules a tiny, volcanic region of Indonesia. Found entirely on the rugged island of Komodo, this massive, venomous monitor lizard can easily hunt and kill large water buffalo by tracking them for miles using its incredibly sensitive, forked tongue."
    },

    // ==========================================
    // WILDLIFE PACK: PIVOT & CONTRAST SCANNING
    // ==========================================
    {
        prompt: "Find the transition word that contrasts the public fear of sharks with reality.",
        target: "however",
        text: "Hollywood movies heavily portray great white sharks as mindless, aggressive killing machines that actively hunt human swimmers. This sensationalized media causes widespread public panic at coastal beaches during the summer. However, marine statistics clearly prove that humans are far more likely to be struck by lightning than to ever be bitten by a wild shark."
    },
    {
        prompt: "Find the transition word showing what bears do instead of hunting active prey.",
        target: "instead",
        text: "Despite possessing incredibly massive claws and the physical strength to crush a deer, the brown bear is actually a surprisingly lazy hunter. Chasing fast-moving animals wastes far too much valuable cellular energy. Instead, they prefer to quietly forage the forest floor, consuming massive amounts of wild berries, insects, and seasonal nuts to build fat for the winter."
    },
    {
        prompt: "Find the transition word showing the herd survived despite the terrible conditions.",
        target: "nevertheless",
        text: "The sudden arrival of heavy snow deeply buried the valley's vegetation under three feet of solid ice. The local elk population was entirely unable to dig through the frozen crust to reach their normal food supply, leading to rapid starvation. Nevertheless, the majority of the adult herd managed to survive the brutal winter by stripping the bitter bark off the surrounding pine trees."
    },
    {
        prompt: "Find the transition word used to contrast eagles with daytime hunting birds.",
        target: "conversely",
        text: "Hawks and eagles are highly adapted for daytime hunting, utilizing incredibly sharp eyesight to spot tiny mice hidden in the grass from miles up in the sky. Their eyes rely heavily on bright sunlight to process fast movements. Conversely, nocturnal owls have evolved specialized facial discs that perfectly funnel microscopic sounds into their ears, allowing them to hunt in total, pitch-black darkness."
    },
    {
        prompt: "Find the transition word introducing a concession about the lion's laziness.",
        target: "although",
        text: "The male African lion is universally recognized as the undisputed king of the savanna, boasting a terrifying roar and a deeply intimidating physical presence. Although they possess the muscle mass to easily kill large prey, adult males are notoriously inactive. They prefer to sleep in the shade for up to twenty hours a day, leaving the physically exhausting hunting entirely to the faster females."
    },

    // ==========================================
    // WILDLIFE PACK: COLLOCATION SCANNING
    // ==========================================
    {
        prompt: "Find the specific adjective used to describe the polar bear's 'habitat'.",
        target: "shrinking",
        text: "The polar bear is perfectly adapted to survive on floating sheets of oceanic ice. They use these solid platforms to silently ambush seals swimming below the freezing water. Unfortunately, rapid global warming is causing the arctic ice to melt at an unprecedented rate. This shrinking habitat is violently forcing the starving bears to swim dangerously long distances to find solid land."
    },
    {
        prompt: "Find the exact verb that describes how the leopard attacks its 'prey'.",
        target: "ambushes",
        text: "Unlike cheetahs, which rely purely on explosive sprinting speed on open ground, the leopard is a master of absolute stealth. Its heavily spotted coat renders it virtually invisible in the dappled light of the thick jungle canopy. The leopard patiently sits in high branches and silently ambushes its prey from above, killing it instantly before dragging the heavy body back up into the tree."
    },
    {
        prompt: "Find the adjective describing the chameleon's 'camouflage'.",
        target: "perfect",
        text: "To avoid being eaten by highly visual predators like birds and snakes, many small reptiles have evolved specialized skin cells that can physically alter their chemical color. The chameleon can actively match the exact green and brown patterns of the branch it is sitting on. This perfect camouflage allows it to safely hide in plain sight while hunting for passing insects."
    },
    {
        prompt: "Find the exact verb that explains what illegal logging does to 'biodiversity'.",
        target: "threatens",
        text: "The incredibly lush rainforests of Southeast Asia contain the highest concentration of distinct animal species on the entire planet. Sadly, the highly profitable timber industry is aggressively cutting down these ancient trees to manufacture cheap furniture. This relentless, illegal logging deeply threatens the fragile biodiversity of the region, pushing beautiful animals like the orangutan toward imminent extinction."
    },
    {
        prompt: "Find the specific adjective used to describe the coral reef 'ecosystem'.",
        target: "delicate",
        text: "Coral reefs are often called the rainforests of the sea because they support a massive variety of colorful marine life. The coral itself is actually a colony of millions of tiny living animals building a hard calcium shell. Because they are highly sensitive to minor temperature changes and chemical pollution, this delicate ecosystem is incredibly difficult to repair once it becomes damaged."
    },

    // ==========================================
    // WILDLIFE PACK: REFERENCE SCANNING
    // ==========================================
    {
        prompt: "Find the specific noun that 'this massive mammal' refers to.",
        target: "whale",
        text: "The blue whale relies exclusively on eating millions of tiny oceanic krill to sustain its enormous body mass. Despite having absolutely no physical teeth, it brilliantly filters the seawater using thick, bristle-like baleen plates located inside its massive mouth. Due to aggressive historical overhunting in the twentieth century, this massive mammal was almost driven to complete extinction before global bans were strictly enforced."
    },
    {
        prompt: "Find the specific noun that 'these intelligent primates' refers to.",
        target: "orangutans",
        text: "Deep in the heavily forested islands of Borneo, wild orangutans exhibit remarkably advanced cognitive abilities. Researchers have repeatedly observed them breaking branches to measure the depth of rivers before attempting to cross them, and holding large leaves over their heads as temporary umbrellas during heavy rainstorms. Tragically, these intelligent primates are rapidly losing their homes to expanding palm oil plantations."
    },
    {
        prompt: "Find the specific noun that 'this silent hunter' refers to.",
        target: "owl",
        text: "The barn owl possesses highly specialized, soft feathers that completely absorb the aerodynamic noise of its wings flapping in the wind. This incredible evolutionary adaptation allows the bird to fly over open fields without making a single sound. By the time a mouse finally hears this silent hunter approaching from the dark sky above, it is already far too late to escape."
    },
    {
        prompt: "Find the specific noun that 'these venomous reptiles' refers to.",
        target: "rattlesnakes",
        text: "In the incredibly harsh deserts of the American southwest, rattlesnakes rely heavily on highly advanced thermal sensors located near their nostrils. These biological heat-detecting pits allow them to perfectly track the warm bodies of passing rodents, even in absolute darkness. Because they cannot chew their food, these venomous reptiles must swallow their paralyzed prey completely whole."
    },
    {
        prompt: "Find the specific noun that 'this social insect' refers to.",
        target: "bee",
        text: "The survival of global agriculture is deeply dependent on the humble honey bee. As they fly from blossom to blossom gathering sweet nectar, they accidentally transfer pollen grains, allowing human crops to reproduce and grow fruit. Without the tireless daily labor of this social insect, scientists estimate that global food production would rapidly collapse within a matter of years."
    },

    // ==========================================
    // WILDLIFE PACK: SYNONYM SCANNING
    // ==========================================
    {
        prompt: "Find the synonym for 'deadly' or 'fatal'.",
        target: "lethal",
        text: "The inland taipan is widely considered the most dangerous snake in the world. Unlike larger pythons that slowly crush their victims, the taipan relies entirely on chemical warfare. A single bite from this highly aggressive serpent contains enough highly lethal neurotoxin to easily paralyze and kill over one hundred adult humans in less than forty-five minutes."
    },
    {
        prompt: "Find the synonym for 'at risk' or 'in danger'.",
        target: "endangered",
        text: "The illegal poaching of the black rhinoceros is driven entirely by the deeply flawed cultural belief that their horns possess magical medical properties. Because these heavy horns are actually made of basic keratin—the exact same biological material as human fingernails—the medicine is completely useless. Nonetheless, the high black-market price keeps these majestic animals severely endangered."
    },
    {
        prompt: "Find the synonym for 'meat-eater'.",
        target: "carnivore",
        text: "The saltwater crocodile is a terrifyingly patient prehistoric survivor. It can hold its breath underwater for over an hour, silently waiting near the muddy riverbank for a thirsty animal to approach the water. Once in striking range, this massive apex carnivore explodes out of the water, crushing its victim with a bite force stronger than a tyrannosaurus rex."
    },
    {
        prompt: "Find the synonym for 'active at night'.",
        target: "nocturnal",
        text: "To avoid the intensely burning heat of the daytime desert sun, many small mammals have evolved to strictly sleep deep underground during the afternoon. The fennec fox is a perfectly adapted nocturnal predator, emerging from its cool burrow only after the sun sets, utilizing its massive, dish-like ears to listen for insects moving in the cold midnight sand."
    },
    {
        prompt: "Find the specific noun used for a 'group' or 'family' of wolves.",
        target: "pack",
        text: "Wolves are highly successful hunters primarily because they operate with absolute, military-like coordination. A single wolf cannot take down a massive, angry moose alone. Instead, the entire pack works collectively to isolate a weak animal, systematically exhausting the prey through a long, relentless chase before moving in together for the final, coordinated kill."
    }
];