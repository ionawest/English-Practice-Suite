const spellingCSVData = `Category,Sentence
IDP Tricky Words,Regular exercise is highly [beneficial] for cardiovascular health.
IDP Tricky Words,The professor is a highly [influential] figure in the field of neuroscience.
IDP Tricky Words,The evidence presented in court was entirely [circumstantial].
IDP Tricky Words,The patient was [referred] to a specialist for further treatment.
IDP Tricky Words,We are at the [beginning] of a new era in digital technology.
IDP Tricky Words,These new archaeological discoveries [excite] researchers around the world.
IDP Tricky Words,We must take action to protect the natural [environment] from pollution.
IDP Tricky Words,It is a great [privilege] to study at such a prestigious university.
IDP Tricky Words,Modern consumers are becoming much more environmentally [conscious].
IDP Tricky Words,Her prolonged [absence] from class severely affected her final grade.
IDP Tricky Words,You must study consistently to [achieve] a high score on the exam.
IDP Tricky Words,My [colleague] will cover my shift while I am on vacation.
IDP Tricky Words,The damage to the laboratory equipment was a [deliberate] act of vandalism.
IDP Tricky Words,English is the primary [language] used in international business.
IDP Tricky Words,The main university [library] is open 24 hours during exam week.
IDP Tricky Words,We booked a table at the new Italian [restaurant] for 8 PM.
IDP Tricky Words,The shop prides itself on offering excellent [customer] service.
IDP Tricky Words,Many scientists [believe] that climate change is accelerating rapidly.
IDP Tricky Words,The city's architecture is a fascinating mix of ancient and [modern] styles.
IDP Tricky Words,The final chapter of the physics textbook is particularly [difficult].
IDP Tricky Words,The new tax policy caused a massive amount of public [controversy].
IDP Tricky Words,Please write your final answers on a [separate] sheet of paper.
IDP Tricky Words,"In [comparison] to last year, our retail sales have dropped significantly."
IDP Tricky Words,The mountain resort is internationally famous for its excellent [skiing] facilities.
IDP Tricky Words,Starting a new [business] requires a significant amount of capital.
IDP Tricky Words,The [professor] will upload the lecture slides to the portal this evening.
IDP Tricky Words,The new shopping mall is located on the corner of fifth [avenue].
IDP Tricky Words,The country is investing heavily in the development of [nuclear] energy.
IDP Tricky Words,The two competing scientific theories are [basically] identical in their core assumptions.
IDP Tricky Words,Learning a new instrument requires a huge time [commitment].
IDP Tricky Words,Many animal species will [disappear] if their natural habitats are destroyed.
IDP Tricky Words,Moving to a new country for university is a very [exciting] experience.
IDP Tricky Words,The lecture was so [boring] that half the students fell asleep.
IDP Tricky Words,The music features a very complex and fast-paced [rhythm].
IDP Tricky Words,"If the fire alarm sounds, please evacuate the building [immediately]."
IDP Tricky Words,It is absolutely [necessary] to submit your visa application on time.
IDP Tricky Words,"The national museum displays the [original] painting, not a replica."
IDP Tricky Words,We need to set highly [realistic] goals for the project timeline.
IDP Tricky Words,You will [receive] a confirmation email within 24 hours of booking.
IDP Tricky Words,The autumn semester officially begins in the middle of [February].
IDP Tricky Words,There is a growing [tendency] for young professionals to delay starting a family.
IDP Tricky Words,Childhood [obesity] is quickly becoming a major global public health crisis.
IDP Tricky Words,The average age of [marriage] has increased in recent decades.
IDP Tricky Words,The government is heavily subsidizing the installation of [solar] panels.
IDP Tricky Words,The aviation industry is desperately searching for alternative [fuel] sources.
IDP Tricky Words,The locals in the rural village were incredibly welcoming and [friendly].
IDP Tricky Words,The student union building will remain open [until] midnight.
IDP Tricky Words,The coastal drive offers [beautiful] views of the Pacific Ocean.
IDP Tricky Words,Traffic on the main [highway] is usually heavily congested at 5 PM.
IDP Tricky Words,A remarkably high [percentage] of the students pass the exam on their first try.
IDP Tricky Words,The capital city currently has a population of over three [million] people.
IDP Tricky Words,The front-row concert tickets cost exactly two [thousand] yen.
IDP Tricky Words,The stone artifact is estimated by historians to be over five [hundred] years old.
IDP Tricky Words,The price of imported oil will often [fluctuate] wildly during times of crisis.
IDP Tricky Words,Retail sales usually reach their absolute [peak] during the holiday season.
IDP Tricky Words,The local economy took over five years to fully [recover] from the recession.
IDP Tricky Words,He is a highly talented [musician] who plays three different orchestral instruments.
IDP Tricky Words,All academic assignments must be typed on a [computer] and printed.
IDP Tricky Words,You need to install the latest [software] update to use the program safely.
IDP Tricky Words,The entire guest lecture was recorded on [video] for the online students.
IDP Tricky Words,The lead detective is currently investigating a highly publicized [murder] case.
IDP Tricky Words,The main [topic] of today's afternoon seminar is marine biology.
IDP Tricky Words,The logistics company hired a [temporary] worker to cover the busy summer season.
IDP Tricky Words,"I would love to attend the party, but [unfortunately], I am busy that day."
IDP Tricky Words,One major [disadvantage] of rural living is the severe lack of public transport.
IDP Tricky Words,The author presents a highly compelling [argument] against the new environmental law.
IDP Tricky Words,The weekly staff meeting is held in the boardroom every [Wednesday] morning.
IDP Tricky Words,My next-door [neighbour] is always playing loud music late at night.
IDP Tricky Words,Learning a [foreign] language has been proven to improve cognitive function.
IDP Tricky Words,Studying abroad provides a great [opportunity] to experience entirely new cultures.
IDP Tricky Words,The international flight was delayed [because] of severe thunderstorms.
Academic Subjects,She decided to major in [mathematics] because she loves solving complex equations.
Academic Subjects,The [psychology] department is conducting a study on human memory.
Academic Subjects,He is studying [architecture] and hopes to design sustainable buildings.
Academic Subjects,The [philosophy] class spent the entire semester discussing the ethics of artificial intelligence.
Academic Subjects,Classical [literature] often reflects the social issues of its time period.
Academic Subjects,The [engineering] students built a solar-powered car for their final project.
Academic Subjects,Physical [geography] focuses on the Earth's natural environments and landscapes.
Academic Subjects,A degree in [economics] helps you understand how global markets function.
Academic Subjects,Modern [agriculture] relies heavily on technology to maximize crop yields.
Academic Subjects,The [chemistry] lab is equipped with safety showers and eye-wash stations.
Academic Subjects,Quantum [physics] is notoriously difficult for undergraduate students to grasp.
Campus Locations,The ancient artifacts are currently on display in the national [museum].
Campus Locations,Students must wear safety goggles when conducting experiments in the [laboratory].
Campus Locations,The drama society is performing a Shakespeare play in the campus [theater].
Campus Locations,The university is building a massive new [stadium] for the football team.
Campus Locations,You can play basketball or use the weights in the student [gymnasium].
Campus Locations,The [cafeteria] serves hot meals from 11 AM to 2 PM every day.
Campus Locations,Please walk quietly down the [corridor] while classes are in session.
Campus Locations,The luxury apartment features a large outdoor [balcony] with ocean views.
Campus Locations,The art [exhibition] will feature works from local Indigenous artists.
Days & Months,The deadline for the first semester application is the end of [January].
Days & Months,The weather is typically very hot and humid during [August].
Days & Months,The new academic year always begins in the first week of [September].
Days & Months,The leaves on the trees begin to change color in [October].
Days & Months,We are expecting a shipment of new textbooks in [November].
Days & Months,The campus is completely deserted during the winter break in [December].
Days & Months,The biology tutorial has been moved from Monday to [Tuesday].
Days & Months,The final exam will be held in the main hall next [Thursday].
Days & Months,The library has reduced opening hours on [Saturday] and Sunday.
Double Letter Traps,The steering [committee] will vote on the proposed budget tomorrow.
Double Letter Traps,I didn't want to [embarrass] him by pointing out his obvious mistake.
Double Letter Traps,News media will often [exaggerate] the details of a story to get more views.
Double Letter Traps,The two roads run [parallel] to each other for exactly ten miles.
Double Letter Traps,Hard work and dedication are the keys to long-term [success].
Double Letter Traps,The suspect was found to [possess] several illegal firearms.
Double Letter Traps,Please check the student [bulletin] board for updates on club meetings.
Double Letter Traps,It is considered very rude to [interrupt] someone while they are speaking.
Double Letter Traps,The manager faced a serious ethical [dilemma] regarding the safety protocols.
Double Letter Traps,The artifact dates back to the first [millennium] BC.
Double Letter Traps,Studies show that stress levels [correlate] strongly with poor sleep.
Double Letter Traps,The wild dog became highly [aggressive] when approached by the hikers.
Suffix Traps (-ence / -ance),The building requires constant [maintenance] to keep the roof from leaking.
Suffix Traps (-ence / -ance),The suspect changed his physical [appearance] to avoid being recognized.
Suffix Traps (-ence / -ance),The bacteria developed a strong [resistance] to the antibiotic drugs.
Suffix Traps (-ence / -ance),The school has a strict zero [tolerance] policy for bullying.
Suffix Traps (-ence / -ance),Many people doubt the [existence] of life on other planets.
Suffix Traps (-ence / -ance),The country fought a long and brutal war for its [independence].
Suffix Traps (-ence / -ance),"When booking a flight, please state your meal [preference]."
Suffix Traps (-ence / -ance),Flooding is a rare [occurrence] in this desert region.
Suffix Traps (-ence / -ance),There is a significant [difference] between the two competing products.
Suffix Traps (-ence / -ance),Please provide at least one professional [reference] on your resume.
Vowels & Silent Letters,The photography competition is open to both professionals and [amateur] photographers.
Vowels & Silent Letters,A successful [entrepreneur] must be willing to take calculated financial risks.
Vowels & Silent Letters,We cannot [guarantee] that the package will arrive before the weekend.
Vowels & Silent Letters,The corporate [hierarchy] makes it difficult for junior staff to suggest ideas.
Vowels & Silent Letters,The army [lieutenant] gave a direct order to his soldiers.
Vowels & Silent Letters,It is difficult to [maneuver] a large truck through these narrow city streets.
Vowels & Silent Letters,The invention of the smartphone created a fundamental [paradigm] shift in communication.
Vowels & Silent Letters,The train is running exactly on [schedule] despite the heavy rain.
Vowels & Silent Letters,You need to use a [vacuum] cleaner to get the dog hair out of the carpet.
Vowels & Silent Letters,The weather has been incredibly [weird] and unpredictable this season.
Task 1 Data Vocabulary,The value of the company's shares [plummeted] following the scandal.
Task 1 Data Vocabulary,"After the new advertising campaign, product sales [soared] to record highs."
Task 1 Data Vocabulary,Population growth eventually [plateaued] at roughly five million people.
Task 1 Data Vocabulary,Economic growth has [stagnated] due to a lack of foreign investment.
Task 1 Data Vocabulary,A significant [proportion] of the budget is spent on national defense.
Task 1 Data Vocabulary,The vast [majority] of voters supported the new environmental legislation.
Task 1 Data Vocabulary,Only a tiny [minority] of students failed the final examination.
Task 1 Data Vocabulary,The journey takes [approximately] two hours by high-speed train.
Task 1 Data Vocabulary,"The total cost was [exactly] five thousand dollars, with no extra fees."
Task 2 Academic Vocab,A severe lack of sleep is a direct [consequence] of modern work culture.
Task 2 Academic Vocab,The initial error caused a series of [subsequent] failures in the system.
Task 2 Academic Vocab,The current funding is not [adequate] to cover the cost of repairs.
Task 2 Academic Vocab,The punishment must be [proportionate] to the severity of the crime.
Task 2 Academic Vocab,The successful [implementation] of the policy relies on public support.
Task 2 Academic Vocab,Technological [innovation] is the driving force behind economic growth.
Task 2 Academic Vocab,The scientists conducted an experiment to test their initial [hypothesis].
Task 2 Academic Vocab,A detailed [analysis] of the data reveals a troubling upward trend.
Task 2 Academic Vocab,The vehicles are divided into a specific [category] based on their weight.
Task 2 Academic Vocab,The marketing team needs to develop a new [strategy] for the social media campaign.
Task 2 Academic Vocab,Traveling abroad gives students a much broader global [perspective].
Task 2 Academic Vocab,Freedom of speech is considered a [fundamental] human right in democracies.
Task 2 Academic Vocab,"If we do not reduce emissions, ecological disaster is entirely [inevitable]."
Task 2 Academic Vocab,It is absolutely [crucial] that we address this issue immediately.
Task 2 Academic Vocab,There has been a [significant] improvement in his writing score.
Task 2 Academic Vocab,It is [apparent] from the data that the current approach is failing.
Task 2 Academic Vocab,The evidence provided by the defense was not [sufficient] to prove innocence.
Task 2 Academic Vocab,This type of tropical disease is highly [prevalent] in humid climates.
Task 2 Academic Vocab,Please ensure all documentation is [relevant] to the job you are applying for.
Task 2 Academic Vocab,The teacher will [evaluate] the students based on their final presentations.
Task 2 Academic Vocab,Reading extensively is the best way to improve your academic [vocabulary].
Task 2 Academic Vocab,The laboratory must [validate] the test results before they are published.
Task 2 Academic Vocab,Could you please [elaborate] on the second point you made in your essay?
Task 2 Academic Vocab,The speaker used several diagrams to [illustrate] his complex theory.
Task 2 Academic Vocab,A vegetarian diet completely seeks to [eliminate] meat from daily meals.
Task 2 Academic Vocab,The government introduced a new strict [policy] regarding plastic waste.
Task 2 Academic Vocab,Einstein's [theory] of relativity completely changed our understanding of physics.
Task 2 Academic Vocab,The euro is the official [currency] used by most countries in the European Union.
Task 2 Academic Vocab,The new testing method greatly improves the [accuracy] of the medical diagnosis.
Core Academic Words (AWL),The committee will [assess] the damage caused by the recent storm.
Core Academic Words (AWL),The [concept] of artificial intelligence is difficult for some people to grasp.
Core Academic Words (AWL),You cannot understand this historical event without knowing the political [context].
Core Academic Words (AWL),The researchers collected massive amounts of [data] over a ten-year period.
Core Academic Words (AWL),Many English words actually [derive] from ancient Latin and Greek.
Core Academic Words (AWL),Price is a major deciding [factor] for consumers when buying a car.
Core Academic Words (AWL),The doctor was able to quickly [identify] the cause of the illness.
Core Academic Words (AWL),Red flashing lights usually [indicate] a severe mechanical warning.
Core Academic Words (AWL),Traffic congestion is a [major] problem in almost all capital cities.
Core Academic Words (AWL),The traditional [method] of farming is no longer sustainable.
Core Academic Words (AWL),Earthquakes can [occur] without any prior warning whatsoever.
Core Academic Words (AWL),The medieval [period] is often misunderstood by modern historians.
Core Academic Words (AWL),The basic [principle] of the design is to maximize natural sunlight.
Core Academic Words (AWL),Applying for a passport can be a long and frustrating [process].
Core Academic Words (AWL),Further [research] is required before the drug can be sold to the public.
Core Academic Words (AWL),The immune system will naturally [respond] to the presence of a virus.
Core Academic Words (AWL),The agricultural [sector] employs thousands of workers in this region.
Core Academic Words (AWL),Wind is a highly reliable [source] of renewable energy.
Core Academic Words (AWL),The doctor gave me highly [specific] instructions regarding my medication.
Core Academic Words (AWL),The physical [structure] of the bridge was weakened by the earthquake.
Core Academic Words (AWL),Weather is an unpredictable [variable] that affects crop yields every year.
Core Academic Words (AWL),The company is trying to [acquire] its smaller rival to dominate the market.
Core Academic Words (AWL),Lack of sleep will heavily [affect] your ability to concentrate in class.
Core Academic Words (AWL),We must consider every [aspect] of the problem before making a decision.
Core Academic Words (AWL),The situation is incredibly [complex] and cannot be solved overnight.
Core Academic Words (AWL),The scientists were forced to [conclude] that their hypothesis was incorrect.
Core Academic Words (AWL),The university will [conduct] a thorough review of its admission policies.
Core Academic Words (AWL),Food is a central part of traditional Japanese [culture].
Core Academic Words (AWL),The graphic artist was hired to [design] a new logo for the brand.
Core Academic Words (AWL),Water is an essential [element] for all known forms of life.
Core Academic Words (AWL),Many people falsely [equate] wealth with genuine happiness.
Core Academic Words (AWL),The smartphone's most popular [feature] is its high-resolution camera.
Core Academic Words (AWL),Climate change will heavily [impact] coastal communities in the future.
Core Academic Words (AWL),You can seriously [injure] yourself if you lift weights incorrectly.
Core Academic Words (AWL),The police will thoroughly [investigate] the scene of the crime.
Core Academic Words (AWL),Please place every single [item] into the scanning bin at security.
Core Academic Words (AWL),The findings were published in a highly respected medical [journal].
Core Academic Words (AWL),It is difficult to [maintain] a healthy diet while traveling constantly.
Core Academic Words (AWL),It is perfectly [normal] to feel nervous before a speaking exam.
Core Academic Words (AWL),You must [obtain] a visa before you can legally enter the country.
Core Academic Words (AWL),All students are expected to actively [participate] in group discussions.
Core Academic Words (AWL),Dogs can [perceive] sounds that are completely inaudible to human ears.
Core Academic Words (AWL),The new community center had a highly [positive] effect on the neighborhood.
Core Academic Words (AWL),The abandoned warehouse poses a [potential] fire hazard to the street.
Core Academic Words (AWL),The current manager is much more efficient than the [previous] one.
Core Academic Words (AWL),The [primary] reason for his resignation was a lack of job satisfaction.
Core Academic Words (AWL),The store offers a wide [range] of products for outdoor enthusiasts.
Core Academic Words (AWL),This specific [region] is known for its excellent wine production.
Core Academic Words (AWL),The government is attempting to strictly [regulate] the banking industry.
Core Academic Words (AWL),Many older citizens [reside] in quiet towns away from the bustling city.
Core Academic Words (AWL),Fresh water is becoming a highly scarce [resource] in many countries.
Core Academic Words (AWL),The new law will severely [restrict] the sale of tobacco products.
Core Academic Words (AWL),Please ensure that you tightly [secure] your luggage before the flight.
Core Academic Words (AWL),Many refugees cross the border to [seek] safety and a better life.
Core Academic Words (AWL),You must [select] three elective subjects for your final semester.
"Double Letter Traps","Can you [recommend] a good restaurant?"
"Double Letter Traps","We need to find cheap [accommodation] for the trip."
"Double Letter Traps","Please write your home [address] on this paper."
"Double Letter Traps","The [committee] will meet on Tuesday morning."
"Double Letter Traps","I cannot [guarantee] that the repair will work."
"Double Letter Traps","We must leave the building [immediately] after the alarm."
"Double Letter Traps","It is [necessary] to wear a seatbelt when driving."
"Double Letter Traps","We cooked a special meal for the [occasion]."
"Double Letter Traps","Please fill out this short [questionnaire] before leaving."
"Double Letter Traps","The new business plan was a massive [success]."
"Double Letter Traps","Can you [summarize] the story for me?"
"Double Letter Traps","The final meeting is scheduled for [tomorrow]."
"Double Letter Traps","I need to make an [appointment] with the doctor."
"Double Letter Traps","The [professor] gave a very long lecture."
"Double Letter Traps","They run a very large international [business]."
"Double Letter Traps","This is an [excellent] piece of written work."
"Double Letter Traps","We have an English [assessment] next week."
"Double Letter Traps","Please [arrange] the chairs in a large circle."
"Double Letter Traps","There is a [massive] tree in the middle of the park."
"Double Letter Traps","You need to [communicate] clearly with your team."
"Double Letter Traps","The train will [arrive] at the station very soon."
"Double Letter Traps","We have completely [different] opinions on this topic."
"Double Letter Traps","That is a very [difficult] question to answer."
"Double Letter Traps","Please do not leave your [luggage] unattended."
"Double Letter Traps","The two roads run [parallel] to each other."
"Japanese L & R Traps","She studies biology in the science [laboratory]."
"Japanese L & R Traps","You must return the books to the public [library]."
"Japanese L & R Traps","Is this information [relevant] to the topic?"
"Japanese L & R Traps","He is a very [reliable] and honest worker."
"Japanese L & R Traps","I usually go to the gym [regularly] on weekends."
"Japanese L & R Traps","She studies English [literature] at the university."
"Japanese L & R Traps","They live in a quiet [rural] farming village."
"Japanese L & R Traps","This is only a [temporary] solution to the problem."
"Japanese L & R Traps","You need to study more academic [vocabulary]."
"Japanese L & R Traps","This is just a [preliminary] report for the project."
"Japanese L & R Traps","Do not forget to bring your [umbrella] today."
"Japanese L & R Traps","We need to [collect] the data tomorrow morning."
"Japanese L & R Traps","Please choose the [correct] answer on the test."
"Japanese L & R Traps","He works as a [freelance] photographer from home."
"Japanese L & R Traps","The train leaves the [railway] station at noon."
"Japanese L & R Traps","This is a very [lucrative] and rich business."
"Japanese L & R Traps","She was [literally] crying with joy."
"Japanese L & R Traps","The flight was [delayed] by two hours."
"Japanese L & R Traps","They want to [relocate] to a much bigger city."
"Japanese L & R Traps","She does a lot of [voluntary] work for charity."
"Silent Letters & Vowels","The meeting is on [Wednesday] morning."
"Silent Letters & Vowels","My birthday is in the middle of [February]."
"Silent Letters & Vowels","The leaves turn red in the [autumn]."
"Silent Letters & Vowels","I would like to eat some sweet [chocolate]."
"Silent Letters & Vowels","This sofa is very soft and [comfortable]."
"Silent Letters & Vowels","We must protect the natural [environment]."
"Silent Letters & Vowels","The local [government] passed a new law."
"Silent Letters & Vowels","We ate dinner at a nice Italian [restaurant]."
"Silent Letters & Vowels","The [temperature] is very cold outside today."
"Silent Letters & Vowels","You should eat more green [vegetables]."
"Silent Letters & Vowels","He has a lot of [knowledge] about history."
"Silent Letters & Vowels","I have a terrible pain in my [stomach]."
"Silent Letters & Vowels","Please sign your name on the printed [receipt]."
"Silent Letters & Vowels","The [island] is completely surrounded by water."
"Silent Letters & Vowels","The stone [castle] was built thousands of years ago."
"Silent Letters & Vowels","She is studying human [psychology] at university."
"Silent Letters & Vowels","I need to buy some warm winter [clothes]."
"Silent Letters & Vowels","They painted the room a beautiful blue [colour]."
"Silent Letters & Vowels","Are you a [foreign] exchange student?"
"Silent Letters & Vowels","He played the acoustic [guitar] very well."
"IELTS Part 1: Education","She is studying for her final [examination]."
"IELTS Part 1: Education","I need to hand in my homework [assignment] today."
"IELTS Part 1: Education","The [lecture] was about ancient Roman history."
"IELTS Part 1: Education","You must write a long [dissertation] to graduate."
"IELTS Part 1: Education","He works in the chemistry science [department]."
"IELTS Part 1: Education","We had a small [tutorial] with the teacher."
"IELTS Part 1: Education","You need a high score to get a [scholarship]."
"IELTS Part 1: Education","What is your main academic learning [module]?"
"IELTS Part 1: Education","The printed [certificate] will be sent by mail."
"IELTS Part 1: Education","I need to check the university course [syllabus]."
"IELTS Part 1: Education","She earned her teaching [diploma] last year."
"IELTS Part 1: Education","Please read the first [paragraph] aloud to the class."
"IELTS Part 1: Education","He studies building [architecture] and design."
"IELTS Part 1: Education","She wants to study [medicine] and become a doctor."
"IELTS Part 1: Education","We had an [orientation] day on Monday for new students."
"IELTS Part 1: Work & Finance","What is your current professional [occupation]?"
"IELTS Part 1: Work & Finance","I work as an [accountant] for a large bank."
"IELTS Part 1: Work & Finance","You need to send your printed [resume] to the boss."
"IELTS Part 1: Work & Finance","They are looking for a new store [manager]."
"IELTS Part 1: Work & Finance","We hired an [electrician] to fix the broken lights."
"IELTS Part 1: Work & Finance","He is a highly skilled computer [technician]."
"IELTS Part 1: Work & Finance","You must wear a formal suit to the job [interview]."
"IELTS Part 1: Work & Finance","I need to open a new savings [account]."
"IELTS Part 1: Work & Finance","Please check your bank [balance] on your phone."
"IELTS Part 1: Work & Finance","The official [currency] in Japan is the yen."
"IELTS Part 1: Work & Finance","You have to pay an extra [fee] for that service."
"IELTS Part 1: Work & Finance","I need to apply for a bank [loan] to buy a house."
"IELTS Part 1: Work & Finance","This is a very safe and profitable [investment]."
"IELTS Part 1: Work & Finance","She works in the marketing [division] of the company."
"IELTS Part 1: Work & Finance","The [colleague] sitting next to me is very helpful."
"IELTS Part 1: Health & Lifestyle","You need a doctor's [prescription] for this medicine."
"IELTS Part 1: Health & Lifestyle","He was taken to the city [hospital] quickly."
"IELTS Part 1: Health & Lifestyle","I need to make an appointment with the [dentist]."
"IELTS Part 1: Health & Lifestyle","She is a fully trained hospital [nurse]."
"IELTS Part 1: Health & Lifestyle","The sick [patient] is feeling much better now."
"IELTS Part 1: Health & Lifestyle","Do you have any severe food [allergies]?"
"IELTS Part 1: Health & Lifestyle","You should eat a balanced and healthy [diet]."
"IELTS Part 1: Health & Lifestyle","He exercises every day to stay [healthy]."
"IELTS Part 1: Health & Lifestyle","I have a terrible [headache] from looking at my screen."
"IELTS Part 1: Health & Lifestyle","The heart [surgery] was completely successful."
"IELTS Part 1: Health & Lifestyle","She caught a bad winter [virus] on the train."
"IELTS Part 1: Health & Lifestyle","You must take this liquid [medicine] twice a day."
"IELTS Part 1: Health & Lifestyle","He works as a sports [physiotherapist]."
"IELTS Part 1: Health & Lifestyle","The [ambulance] arrived at the house in five minutes."
"IELTS Part 1: Health & Lifestyle","This deep cut requires immediate medical [attention]."
"Double Letter Traps","I do not want to [embarrass] you in front of your friends."
"Double Letter Traps","Please do not [exaggerate] the size of the problem."
"Double Letter Traps","The artifact dates back to the first [millennium]."
"Double Letter Traps","This is a very rare [occurrence] in nature."
"Double Letter Traps","Only authorized [personnel] can enter this room."
"Double Letter Traps","He does not [possess] a valid driver's license."
"Double Letter Traps","The dog became very [aggressive] when it saw the stranger."
"Double Letter Traps","She receives a ten percent [commission] on every sale."
"Double Letter Traps","It became [apparent] that he was hiding the truth."
"Double Letter Traps","Please find the [attached] document in the email."
"Double Letter Traps","Did you read the news [bulletin] this morning?"
"Double Letter Traps","These two pieces of the puzzle do not [correspond]."
"Double Letter Traps","I was very [disappointed] with the test results."
"Double Letter Traps","Please do not [interrupt] me while I am speaking."
"Double Letter Traps","I only eat fast food [occasionally]."
"Double Letter Traps","Can you use the [vacuum] to clean the carpet?"
"Double Letter Traps","The school [curriculum] was completely updated last year."
"Double Letter Traps","We need more lights to [illuminate] the dark stage."
"Double Letter Traps","That was a major [omission] from the final report."
"Double Letter Traps","Can you hand me that pair of [scissors]?"
"Silent Letters & Vowels","There is a [subtle] difference between the two colors."
"Silent Letters & Vowels","The judge gave a very [solemn] warning to the criminal."
"Silent Letters & Vowels","Write your name in the first [column] on the page."
"Silent Letters & Vowels","The music has a very fast and exciting [rhythm]."
"Silent Letters & Vowels","The mayor will [condemn] the violent actions of the group."
"Silent Letters & Vowels","He is working hard to pay off his credit card [debt]."
"Silent Letters & Vowels","The prince is the [heir] to the royal throne."
"Silent Letters & Vowels","The king had a very long and peaceful [reign]."
"Silent Letters & Vowels","The island is an independent and [sovereign] nation."
"Silent Letters & Vowels","They launched a new advertising [campaign] on television."
"Silent Letters & Vowels","The farm had a huge crop [yield] this year."
"Silent Letters & Vowels","She is highly [conscious] of her health and diet."
"Silent Letters & Vowels","He wants to study [psychiatry] in medical school."
"Silent Letters & Vowels","Old maps and historical books really [fascinate] me."
"Silent Letters & Vowels","My seat is on the right side of the [aisle]."
"Silent Letters & Vowels","The government meets in the [parliament] building."
"Silent Letters & Vowels","Their team plays in the national football [league]."
"Silent Letters & Vowels","You must register your motor [vehicle] with the city."
"Silent Letters & Vowels","The dark smoke from the car [exhaust] is toxic."
"Silent Letters & Vowels","We went to an art [exhibition] on Sunday afternoon."
"Japanese Phonetic Traps","They will hold a national [election] next year."
"Japanese Phonetic Traps","The shop sells a wide [variety] of fresh fruit."
"Japanese Phonetic Traps","Please keep your [valuable] items in the safe."
"Japanese Phonetic Traps","That was a [brilliant] idea for the science project."
"Japanese Phonetic Traps","He is an artist specializing in [visual] computer effects."
"Japanese Phonetic Traps","The stars are barely [visible] through the clouds tonight."
"Japanese Phonetic Traps","They attended a [virtual] meeting on the computer."
"Japanese Phonetic Traps","Please turn down the [volume] on the television."
"Japanese Phonetic Traps","The main [theme] of the novel is childhood friendship."
"Japanese Phonetic Traps","He presented a new scientific [theory] to the class."
"Japanese Phonetic Traps","You need to wear [thermal] underwear in the snow."
"Japanese Phonetic Traps","They traveled to the [southern] part of the country."
"Japanese Phonetic Traps","We live in the [northern] hemisphere of the earth."
"Japanese Phonetic Traps","The local [authority] will make the final decision."
"Japanese Phonetic Traps","She is studying advanced [mathematics] at university."
"IELTS Part 1: Travel & Transport","Please check your travel [itinerary] before we leave."
"IELTS Part 1: Travel & Transport","Every [passenger] must wear a seatbelt during the flight."
"IELTS Part 1: Travel & Transport","Do not forget to bring your [passport] to the airport."
"IELTS Part 1: Travel & Transport","You can pick up your [baggage] at carousel four."
"IELTS Part 1: Travel & Transport","We will reach our final [destination] in two hours."
"IELTS Part 1: Travel & Transport","The flight [departure] time has been changed to noon."
"IELTS Part 1: Travel & Transport","We are waiting for the [arrival] of the next train."
"IELTS Part 1: Travel & Transport","I have a very long daily [commute] to the office."
"IELTS Part 1: Travel & Transport","The train will leave from [platform] number three."
"IELTS Part 1: Travel & Transport","The bus stops at the main city [terminal]."
"IELTS Part 1: Travel & Transport","Take the second exit at the [roundabout]."
"IELTS Part 1: Travel & Transport","Turn left at the next busy [intersection]."
"IELTS Part 1: Travel & Transport","We drove for three hours on the empty [highway]."
"IELTS Part 1: Travel & Transport","The injured man was rescued by a medical [helicopter]."
"IELTS Part 1: Travel & Transport","I ride my [bicycle] to the park every weekend."
"IELTS Part 1: Travel & Transport","He bought a brand new black [motorcycle]."
"IELTS Part 1: Travel & Transport","The car stopped to let the [pedestrian] cross the road."
"IELTS Part 1: Travel & Transport","Keep both hands on the [steering] wheel when driving."
"IELTS Part 1: Travel & Transport","The car [engine] makes a very strange noise."
"IELTS Part 1: Travel & Transport","I made a dinner [reservation] for eight o'clock."
"IELTS Part 1: Environment & Nature","The factory causes a lot of dangerous air [pollution]."
"IELTS Part 1: Environment & Nature","That bird is a very rare and protected [species]."
"IELTS Part 1: Environment & Nature","The global [climate] is changing very rapidly."
"IELTS Part 1: Environment & Nature","The building was destroyed by a massive [earthquake]."
"IELTS Part 1: Environment & Nature","The skiers were trapped by a sudden snow [avalanche]."
"IELTS Part 1: Environment & Nature","The coastal town was hit by a terrible [tsunami]."
"IELTS Part 1: Environment & Nature","The strong wind from the [hurricane] broke the window."
"IELTS Part 1: Environment & Nature","The rocket launched into the upper [atmosphere]."
"IELTS Part 1: Environment & Nature","The farm plants died during the long summer [drought]."
"IELTS Part 1: Environment & Nature","The island has an active [volcano] that produces ash."
"IELTS Part 1: Environment & Nature","The dark [tornado] destroyed the small wooden house."
"IELTS Part 1: Environment & Nature","Please put the plastic bottles in the [recycling] bin."
"IELTS Part 1: Environment & Nature","We must invest in [renewable] energy sources like wind."
"IELTS Part 1: Environment & Nature","She is studying marine [ecology] at the university."
"IELTS Part 1: Environment & Nature","The national park protects the local forest [wildlife]."
"IELTS Part 1: Environment & Nature","Modern [agriculture] requires a massive amount of fresh water."
"IELTS Part 1: Environment & Nature","The jungle has very thick green [vegetation]."
"IELTS Part 1: Environment & Nature","The massive flood was a terrible natural [disaster]."
"IELTS Part 1: Environment & Nature","The artist painted a beautiful mountain [landscape]."
"IELTS Part 1: Environment & Nature","Water [conservation] is very important during the summer."
"IELTS Part 1: House & Home","Keep the milk cold inside the [refrigerator]."
"IELTS Part 1: House & Home","I will heat up the soup in the [microwave]."
"IELTS Part 1: House & Home","This new bed [mattress] is very comfortable to sleep on."
"IELTS Part 1: House & Home","Hang your clean shirts in the wooden [wardrobe]."
"IELTS Part 1: House & Home","I need an extra warm [blanket] for the winter."
"IELTS Part 1: House & Home","She bought a soft yellow [cushion] for the sofa."
"IELTS Part 1: House & Home","We sat outside on the apartment [balcony]."
"IELTS Part 1: House & Home","Walk down the long [corridor] and turn left."
"IELTS Part 1: House & Home","Be careful walking down the steep wooden [staircase]."
"IELTS Part 1: House & Home","We keep our old boxes down in the dark [basement]."
"IELTS Part 1: House & Home","The heavy rain leaked water into the [attic]."
"IELTS Part 1: House & Home","Park the car inside the [garage] tonight."
"IELTS Part 1: House & Home","Smoke from the fire goes up the [chimney]."
"IELTS Part 1: House & Home","Water is dripping from the broken kitchen [faucet]."
"IELTS Part 1: House & Home","The living room has a very high white [ceiling]."
"Double Letter Traps","The [approximate] cost of the trip is five hundred dollars."
"Double Letter Traps","This creates a terrible moral [dilemma] for the team."
"Double Letter Traps","The car began to [accelerate] down the empty highway."
"Double Letter Traps","It will take years to [accomplish] this difficult goal."
"Double Letter Traps","You should add some green [broccoli] to the soup."
"Double Letter Traps","I love the smell of sweet [cinnamon] in the kitchen."
"Double Letter Traps","The two companies will [collaborate] on the new software."
"Double Letter Traps","The nurse showed great [compassion] for the sick child."
"Double Letter Traps","We need to improve the [efficiency] of the factory."
"Double Letter Traps","The smartphone was a massive technological [innovation]."
"Double Letter Traps","Modern [irrigation] helps farmers grow crops in the desert."
"Double Letter Traps","Scientists are working hard to develop a safe [vaccine]."
"Double Letter Traps","He tried to [suppress] his anger during the meeting."
"Double Letter Traps","She has a very large [appetite] for sweet food."
"Double Letter Traps","The [committee] decided to approve the new building."
"Silent Letters & Vowels","The famous [architect] designed the new city museum."
"Silent Letters & Vowels","She suffered from extreme [fatigue] after the long flight."
"Silent Letters & Vowels","The history of ancient Egypt will always [intrigue] me."
"Silent Letters & Vowels","You can order the clothes directly from the [catalogue]."
"Silent Letters & Vowels","The movie had very funny and clever [dialogue]."
"Silent Letters & Vowels","The poem has a very simple and beautiful [rhyme]."
"Silent Letters & Vowels","I have no [doubt] that he will pass the test."
"Silent Letters & Vowels","The two boys like to [wrestle] in the garden."
"Silent Letters & Vowels","The referee blew his [whistle] to stop the game."
"Silent Letters & Vowels","The old man went to the hospital with [pneumonia]."
"Silent Letters & Vowels","The [psychiatrist] helped the patient deal with severe stress."
"Silent Letters & Vowels","It was just a [pseudo] science experiment without real facts."
"Silent Letters & Vowels","Put the clean dishes away in the kitchen [cupboard]."
"Silent Letters & Vowels","The king carried a heavy steel [sword] into battle."
"Silent Letters & Vowels","They placed a beautiful flower [wreath] on the door."
"Japanese Phonetic Traps","He bought a very expensive black [leather] jacket."
"Japanese Phonetic Traps","What do you like to do in your [leisure] time?"
"Japanese Phonetic Traps","The children jumped into the cold [river] to swim."
"Japanese Phonetic Traps","Drinking too much alcohol can damage your [liver]."
"Japanese Phonetic Traps","The magician made the coin completely [vanish]."
"Japanese Phonetic Traps","The king decided to [banish] the thief from the town."
"Japanese Phonetic Traps","The police found the stolen [vessel] sailing on the sea."
"Japanese Phonetic Traps","The tiger ate the raw [flesh] of the hunted animal."
"Japanese Phonetic Traps","I need to buy some [fresh] vegetables for the salad."
"Japanese Phonetic Traps","The buses to the city center are very [frequent]."
"Japanese Phonetic Traps","It is hard to [breathe] the thin air at the top of the mountain."
"Japanese Phonetic Traps","Take a deep [breath] before you jump into the pool."
"Japanese Phonetic Traps","The [wealthy] businessman owns three large houses."
"Japanese Phonetic Traps","Volunteering at the hospital is a very [worthwhile] activity."
"Japanese Phonetic Traps","The dog was a very [faithful] companion to the old man."
"Japanese Phonetic Traps","You must have [faith] in your own natural abilities."
"Japanese Phonetic Traps","The project is currently in its final testing [phase]."
"Japanese Phonetic Traps","I do not understand the meaning of this English [phrase]."
"Japanese Phonetic Traps","The manager gave the team a strict [verbal] warning."
"Japanese Phonetic Traps","She drinks hot [herbal] tea to relax before sleeping."
"IELTS Part 1: Food & Cooking","Can you send me the [recipe] for this delicious cake?"
"IELTS Part 1: Food & Cooking","Garlic is a very common [ingredient] in Italian food."
"IELTS Part 1: Food & Cooking","A balanced diet is very important for proper [nutrition]."
"IELTS Part 1: Food & Cooking","Chicken and beans are both excellent sources of [protein]."
"IELTS Part 1: Food & Cooking","Bread and pasta contain a high amount of [carbohydrate]."
"IELTS Part 1: Food & Cooking","Oranges provide a lot of [vitamin] C to keep you healthy."
"IELTS Part 1: Food & Cooking","I cannot eat peanuts because I am highly [allergic]."
"IELTS Part 1: Food & Cooking","The restaurant has a special menu for [vegetarian] customers."
"IELTS Part 1: Food & Cooking","We ordered a small [appetizer] before the main meal."
"IELTS Part 1: Food & Cooking","I would like some strawberry ice cream for [dessert]."
"IELTS Part 1: Food & Cooking","Would you like to order a cold [beverage] with your lunch?"
"IELTS Part 1: Food & Cooking","The students eat their lunch in the school [cafeteria]."
"IELTS Part 1: Food & Cooking","Thai [cuisine] is famous for being very spicy and fresh."
"IELTS Part 1: Food & Cooking","They ate dinner at a highly expensive [gourmet] restaurant."
"IELTS Part 1: Food & Cooking","I bought some fresh bread from the local [bakery]."
"IELTS Part 1: Shopping & Money","The new [retail] store will open in the shopping mall."
"IELTS Part 1: Shopping & Money","They buy the products at a cheap [wholesale] price."
"IELTS Part 1: Shopping & Money","Students get a ten percent [discount] on movie tickets."
"IELTS Part 1: Shopping & Money","Buying this winter jacket for twenty dollars was a great [bargain]."
"IELTS Part 1: Shopping & Money","If the television is broken, you can ask for a full [refund]."
"IELTS Part 1: Shopping & Money","The new computer comes with a one-year [warranty]."
"IELTS Part 1: Shopping & Money","The company tries to understand what the [consumer] wants."
"IELTS Part 1: Shopping & Money","We need to plan our monthly [budget] very carefully."
"IELTS Part 1: Shopping & Money","They pay a thousand dollars a month for their house [mortgage]."
"IELTS Part 1: Shopping & Money","He saves a little bit of money every month for his [pension]."
"IELTS Part 1: Shopping & Money","The parents give their child a weekly [allowance]."
"IELTS Part 1: Shopping & Money","Buying a brand new car is a very major [expense]."
"IELTS Part 1: Shopping & Money","We need to find an [affordable] apartment near the university."
"IELTS Part 1: Shopping & Money","Designer clothes are often much too [expensive] for normal people."
"IELTS Part 1: Shopping & Money","She keeps her gold rings in a small [jewellery] box."
"IELTS Part 1: Technology & Communication","The computer [hardware] was upgraded to run much faster."
"IELTS Part 1: Technology & Communication","You need to install the latest [software] update on your phone."
"IELTS Part 1: Technology & Communication","The customer information is stored in a secure [database]."
"IELTS Part 1: Technology & Communication","The entire office computer [network] crashed this morning."
"IELTS Part 1: Technology & Communication","We need to get a faster [broadband] internet connection."
"IELTS Part 1: Technology & Communication","Traditional cameras have been totally replaced by [digital] technology."
"IELTS Part 1: Technology & Communication","The television signal is transmitted by a space [satellite]."
"IELTS Part 1: Technology & Communication","He loves buying the newest electronic [gadget] from the store."
"IELTS Part 1: Technology & Communication","The modern kitchen has every single electrical [appliance]."
"IELTS Part 1: Technology & Communication","The company is known for its highly [innovative] designs."
"IELTS Part 1: Technology & Communication","The new application has a very simple user [interface]."
"IELTS Part 1: Technology & Communication","I spilled a cup of hot coffee on my computer [keyboard]."
"IELTS Part 1: Technology & Communication","Looking at a bright screen [monitor] all day hurts my eyes."
"IELTS Part 1: Technology & Communication","You must never share your secret [password] with anyone."
"IELTS Part 1: Technology & Communication","Social media companies must respect user [privacy] laws."
"IELTS Part 1: Hobbies & Leisure","She is taking a class to learn about landscape [photography]."
"IELTS Part 1: Hobbies & Leisure","He plays the violin in the city symphony [orchestra]."
"IELTS Part 1: Hobbies & Leisure","The artist displayed his new paintings in the local [gallery]."
"IELTS Part 1: Hobbies & Leisure","The museum has a beautiful marble [sculpture] from Rome."
"IELTS Part 1: Hobbies & Leisure","I prefer to read science [fiction] instead of history books."
"IELTS Part 1: Hobbies & Leisure","He wants to study [journalism] and write for a newspaper."
"IELTS Part 1: Hobbies & Leisure","She reads a fashion [magazine] while waiting for the train."
"IELTS Part 1: Hobbies & Leisure","Thousands of fans cheered inside the giant football [stadium]."
"IELTS Part 1: Hobbies & Leisure","Our team won the national basketball [tournament]."
"IELTS Part 1: Hobbies & Leisure","The professional [athlete] practices for six hours every day."
"IELTS Part 1: Hobbies & Leisure","The young girl won a gold medal in [gymnastics]."
"IELTS Part 1: Hobbies & Leisure","He is training to run a full [marathon] next year."
"IELTS Part 1: Hobbies & Leisure","The city park is widely used for outdoor [recreation]."
"IELTS Part 1: Hobbies & Leisure","Television is the most popular form of home [entertainment]."
"IELTS Part 1: Hobbies & Leisure","The town holds a traditional music [festival] every summer."
"Double Letter Traps","We need to make this building more [accessible] for everyone."
"Double Letter Traps","The government will [allocate] more money to public education."
"Double Letter Traps","They celebrated their tenth wedding [anniversary] in Paris."
"Double Letter Traps","She works in a store that sells expensive sports [apparel]."
"Double Letter Traps","The old bridge might [collapse] during the earthquake."
"Double Letter Traps","The teacher used a picture to [illustrate] the complex point."
"Double Letter Traps","The police will [interrogate] the suspect tomorrow morning."
"Double Letter Traps","They walked in the completely [opposite] direction to the train."
"Double Letter Traps","The child threw the candy [wrapper] on the floor."
"Double Letter Traps","The country has a very rough and mountainous [terrain]."
"Double Letter Traps","The tired army refused to [surrender] to the enemy."
"Double Letter Traps","You need to [assemble] the wooden furniture yourself."
"Double Letter Traps","The little child held a large red [balloon] at the park."
"Double Letter Traps","She carried the baby in a small wooden [carriage]."
"Double Letter Traps","Can you change the television [channel] for me?"
"Double Letter Traps","The politician was arrested for being highly [corrupt]."
"Double Letter Traps","The boss will [dismiss] the team early today for the holiday."
"Double Letter Traps","I will [fulfill] my promise to help you study."
"Double Letter Traps","The police dog began to [sniff] the stranger's shoes."
"Double Letter Traps","This building was designed with perfect visual [symmetry]."
"Silent Letters & Vowels","She is a business [acquaintance] of my father."
"Silent Letters & Vowels","The teacher will [assign] a new writing project tomorrow."
"Silent Letters & Vowels","He uses a very expensive [cologne] after shaving."
"Silent Letters & Vowels","There is a lot of broken [debris] on the road after the storm."
"Silent Letters & Vowels","The airplane will begin to [descend] very soon."
"Silent Letters & Vowels","She wants to [design] fashionable clothes for a living."
"Silent Letters & Vowels","The hungry dog tried to [gnaw] on the old bone."
"Silent Letters & Vowels","He wiped his face with a white cotton [handkerchief]."
"Silent Letters & Vowels","You must [kneel] when you speak to the king."
"Silent Letters & Vowels","The brave [knight] rode a white horse into battle."
"Silent Letters & Vowels","He cracked his [knuckle] loudly before typing the essay."
"Silent Letters & Vowels","My fingers are completely [numb] from the freezing cold."
"Silent Letters & Vowels","The internet caused a massive [paradigm] shift in communication."
"Silent Letters & Vowels","The manager decided to [resign] from the company."
"Silent Letters & Vowels","They own a very large luxury sailing [yacht]."
"Silent Letters & Vowels","You must do a [thorough] safety check of the car."
"Silent Letters & Vowels","The muscle in my lower [calf] is very sore after running."
"Silent Letters & Vowels","We sang a traditional musical [hymn] at the church."
"Silent Letters & Vowels","The sharp knife cut his [thumb] by mistake while cooking."
"Silent Letters & Vowels","He opened the wooden door by turning the round [knob]."
"Japanese Phonetic Traps","Please put the fresh flowers in the glass [vase]."
"Japanese Phonetic Traps","The military has a secret underground [base]."
"Japanese Phonetic Traps","He hit the baseball very hard with his wooden [bat]."
"Japanese Phonetic Traps","They keep the wine in a large wooden [vat]."
"Japanese Phonetic Traps","She is wearing a beautiful dark velvet [vest]."
"Japanese Phonetic Traps","He is officially the [best] player on the football team."
"Japanese Phonetic Traps","The winter ice on the road is very [thick]."
"Japanese Phonetic Traps","The child was feeling very [sick] yesterday."
"Japanese Phonetic Traps","We walked along the dirt [path] in the forest."
"Japanese Phonetic Traps","You must show your security [pass] to enter the building."
"Japanese Phonetic Traps","Use a clean piece of [cloth] to wipe the table."
"Japanese Phonetic Traps","Look both ways before you safely [cross] the street."
"Japanese Phonetic Traps","Can you [think] of a better solution to this problem?"
"Japanese Phonetic Traps","The heavy ship began to [sink] into the dark water."
"Japanese Phonetic Traps","Please turn off the bedroom [light] before you sleep."
"Japanese Phonetic Traps","You must turn [right] at the next street corner."
"Japanese Phonetic Traps","The mountain road has a very dangerous [curve]."
"Japanese Phonetic Traps","He used a sharp knife to carefully [carve] the wood."
"Japanese Phonetic Traps","I like to eat a thick [slice] of bread with butter."
"Japanese Phonetic Traps","The farmer grows healthy brown [rice] in the field."
"IELTS Part 1: City & Infrastructure","We walked down the wide, tree-lined [boulevard]."
"IELTS Part 1: City & Infrastructure","The river acts as a natural [boundary] for the city."
"IELTS Part 1: City & Infrastructure","They built a new steel [bridge] over the deep water."
"IELTS Part 1: City & Infrastructure","The old historical [building] is made entirely of red brick."
"IELTS Part 1: City & Infrastructure","The workers mixed the grey [cement] with water."
"IELTS Part 1: City & Infrastructure","Every responsible [citizen] must vote in the election."
"IELTS Part 1: City & Infrastructure","The tall walls are made of solid, heavy [concrete]."
"IELTS Part 1: City & Infrastructure","They plan to [construct] a new public hospital here."
"IELTS Part 1: City & Infrastructure","Please use the painted [crosswalk] to cross the road safely."
"IELTS Part 1: City & Infrastructure","She works in the busy financial [district] of the city."
"IELTS Part 1: City & Infrastructure","The hotel passenger [elevator] is currently broken."
"IELTS Part 1: City & Infrastructure","Stand on the right side of the moving [escalator]."
"IELTS Part 1: City & Infrastructure","Traffic on the massive [freeway] is terrible today."
"IELTS Part 1: City & Infrastructure","The stone statue is a famous national [monument]."
"IELTS Part 1: City & Infrastructure","The modern [skyscraper] is over one hundred stories tall."
"IELTS Part 1: Weather & Seasons","A severe [blizzard] dumped heavy snow on the town."
"IELTS Part 1: Weather & Seasons","A gentle sea [breeze] blew through the open window."
"IELTS Part 1: Weather & Seasons","Water boils at exactly one hundred degrees [Celsius]."
"IELTS Part 1: Weather & Seasons","The dark [cloud] in the sky means heavy rain is coming."
"IELTS Part 1: Weather & Seasons","The tropical [cyclone] caused a lot of damage to the coast."
"IELTS Part 1: Weather & Seasons","The temperature will reach thirty [degrees] today."
"IELTS Part 1: Weather & Seasons","A light [drizzle] fell from the grey sky all morning."
"IELTS Part 1: Weather & Seasons","We use [Fahrenheit] to measure temperature in America."
"IELTS Part 1: Weather & Seasons","The weather [forecast] predicts heavy rain tomorrow."
"IELTS Part 1: Weather & Seasons","The water in the pipes will completely [freeze] tonight."
"IELTS Part 1: Weather & Seasons","The morning grass was covered in sharp white [frost]."
"IELTS Part 1: Weather & Seasons","The massive [glacier] slowly moved down the mountain."
"IELTS Part 1: Weather & Seasons","A bright flash of [lightning] hit the tall tree."
"IELTS Part 1: Weather & Seasons","She studies [meteorology] to understand weather patterns."
"IELTS Part 1: Weather & Seasons","The heavy summer [monsoon] brings a lot of rain to Asia."
"IELTS Part 1: Crime & Law","The police will [accuse] him of stealing the car."
"IELTS Part 1: Crime & Law","The judge decided to [acquit] the man of all charges."
"IELTS Part 1: Crime & Law","They will [arrest] the dangerous criminal at the airport."
"IELTS Part 1: Crime & Law","You need to hire a good [attorney] for the trial."
"IELTS Part 1: Crime & Law","The masked [burglar] broke in through the back window."
"IELTS Part 1: Crime & Law","He did not [commit] the crime they are discussing."
"IELTS Part 1: Crime & Law","The trial will take place in the supreme [court]."
"IELTS Part 1: Crime & Law","The violent [criminal] was sent to a secure prison."
"IELTS Part 1: Crime & Law","The smart [detective] easily solved the complex mystery."
"IELTS Part 1: Crime & Law","We need more physical [evidence] to prove the case."
"IELTS Part 1: Crime & Law","He committed credit card [fraud] on the internet."
"IELTS Part 1: Crime & Law","The jury found him [guilty] of the terrible robbery."
"IELTS Part 1: Crime & Law","It is completely [illegal] to park your car here."
"IELTS Part 1: Crime & Law","The man claims he is completely [innocent]."
"IELTS Part 1: Crime & Law","The wise [judge] listened carefully to both sides."
"IELTS Part 1: Crime & Law","The twelve people on the [jury] could not agree."
"IELTS Part 1: Crime & Law","The expensive [lawyer] charged a very high fee."
"IELTS Part 1: Crime & Law","The maximum [penalty] for the crime is ten years."
"IELTS Part 1: Crime & Law","The local [police] officer directed the heavy traffic."
"IELTS Part 1: Crime & Law","He was the only [witness] who saw the accident happen."
"Double Letter Traps","The police are looking for his [accomplice]."
"Double Letter Traps","The heavy snow [accumulation] caused the roof to break."
"Double Letter Traps","In [addition] to the salad, I would like some soup."
"Double Letter Traps","That loud repetitive noise is a terrible [annoyance]."
"Double Letter Traps","The king shot an [arrow] from his wooden bow."
"Double Letter Traps","They hung a large red [banner] outside the shop."
"Double Letter Traps","The farmer stored the drinking water in a wooden [barrel]."
"Double Letter Traps","The police put a concrete [barrier] across the road."
"Double Letter Traps","The pink cherry [blossom] looks beautiful in the spring."
"Double Letter Traps","Please chop the green [cabbage] for the dinner salad."
"Double Letter Traps","He listened to music on an old plastic [cassette]."
"Double Letter Traps","The car [collision] blocked the highway for three hours."
"Double Letter Traps","Can you [connect] my laptop computer to the internet?"
"Double Letter Traps","They rented a small wooden [cottage] near the quiet lake."
"Double Letter Traps","The bright sun shining on the water was [dazzling]."
"Double Letter Traps","She wore a shiny silver [earring] on her left ear."
"Double Letter Traps","We took a large passenger [ferry] across the deep river."
"Double Letter Traps","The car needs another [gallon] of cheap gas."
"Double Letter Traps","The teenager's bedroom was a very [messy] disaster."
"Double Letter Traps","Look at your own face in the glass [mirror]."
"Silent Letters & Vowels","I do not know the correct [answer] to that math question."
"Silent Letters & Vowels","She baked a sweet chocolate [biscuit] for me."
"Silent Letters & Vowels","They plan to [build] a new public hospital next year."
"Silent Letters & Vowels","The teacher used white [chalk] on the blackboard."
"Silent Letters & Vowels","The busy city traffic was in complete [chaos] this morning."
"Silent Letters & Vowels","My favorite [character] in the novel is the hero."
"Silent Letters & Vowels","He played a beautiful musical [chord] on the acoustic guitar."
"Silent Letters & Vowels","The primary school [chorus] sang a beautiful song together."
"Silent Letters & Vowels","The public bus leaves from the main city [depot]."
"Silent Letters & Vowels","Please [fasten] your seatbelt before the airplane takes off."
"Silent Letters & Vowels","The old empty house is haunted by a scary [ghost]."
"Silent Letters & Vowels","You must be polite to every [guest] at the dinner party."
"Silent Letters & Vowels","The friendly tour [guide] showed us around the ancient museum."
"Silent Letters & Vowels","Cut the fresh apple in [half] and share it with your brother."
"Silent Letters & Vowels","You must be completely [honest] when speaking to the judge."
"Silent Letters & Vowels","The fast train ride to the city will take one [hour]."
"Silent Letters & Vowels","The soldier carried a heavy green [knapsack] on his back."
"Silent Letters & Vowels","He fell on the hard ground and hurt his right [knee]."
"Silent Letters & Vowels","Use a sharp metal [knife] to cut the thick meat."
"Silent Letters & Vowels","Please [listen] carefully to the teacher's instructions."
"Japanese Phonetic Traps","Every citizen must obey the strict city [law]."
"Japanese Phonetic Traps","Do not eat the fish while it is still [raw]."
"Japanese Phonetic Traps","The airplane flew very [low] over the tops of the trees."
"Japanese Phonetic Traps","We sat in the very first [row] at the cinema."
"Japanese Phonetic Traps","The children like to [play] football in the park."
"Japanese Phonetic Traps","They went to the quiet church to [pray]."
"Japanese Phonetic Traps","The green [grass] in the garden is very soft and wet."
"Japanese Phonetic Traps","Be careful not to drop the fragile drinking [glass]."
"Japanese Phonetic Traps","The truck carried a heavy [load] of red bricks."
"Japanese Phonetic Traps","The car drove down the empty dirt [road]."
"Japanese Phonetic Traps","The morning [flight] to London was canceled due to rain."
"Japanese Phonetic Traps","The sudden loud noise gave me a terrible [fright]."
"Japanese Phonetic Traps","Every adult citizen should [vote] in the national election."
"Japanese Phonetic Traps","They sailed a small wooden [boat] on the quiet lake."
"Japanese Phonetic Traps","The doctor was glad the sick patient was still [alive]."
"Japanese Phonetic Traps","What time will the train [arrive] at the central station?"
"Japanese Phonetic Traps","The new manager will [lead] the team to financial success."
"Japanese Phonetic Traps","I want to [read] a good fantasy book before I go to bed."
"Japanese Phonetic Traps","The chef will [fry] the sliced potatoes in hot oil."
"Japanese Phonetic Traps","The wild bird can [fly] very high in the blue sky."
"IELTS Part 1: Sports & Fitness","The athletes stretch their bodies to prevent [injury]."
"IELTS Part 1: Sports & Fitness","The human [skeleton] is made of many connected bones."
"IELTS Part 1: Sports & Fitness","Good dental [hygiene] prevents you from getting bad teeth."
"IELTS Part 1: Sports & Fitness","She goes to the gym every day to improve her [fitness]."
"IELTS Part 1: Sports & Fitness","He won a gold medal in Olympic [gymnastics]."
"IELTS Part 1: Sports & Fitness","They do [aerobic] exercise to keep their human hearts strong."
"IELTS Part 1: Sports & Fitness","The fast runners practiced on the athletic [track]."
"IELTS Part 1: Sports & Fitness","They won the gold [medal] at the international Olympics."
"IELTS Part 1: Sports & Fitness","The sports [referee] blew the loud whistle to stop the game."
"IELTS Part 1: Sports & Fitness","He runs on the electric [treadmill] every single morning."
"IELTS Part 1: Sports & Fitness","We played a friendly [match] of volleyball on the beach."
"IELTS Part 1: Sports & Fitness","The indoor swimming [pool] is heated during the cold winter."
"IELTS Part 1: Sports & Fitness","They hired a personal [coach] to help them train harder."
"IELTS Part 1: Sports & Fitness","The heavy metal [weight] fell on his foot."
"IELTS Part 1: Sports & Fitness","She wore a protective plastic [helmet] while riding the bike."
"IELTS Part 1: Arts & Culture","We saw ancient dinosaur bones at the history [exhibit]."
"IELTS Part 1: Arts & Culture","The modern art [gallery] featured many exciting new painters."
"IELTS Part 1: Arts & Culture","He carved a beautiful stone [sculpture] of a horse."
"IELTS Part 1: Arts & Culture","The artist painted a colorful [portrait] of the beautiful queen."
"IELTS Part 1: Arts & Culture","She bought a blank white [canvas] for her new painting."
"IELTS Part 1: Arts & Culture","I really enjoy listening to calm [classical] piano music."
"IELTS Part 1: Arts & Culture","The city [orchestra] played a famous symphony last night."
"IELTS Part 1: Arts & Culture","Can you play a musical [instrument] like the piano?"
"IELTS Part 1: Arts & Culture","We bought expensive tickets to see a play at the [theatre]."
"IELTS Part 1: Arts & Culture","The excited [audience] clapped their hands after the show."
"IELTS Part 1: Arts & Culture","The amazing performance ended with loud [applause]."
"IELTS Part 1: Arts & Culture","They went to a loud rock music [concert] last night."
"IELTS Part 1: Arts & Culture","The traditional dancers performed a beautiful classical [ballet]."
"IELTS Part 1: Arts & Culture","The famous singer performed a traditional Italian [opera]."
"IELTS Part 1: Arts & Culture","He wrote a short beautiful [poem] about the spring rain."
"IELTS Part 1: Animals & Wildlife","The giant blue whale is the largest marine [mammal]."
"IELTS Part 1: Animals & Wildlife","A desert snake is a cold-blooded [reptile]."
"IELTS Part 1: Animals & Wildlife","The ant is a very small but extremely strong [insect]."
"IELTS Part 1: Animals & Wildlife","The hungry lion is a dangerous jungle [predator]."
"IELTS Part 1: Animals & Wildlife","The eagle hunted a small brown mouse for its [prey]."
"IELTS Part 1: Animals & Wildlife","Strict water conservation protects the fish in the [river]."
"IELTS Part 1: Animals & Wildlife","The injured bird was taken to a wildlife [sanctuary]."
"IELTS Part 1: Animals & Wildlife","We saw sharks and green turtles at the city [aquarium]."
"IELTS Part 1: Animals & Wildlife","The giant [dinosaur] species died millions of years ago."
"IELTS Part 1: Animals & Wildlife","Human [evolution] is a very complex scientific subject."
"IELTS Part 1: Animals & Wildlife","The white bird lost a small [feather] from its left wing."
"IELTS Part 1: Animals & Wildlife","The polar bear lives in a frozen icy [tundra]."
"IELTS Part 1: Animals & Wildlife","The monkey climbed high into the green jungle [canopy]."
"IELTS Part 1: Animals & Wildlife","The farmer feeds his domestic [livestock] every morning."
"IELTS Part 1: Animals & Wildlife","The elephant has a very long grey [trunk] to drink water."
"IELTS Part 1: Animals & Wildlife","The large ocean walrus has two long white [tusks]."
"IELTS Part 1: Animals & Wildlife","The striped tiger is a highly endangered wild [animal]."
"IELTS Part 1: Animals & Wildlife","The guard dog started to [bark] loudly at the mailman."
"IELTS Part 1: Animals & Wildlife","The cat likes to [chase] the fast laser pointer on the wall."
"IELTS Part 1: Animals & Wildlife","The spider spins a sticky [web] to catch its food."
"Double Letter Traps","The car [accident] caused a big traffic jam."
"Double Letter Traps","The printed map is not very [accurate]."
"Double Letter Traps","Smartphone [addiction] is a serious modern problem."
"Double Letter Traps","The manager must [approve] the holiday request."
"Double Letter Traps","The phone [battery] is completely dead."
"Double Letter Traps","The keys are at the [bottom] of the bag."
"Double Letter Traps","The police found a silver [bullet] on the ground."
"Double Letter Traps","We had to [cancel] the flight due to bad weather."
"Double Letter Traps","This puzzle is a very difficult [challenge]."
"Double Letter Traps","He teaches at a local community [college]."
"Double Letter Traps","The general shouted a loud [command] to the soldiers."
"Double Letter Traps","Please leave a [comment] below the internet video."
"Double Letter Traps","The [current] political situation is very stable."
"Double Letter Traps","We need to [discuss] the project later today."
"Double Letter Traps","He put a lot of [effort] into his school work."
"Double Letter Traps","There is a massive spelling [error] on this page."
"Double Letter Traps","What will [happen] if it rains tomorrow?"
"Double Letter Traps","The magic trick was an amazing visual [illusion]."
"Double Letter Traps","We must resolve this serious social [issue]."
"Double Letter Traps","The teacher prepared a fun [lesson] for the children."
"Silent Letters & Vowels","I like to eat roasted [almond] nuts as a snack."
"Silent Letters & Vowels","The police officer wore a shiny gold [badge]."
"Silent Letters & Vowels","The church [choir] sang beautifully on Sunday morning."
"Silent Letters & Vowels","Please use a plastic [comb] for your messy hair."
"Silent Letters & Vowels","The small bird ate a tiny bread [crumb]."
"Silent Letters & Vowels","The dark cave produced a loud [echo]."
"Silent Letters & Vowels","The fuel [gauge] says the tank is completely empty."
"Silent Letters & Vowels","It is an absolute [honor] to finally meet you."
"Silent Letters & Vowels","The baby [lamb] stayed very close to its mother."
"Silent Letters & Vowels","You must stretch your leg [muscle] before you run."
"Silent Letters & Vowels","We called a [plumber] to fix the broken kitchen sink."
"Silent Letters & Vowels","The ancient king is buried in a stone [tomb]."
"Silent Letters & Vowels","I was so hungry I ate the [whole] pizza by myself."
"Silent Letters & Vowels","Please [wrap] the present in beautiful red paper."
"Silent Letters & Vowels","The heavy storm will completely [wreck] the old ship."
"Silent Letters & Vowels","The old man has a deep [wrinkle] on his forehead."
"Silent Letters & Vowels","He wears a heavy silver watch on his left [wrist]."
"Silent Letters & Vowels","I need to [write] a long letter to my grandmother."
"Silent Letters & Vowels","That is completely the [wrong] answer to the question."
"Silent Letters & Vowels","I only eat the yellow egg [yolk] in the morning."
"Japanese Phonetic Traps","The fireflies began to [glow] in the dark forest."
"Japanese Phonetic Traps","Plants need water and sunlight to [grow] tall."
"Japanese Phonetic Traps","The small biting [flea] jumped onto the dog's back."
"Japanese Phonetic Traps","The local museum offers [free] entry on Sundays."
"Japanese Phonetic Traps","She started to [blush] when he smiled at her."
"Japanese Phonetic Traps","You must [brush] your teeth twice every single day."
"Japanese Phonetic Traps","The dangerous [pirate] sailed the ship across the ocean."
"Japanese Phonetic Traps","The trained [pilot] landed the airplane safely."
"Japanese Phonetic Traps","Did you remember to [lock] the front door?"
"Japanese Phonetic Traps","He threw a heavy grey [rock] into the deep river."
"Japanese Phonetic Traps","The dog rolled over and rubbed its soft [belly]."
"Japanese Phonetic Traps","I picked a red sweet [berry] from the wild bush."
"Japanese Phonetic Traps","It is [very] cold and windy outside today."
"Japanese Phonetic Traps","They made a romantic wedding [vow] at the church."
"Japanese Phonetic Traps","The famous actor took a polite [bow] on the stage."
"Japanese Phonetic Traps","The total [sum] of the numbers is exactly fifty."
"Japanese Phonetic Traps","I [thought] about the difficult math problem all night."
"Japanese Phonetic Traps","We need to [sort] the dirty laundry into different baskets."
"Japanese Phonetic Traps","The cat chased the small grey [mouse] under the bed."
"Japanese Phonetic Traps","Please chew your food with your [mouth] completely closed."
"IELTS Part 1: Work & Careers","She wants a successful [career] in modern medicine."
"IELTS Part 1: Work & Careers","The company will [employ] fifty new factory workers."
"IELTS Part 1: Work & Careers","The cars are built quickly in a large [factory]."
"IELTS Part 1: Work & Careers","His monthly [income] is quite high for a young graduate."
"IELTS Part 1: Work & Careers","Building a new house requires hard physical [labor]."
"IELTS Part 1: Work & Careers","He works on the tenth floor of a tall [office] building."
"IELTS Part 1: Work & Careers","Primary school teaching is a very noble [profession]."
"IELTS Part 1: Work & Careers","My grandfather will officially [retire] next year."
"IELTS Part 1: Work & Careers","She asked her angry boss for a higher [salary]."
"IELTS Part 1: Work & Careers","The factory workers formed a strong labor [union]."
"IELTS Part 1: Media & Communication","I read an interesting [article] in the newspaper today."
"IELTS Part 1: Media & Communication","The live radio [broadcast] started exactly at noon."
"IELTS Part 1: Media & Communication","Please turn the television to the sports [channel]."
"IELTS Part 1: Media & Communication","We watched a nature [documentary] about wild lions."
"IELTS Part 1: Media & Communication","The front page newspaper [headline] was very shocking."
"IELTS Part 1: Media & Communication","The journalist conducted an [interview] with the president."
"IELTS Part 1: Media & Communication","She published her research in a famous science [journal]."
"IELTS Part 1: Media & Communication","Social [media] is incredibly popular with young teenagers."
"IELTS Part 1: Media & Communication","The famous author will [publish] a brand new book soon."
"IELTS Part 1: Media & Communication","The daily weather [report] predicts heavy rain today."
"IELTS Part 1: History & Society","We visited an [ancient] Roman temple on our holiday."
"IELTS Part 1: History & Society","A [century] is a long period of exactly one hundred years."
"IELTS Part 1: History & Society","Learning about foreign [culture] is very interesting."
"IELTS Part 1: History & Society","A [decade] is a short period of exactly ten years."
"IELTS Part 1: History & Society","The British [empire] was once very wealthy and powerful."
"IELTS Part 1: History & Society","We must protect our national cultural [heritage]."
"IELTS Part 1: History & Society","The old city center is full of [historic] stone buildings."
"IELTS Part 1: History & Society","The natural history [museum] is totally closed on Monday."
"IELTS Part 1: History & Society","Modern [society] depends heavily on fast digital technology."
"IELTS Part 1: History & Society","Celebrating the new year is a very old family [tradition]."
"IELTS Part 1: Materials & Design","This soft white shirt is made of pure [cotton]."
"IELTS Part 1: Materials & Design","The tailor cut the red [fabric] with sharp scissors."
"IELTS Part 1: Materials & Design","He bought a shiny brown [leather] belt for his trousers."
"IELTS Part 1: Materials & Design","The strong bridge is built using heavy steel [metal]."
"IELTS Part 1: Materials & Design","Please remember to recycle your empty [plastic] bottles."
"IELTS Part 1: Materials & Design","The heavy car tires are made of thick black [rubber]."
"IELTS Part 1: Materials & Design","She wears a beautiful [silver] necklace around her neck."
"IELTS Part 1: Materials & Design","The warm blanket has a very rough physical [texture]."
"IELTS Part 1: Materials & Design","They cut down the tall trees to sell the [timber]."
"IELTS Part 1: Materials & Design","They sat comfortably at a round [wooden] dining table."
"IELTS Part 1: Science & Space","A massive [asteroid] crashed into the surface of the moon."
"IELTS Part 1: Science & Space","She studies marine [biology] at the national university."
"IELTS Part 1: Science & Space","The factory spilled a dangerous [chemical] into the river."
"IELTS Part 1: Science & Space","The students did a safe science [experiment] in class."
"IELTS Part 1: Science & Space","Planet Earth is located in the Milky Way [galaxy]."
"IELTS Part 1: Science & Space","There is absolutely zero [gravity] floating in outer space."
"IELTS Part 1: Science & Space","Clean water is a clear and highly drinkable [liquid]."
"IELTS Part 1: Science & Space","Mars is the dusty red [planet] in our solar system."
"IELTS Part 1: Science & Space","Freezing ice is actually just water in a [solid] state."
"IELTS Part 1: Science & Space","Look at the bright stars through the giant glass [telescope]."
"Double Letter Traps","What does this short [abbreviation] stand for?"
"Double Letter Traps","The [allocation] of public money is very strict."
"Double Letter Traps","The radio has a very tall metal [antenna]."
"Double Letter Traps","Her ability to speak French is a huge [asset]."
"Double Letter Traps","You should not make an [assumption] without facts."
"Double Letter Traps","She gave me her absolute [assurance] it was safe."
"Double Letter Traps","I ordered a hot chocolate and a [cappuccino]."
"Double Letter Traps","The old house has thick [copper] water pipes."
"Double Letter Traps","The wealthy old artist was highly [eccentric]."
"Double Letter Traps","Clean drinking water is [essential] for human survival."
"Double Letter Traps","That statement is a complete logical [fallacy]."
"Double Letter Traps","The scientist dug up a rare dinosaur [fossil]."
"Double Letter Traps","You must check your spelling and [grammar]."
"Double Letter Traps","The children's book has a beautiful [illustration]."
"Double Letter Traps","The new injection will make you [immune] to the disease."
"Double Letter Traps","His clean professional suit looked [impeccable]."
"Double Letter Traps","He is always angry and very [pessimistic] about life."
"Double Letter Traps","The government placed a heavy [tariff] on imported cars."
"Double Letter Traps","The dark clouds are a sign of [imminent] rain."
"Double Letter Traps","The country suffered a massive economic [recession]."
"Silent Letters & Vowels","Please [align] the chairs in a perfectly straight line."
"Silent Letters & Vowels","The dusty air makes my [asthma] much worse."
"Silent Letters & Vowels","He bought a beautiful [bouquet] of red roses."
"Silent Letters & Vowels","They drank cold [champagne] to celebrate the victory."
"Silent Letters & Vowels","The rich businessman hired a private [chauffeur]."
"Silent Letters & Vowels","My guilty [conscience] kept me awake all night."
"Silent Letters & Vowels","The moon was a thin silver [crescent] in the sky."
"Silent Letters & Vowels","Can you [guess] the correct answer to the riddle?"
"Silent Letters & Vowels","The jury decided to [indict] the man for the crime."
"Silent Letters & Vowels","The spotted [leopard] sleeps in the tall green tree."
"Silent Letters & Vowels","She grows a beautiful purple [orchid] in the garden."
"Silent Letters & Vowels","The pilot used a [parachute] to escape the falling plane."
"Silent Letters & Vowels","The ancient [plague] wiped out the entire village."
"Silent Letters & Vowels","We arranged a secret [rendezvous] at midnight."
"Silent Letters & Vowels","The spicy hot soup completely burned my [tongue]."
"Silent Letters & Vowels","That is a very [weird] and unusual painting."
"Silent Letters & Vowels","To [whom] did you give the secret envelope?"
"Silent Letters & Vowels","He ate a large [sandwich] for lunch at the cafe."
"Silent Letters & Vowels","The medieval knight wore a suit of heavy [armour]."
"Silent Letters & Vowels","The police found a bloody [weapon] in the forest."
"Japanese Phonetic Traps","Your finger will [bleed] if you cut it with the knife."
"Japanese Phonetic Traps","They [breed] very fast racing horses on the farm."
"Japanese Phonetic Traps","The scientist created a genetic [clone] of the sheep."
"Japanese Phonetic Traps","The ancient queen wore a heavy gold [crown]."
"Japanese Phonetic Traps","He wore a warm black [hat] on his head in the snow."
"Japanese Phonetic Traps","The old dog became very [fat] from eating too much."
"Japanese Phonetic Traps","The famous explorer traveled around the entire [globe]."
"Japanese Phonetic Traps","They planted a small [grove] of sweet orange trees."
"Japanese Phonetic Traps","There was a violent [clash] between the two angry groups."
"Japanese Phonetic Traps","The broken airplane will [crash] into the tall mountain."
"Japanese Phonetic Traps","She did not [blink] her eyes for an entire minute."
"Japanese Phonetic Traps","The poor country is on the [brink] of a terrible war."
"Japanese Phonetic Traps","Please turn on the electric [fan] to cool the room."
"Japanese Phonetic Traps","The delivery driver drives a large white [van]."
"Japanese Phonetic Traps","You must make a [bold] and brave decision."
"Japanese Phonetic Traps","Please [fold] the clean clothes and put them away."
"Japanese Phonetic Traps","Running every day is very good for your [heart]."
"Japanese Phonetic Traps","Did you [hurt] your leg when you fell off the bike?"
"Japanese Phonetic Traps","She tied the white [lace] on her wedding dress."
"Japanese Phonetic Traps","The fast horse won the gold cup in the [race]."
"IELTS Part 1: Health & Medicine","The hospital has a special ward for [maternity] patients."
"IELTS Part 1: Health & Medicine","She studies [anatomy] to understand the human body."
"IELTS Part 1: Health & Medicine","The old man takes [medication] for his blood pressure."
"IELTS Part 1: Health & Medicine","You should check your [cholesterol] levels every year."
"IELTS Part 1: Health & Medicine","The disease spread rapidly and became a global [pandemic]."
"IELTS Part 1: Health & Medicine","A lack of fresh food can lead to severe [malnutrition]."
"IELTS Part 1: Health & Medicine","The doctor used a loud [stethoscope] to listen to my chest."
"IELTS Part 1: Health & Medicine","The rare disease is caused by a [genetic] mutation."
"IELTS Part 1: Health & Medicine","They called a [paramedic] to help the injured driver."
"IELTS Part 1: Health & Medicine","The surgeon wore a sterile [mask] over his face."
"IELTS Part 1: Business & Economics","The company declared [bankruptcy] after losing millions."
"IELTS Part 1: Business & Economics","The national [economy] is growing at a very fast rate."
"IELTS Part 1: Business & Economics","He wants to become a successful wealthy [entrepreneur]."
"IELTS Part 1: Business & Economics","The supermarket has a total [monopoly] on food sales."
"IELTS Part 1: Business & Economics","We must increase our daily [productivity] at the factory."
"IELTS Part 1: Business & Economics","The sales [revenue] doubled during the summer holiday."
"IELTS Part 1: Business & Economics","They signed a legal [contract] to share the business profits."
"IELTS Part 1: Business & Economics","The global supply [chain] was disrupted by the terrible storm."
"IELTS Part 1: Business & Economics","You should diversify your financial [portfolio] to reduce risk."
"IELTS Part 1: Business & Economics","The bank charges a high amount of [interest] on the loan."
"IELTS Part 1: Architecture & Buildings","The tall building has a very strong steel [foundation]."
"IELTS Part 1: Architecture & Buildings","We painted the [exterior] walls of the house bright blue."
"IELTS Part 1: Architecture & Buildings","The ancient stone [cathedral] is located in the city center."
"IELTS Part 1: Architecture & Buildings","They added a large [extension] to the back of the house."
"IELTS Part 1: Architecture & Buildings","The rich king lived in a magnificent royal [palace]."
"IELTS Part 1: Architecture & Buildings","The roof is held up by a solid concrete [pillar]."
"IELTS Part 1: Architecture & Buildings","The famous actor lives in a luxury [mansion] in Hollywood."
"IELTS Part 1: Architecture & Buildings","The construction site is surrounded by a wooden [fence]."
"IELTS Part 1: Architecture & Buildings","The house has a wide open [patio] for outdoor dining."
"IELTS Part 1: Architecture & Buildings","He climbed the tall metal [ladder] to fix the broken roof."
"IELTS Part 1: Law & Government","The country voted to become a democratic [republic]."
"IELTS Part 1: Law & Government","The new law was debated in the national [senate]."
"IELTS Part 1: Law & Government","Smoking is strictly [prohibited] inside the government building."
"IELTS Part 1: Law & Government","The police officer asked to see my official [identification]."
"IELTS Part 1: Law & Government","The young [offender] was ordered to do community service."
"IELTS Part 1: Law & Government","Every citizen has a fundamental human [right] to free speech."
"IELTS Part 1: Law & Government","The strict [legislation] was passed to protect the environment."
"IELTS Part 1: Law & Government","They organized a peaceful [protest] outside the city hall."
"IELTS Part 1: Law & Government","The mayor promised to reduce the amount of [corruption]."
"IELTS Part 1: Law & Government","The country is governed by a written national [constitution]."
"IELTS Part 1: Psychology & Sociology","The teenager suffered from severe social [anxiety]."
"IELTS Part 1: Psychology & Sociology","He studies human [behavior] to understand why people buy things."
"IELTS Part 1: Psychology & Sociology","The loud noise triggered a natural fear [response]."
"IELTS Part 1: Psychology & Sociology","We must break the negative cultural [stereotype]."
"IELTS Part 1: Psychology & Sociology","She has a very high level of emotional [intelligence]."
"IELTS Part 1: Psychology & Sociology","The lack of sunlight caused terrible winter [depression]."
"IELTS Part 1: Psychology & Sociology","The team showed great [solidarity] during the difficult crisis."
"IELTS Part 1: Psychology & Sociology","The clinic helps people recover from [substance] abuse."
"IELTS Part 1: Psychology & Sociology","The new policy aims to promote gender [equality]."
"IELTS Part 1: Psychology & Sociology","They conducted a psychological [survey] on five hundred students."
"Double Letter Traps","The food at the restaurant was completely [acceptable]."
"Double Letter Traps","The two countries formed a strong military [alliance]."
"Double Letter Traps","The king was killed by a secret [assassin]."
"Double Letter Traps","Citizens decided to [boycott] the expensive products."
"Double Letter Traps","He is known for his academic [brilliance]."
"Double Letter Traps","The flight [cancellation] ruined our holiday."
"Double Letter Traps","The heavy [flannel] shirt kept him warm."
"Double Letter Traps","The marketing [gimmick] did not fool the customers."
"Double Letter Traps","The elephant is a massive, hairy [mammoth]."
"Double Letter Traps","They fought against political [oppression]."
"Double Letter Traps","She gave a very [passionate] speech about nature."
"Double Letter Traps","The blue [sapphire] is a very expensive gemstone."
"Double Letter Traps","The hospital bought a new medical [scanner]."
"Double Letter Traps","The town [sheriff] arrested the dangerous thief."
"Double Letter Traps","They tried to [smuggle] gold across the border."
"Double Letter Traps","He was disliked for his wealth and [snobbery]."
"Double Letter Traps","The small grey [squirrel] climbed the oak tree."
"Double Letter Traps","The child was being very [stubborn] and refused to eat."
"Double Letter Traps","Every English word has at least one [syllable]."
"Double Letter Traps","The beautiful butterfly has [symmetrical] wings."
"Silent Letters & Vowels","The sharp sword was kept in a leather [sheath]."
"Silent Letters & Vowels","She rubbed soothing [balm] on her dry hands."
"Silent Letters & Vowels","The artist squeezed paint from the small [tube]."
"Silent Letters & Vowels","The farmer fed oats to the young [calf]."
"Silent Letters & Vowels","He sat on the edge of the wooden [ledge]."
"Silent Letters & Vowels","The baker kneaded the soft [dough] for the bread."
"Silent Letters & Vowels","The wild tiger began to [prowl] through the jungle."
"Silent Letters & Vowels","The scary ghost story caused a terrible [nightmare]."
"Silent Letters & Vowels","The king's [knight] won the royal tournament."
"Silent Letters & Vowels","The plumber used a metal [wrench] to fix the pipe."
"Silent Letters & Vowels","She wrapped a warm [shawl] around her shoulders."
"Silent Letters & Vowels","The bird built its nest on a thick wooden [bough]."
"Silent Letters & Vowels","The old ship was lost in the ocean [abyss]."
"Silent Letters & Vowels","They walked through the dark, damp [dungeon]."
"Silent Letters & Vowels","He felt a sudden [twinge] of pain in his back."
"Silent Letters & Vowels","The annoying [gnat] flew around his face."
"Silent Letters & Vowels","The factory uses a heavy [pneumatic] drill."
"Silent Letters & Vowels","She sang a beautiful religious [psalm] at church."
"Silent Letters & Vowels","The bright light made him [squint] his eyes."
"Silent Letters & Vowels","He ate a sour green [pickle] with his sandwich."
"Japanese Phonetic Traps","The river will [flow] into the deep blue ocean."
"Japanese Phonetic Traps","The seed will eventually [grow] into a tall tree."
"Japanese Phonetic Traps","The royal family sat on the golden [throne]."
"Japanese Phonetic Traps","The dog buried the large white [bone] in the yard."
"Japanese Phonetic Traps","The bird flew over the high mountain [peak]."
"Japanese Phonetic Traps","The bird caught a fish with its sharp [beak]."
"Japanese Phonetic Traps","She wore a bright pink [ribbon] in her hair."
"Japanese Phonetic Traps","The farmer drove his tractor across the green [field]."
"Japanese Phonetic Traps","The knight carried a heavy metal [shield]."
"Japanese Phonetic Traps","The airplane flew very [high] in the sky."
"Japanese Phonetic Traps","She breathed a deep [sigh] of relief."
"Japanese Phonetic Traps","He hit his [head] on the low ceiling."
"Japanese Phonetic Traps","The baker baked a fresh loaf of [bread]."
"Japanese Phonetic Traps","The hot water began to [boil] in the pot."
"Japanese Phonetic Traps","The farmer planted seeds in the rich [soil]."
"Japanese Phonetic Traps","The horse ran fast to win the [race]."
"Japanese Phonetic Traps","She wore a beautiful mask over her [face]."
"Japanese Phonetic Traps","The young boy lost his front [tooth]."
"Japanese Phonetic Traps","The detective promised to find the [truth]."
"Japanese Phonetic Traps","The wild bear has thick brown [fur]."
"IELTS Part 1: Global Issues","The world must fight against extreme [poverty]."
"IELTS Part 1: Global Issues","The government must provide safe public [housing]."
"IELTS Part 1: Global Issues","Rising ocean levels are a serious [threat]."
"IELTS Part 1: Global Issues","Many countries face a severe water [shortage]."
"IELTS Part 1: Global Issues","We need to reduce our carbon [footprint]."
"IELTS Part 1: Global Issues","The charity helps feed [starving] children."
"IELTS Part 1: Global Issues","The new policy aims to reduce [inequality]."
"IELTS Part 1: Global Issues","The city suffers from terrible air [smog]."
"IELTS Part 1: Global Issues","The forest fire caused massive [destruction]."
"IELTS Part 1: Global Issues","The global [population] continues to grow rapidly."
"IELTS Part 1: Global Issues","Many people migrate to find better [employment]."
"IELTS Part 1: Global Issues","The hospital desperately needs more medical [supplies]."
"IELTS Part 1: Global Issues","The war forced many people to become [refugees]."
"IELTS Part 1: Global Issues","The United Nations promotes global [peace]."
"IELTS Part 1: Global Issues","The disease spread quickly across the [border]."
"IELTS Part 1: Global Issues","Education is a fundamental human [right]."
"IELTS Part 1: Global Issues","The government must protect free [speech]."
"IELTS Part 1: Global Issues","The economic [crisis] caused many businesses to close."
"IELTS Part 1: Global Issues","The scientists discovered a [cure] for the illness."
"IELTS Part 1: Global Issues","The international [treaty] was signed by fifty countries."
"IELTS Part 1: Language & Culture","I want to improve my speaking [fluency]."
"IELTS Part 1: Language & Culture","You must practice speaking to improve your [pronunciation]."
"IELTS Part 1: Language & Culture","The student wrote a long academic [essay]."
"IELTS Part 1: Language & Culture","The teacher explained the complex [concept] clearly."
"IELTS Part 1: Language & Culture","Can you translate this [sentence] into Japanese?"
"IELTS Part 1: Language & Culture","The book was translated into fifty different [languages]."
"IELTS Part 1: Language & Culture","The speaker gave a very inspiring [presentation]."
"IELTS Part 1: Language & Culture","She has a very strong Australian [accent]."
"IELTS Part 1: Language & Culture","The dictionary provides the exact [definition] of the word."
"IELTS Part 1: Language & Culture","The two friends had a long [conversation]."
"IELTS Part 1: Language & Culture","He wrote a formal [letter] to the company manager."
"IELTS Part 1: Language & Culture","The journalist interviewed the famous [author]."
"IELTS Part 1: Language & Culture","The television [news] reported the local weather."
"IELTS Part 1: Language & Culture","The company launched a massive [marketing] strategy."
"IELTS Part 1: Language & Culture","The students debated the controversial [topic] in class."
"IELTS Part 1: Language & Culture","The library has a massive collection of [literature]."
"IELTS Part 1: Language & Culture","He sent a quick text [message] to his mother."
"IELTS Part 1: Language & Culture","The professor published a scientific [article]."
"IELTS Part 1: Language & Culture","The politician gave a powerful [speech] to the crowd."
"IELTS Part 1: Language & Culture","Learning a new language requires patience and [practice]."
"IELTS Part 1: Language & Culture","He is studying the complex rules of English [grammar]."
"IELTS Part 1: Language & Culture","The ancient ruins belong to a lost [civilization]."
"IELTS Part 1: Language & Culture","She respects her family's cultural [heritage]."
"IELTS Part 1: Language & Culture","They celebrated the local town [festival]."
"IELTS Part 1: Language & Culture","We tried the traditional regional [cuisine]."
"Katakana Spelling Traps","We bought fresh green [celery] from the supermarket."
"Katakana Spelling Traps","He has a severe [allergy] to peanuts and dairy."
"Katakana Spelling Traps","The doctor gave her a [vaccine] to prevent the illness."
"Katakana Spelling Traps","The computer was infected with a dangerous [virus]."
"Katakana Spelling Traps","Wine and beer contain a high amount of [alcohol]."
"Katakana Spelling Traps","The main [theme] of the festival is global peace."
"Katakana Spelling Traps","She has been training to run a full [marathon]."
"Katakana Spelling Traps","He put on a pair of clear [vinyl] gloves to clean."
"Katakana Spelling Traps","Oranges are an excellent source of [vitamin] C."
"Katakana Spelling Traps","Bake the cake in the hot [oven] for forty minutes."
"Katakana Spelling Traps","Please stick a name [label] on your travel bag."
"Katakana Spelling Traps","The rich man sailed his luxury [yacht] across the sea."
"Katakana Spelling Traps","It is cold, so you should wear a warm wool [sweater]."
"Katakana Spelling Traps","Use a dry cotton [towel] to wipe your wet hair."
"Katakana Spelling Traps","The train drove through the dark underground [tunnel]."
"Katakana Spelling Traps","The new car engine runs in a very [smooth] way."
"Katakana Spelling Traps","The athlete received a relaxing back [massage]."
"Katakana Spelling Traps","I left a voice [message] on your mobile phone."
"Katakana Spelling Traps","Please mark the date on your desk [calendar]."
"Katakana Spelling Traps","I would like a scoop of sweet [vanilla] ice cream."
"Katakana Spelling Traps","She wants to pursue a professional [career] in medicine."
"Katakana Spelling Traps","We booked a guided walking [tour] of the old city."
"Katakana Spelling Traps","Turn on the electric [heater] to warm up the room."
"Katakana Spelling Traps","Do not forget to take your paper [receipt] from the shop."
"Katakana Spelling Traps","The beautiful gold ring has a large [diamond]."
"Katakana Spelling Traps","The company paid the workers a large holiday [bonus]."
"Katakana Spelling Traps","They recorded the new song in a music [studio]."
"Katakana Spelling Traps","You need to [iron] your formal shirt before the interview."
"Katakana Spelling Traps","The astronaut slept in a tiny space [capsule]."
"Katakana Spelling Traps","The artist painted a landscape on the blank [canvas]."
IDP Tricky Words,Regular exercise is highly [beneficial] for cardiovascular health.
IDP Tricky Words,The professor is a highly [influential] figure in the field of neuroscience.
IDP Tricky Words,The evidence presented in court was entirely [circumstantial].
IDP Tricky Words,The patient was [referred] to a specialist for further treatment.
IDP Tricky Words,We are at the [beginning] of a new era in digital technology.
IDP Tricky Words,These new archaeological discoveries [excite] researchers around the world.
IDP Tricky Words,We must take action to protect the natural [environment] from pollution.
IDP Tricky Words,It is a great [privilege] to study at such a prestigious university.
IDP Tricky Words,Modern consumers are becoming much more environmentally [conscious].
IDP Tricky Words,Her prolonged [absence] from class severely affected her final grade.
IDP Tricky Words,You must study consistently to [achieve] a high score on the exam.
IDP Tricky Words,My [colleague] will cover my shift while I am on vacation.
IDP Tricky Words,The damage to the laboratory equipment was a [deliberate] act of vandalism.
IDP Tricky Words,English is the primary [language] used in international business.
IDP Tricky Words,The main university [library] is open 24 hours during exam week.
IDP Tricky Words,We booked a table at the new Italian [restaurant] for 8 PM.
IDP Tricky Words,The shop prides itself on offering excellent [customer] service.
IDP Tricky Words,Many scientists [believe] that climate change is accelerating rapidly.
IDP Tricky Words,The city's architecture is a fascinating mix of ancient and [modern] styles.
IDP Tricky Words,The final chapter of the physics textbook is particularly [difficult].
IDP Tricky Words,The new tax policy caused a massive amount of public [controversy].
IDP Tricky Words,Please write your final answers on a [separate] sheet of paper.
IDP Tricky Words,"In [comparison] to last year, our retail sales have dropped significantly."
IDP Tricky Words,The mountain resort is internationally famous for its excellent [skiing] facilities.
IDP Tricky Words,Starting a new [business] requires a significant amount of capital.
IDP Tricky Words,The [professor] will upload the lecture slides to the portal this evening.
IDP Tricky Words,The new shopping mall is located on the corner of fifth [avenue].
IDP Tricky Words,The country is investing heavily in the development of [nuclear] energy.
IDP Tricky Words,The two competing scientific theories are [basically] identical in their core assumptions.
IDP Tricky Words,Learning a new instrument requires a huge time [commitment].
IDP Tricky Words,Many animal species will [disappear] if their natural habitats are destroyed.
IDP Tricky Words,Moving to a new country for university is a very [exciting] experience.
IDP Tricky Words,The lecture was so [boring] that half the students fell asleep.
IDP Tricky Words,The music features a very complex and fast-paced [rhythm].
IDP Tricky Words,"If the fire alarm sounds, please evacuate the building [immediately]."
IDP Tricky Words,It is absolutely [necessary] to submit your visa application on time.
IDP Tricky Words,"The national museum displays the [original] painting, not a replica."
IDP Tricky Words,We need to set highly [realistic] goals for the project timeline.
IDP Tricky Words,You will [receive] a confirmation email within 24 hours of booking.
IDP Tricky Words,The autumn semester officially begins in the middle of [February].
IDP Tricky Words,There is a growing [tendency] for young professionals to delay starting a family.
IDP Tricky Words,Childhood [obesity] is quickly becoming a major global public health crisis.
IDP Tricky Words,The average age of [marriage] has increased in recent decades.
IDP Tricky Words,The government is heavily subsidizing the installation of [solar] panels.
IDP Tricky Words,The aviation industry is desperately searching for alternative [fuel] sources.
IDP Tricky Words,The locals in the rural village were incredibly welcoming and [friendly].
IDP Tricky Words,The student union building will remain open [until] midnight.
IDP Tricky Words,The coastal drive offers [beautiful] views of the Pacific Ocean.
IDP Tricky Words,Traffic on the main [highway] is usually heavily congested at 5 PM.
IDP Tricky Words,A remarkably high [percentage] of the students pass the exam on their first try.
IDP Tricky Words,The capital city currently has a population of over three [million] people.
IDP Tricky Words,The front-row concert tickets cost exactly two [thousand] yen.
IDP Tricky Words,The stone artifact is estimated by historians to be over five [hundred] years old.
IDP Tricky Words,The price of imported oil will often [fluctuate] wildly during times of crisis.
IDP Tricky Words,Retail sales usually reach their absolute [peak] during the holiday season.
IDP Tricky Words,The local economy took over five years to fully [recover] from the recession.
IDP Tricky Words,He is a highly talented [musician] who plays three different orchestral instruments.
IDP Tricky Words,All academic assignments must be typed on a [computer] and printed.
IDP Tricky Words,You need to install the latest [software] update to use the program safely.
IDP Tricky Words,The entire guest lecture was recorded on [video] for the online students.
IDP Tricky Words,The lead detective is currently investigating a highly publicized [murder] case.
IDP Tricky Words,The main [topic] of today's afternoon seminar is marine biology.
IDP Tricky Words,The logistics company hired a [temporary] worker to cover the busy summer season.
IDP Tricky Words,"I would love to attend the party, but [unfortunately], I am busy that day."
IDP Tricky Words,One major [disadvantage] of rural living is the severe lack of public transport.
IDP Tricky Words,The author presents a highly compelling [argument] against the new environmental law.
IDP Tricky Words,The weekly staff meeting is held in the boardroom every [Wednesday] morning.
IDP Tricky Words,My next-door [neighbour] is always playing loud music late at night.
IDP Tricky Words,Learning a [foreign] language has been proven to improve cognitive function.
IDP Tricky Words,Studying abroad provides a great [opportunity] to experience entirely new cultures.
IDP Tricky Words,The international flight was delayed [because] of severe thunderstorms.
Academic Subjects,She decided to major in [mathematics] because she loves solving complex equations.
Academic Subjects,The [psychology] department is conducting a study on human memory.
Academic Subjects,He is studying [architecture] and hopes to design sustainable buildings.
Academic Subjects,The [philosophy] class spent the entire semester discussing the ethics of artificial intelligence.
Academic Subjects,Classical [literature] often reflects the social issues of its time period.
Academic Subjects,The [engineering] students built a solar-powered car for their final project.
Academic Subjects,Physical [geography] focuses on the Earth's natural environments and landscapes.
Academic Subjects,A degree in [economics] helps you understand how global markets function.
Academic Subjects,Modern [agriculture] relies heavily on technology to maximize crop yields.
Academic Subjects,The [chemistry] lab is equipped with safety showers and eye-wash stations.
Academic Subjects,Quantum [physics] is notoriously difficult for undergraduate students to grasp.
Campus Locations,The ancient artifacts are currently on display in the national [museum].
Campus Locations,Students must wear safety goggles when conducting experiments in the [laboratory].
Campus Locations,The drama society is performing a Shakespeare play in the campus [theater].
Campus Locations,The university is building a massive new [stadium] for the football team.
Campus Locations,You can play basketball or use the weights in the student [gymnasium].
Campus Locations,The [cafeteria] serves hot meals from 11 AM to 2 PM every day.
Campus Locations,Please walk quietly down the [corridor] while classes are in session.
Campus Locations,The luxury apartment features a large outdoor [balcony] with ocean views.
Campus Locations,The art [exhibition] will feature works from local Indigenous artists.
Days & Months,The deadline for the first semester application is the end of [January].
Days & Months,The weather is typically very hot and humid during [August].
Days & Months,The new academic year always begins in the first week of [September].
Days & Months,The leaves on the trees begin to change color in [October].
Days & Months,We are expecting a shipment of new textbooks in [November].
Days & Months,The campus is completely deserted during the winter break in [December].
Days & Months,The biology tutorial has been moved from Monday to [Tuesday].
Days & Months,The final exam will be held in the main hall next [Thursday].
Days & Months,The library has reduced opening hours on [Saturday] and Sunday.
Double Letter Traps,The steering [committee] will vote on the proposed budget tomorrow.
Double Letter Traps,I didn't want to [embarrass] him by pointing out his obvious mistake.
Double Letter Traps,News media will often [exaggerate] the details of a story to get more views.
Double Letter Traps,The two roads run [parallel] to each other for exactly ten miles.
Double Letter Traps,Hard work and dedication are the keys to long-term [success].
Double Letter Traps,The suspect was found to [possess] several illegal firearms.
Double Letter Traps,Please check the student [bulletin] board for updates on club meetings.
Double Letter Traps,It is considered very rude to [interrupt] someone while they are speaking.
Double Letter Traps,The manager faced a serious ethical [dilemma] regarding the safety protocols.
Double Letter Traps,The artifact dates back to the first [millennium] BC.
Double Letter Traps,Studies show that stress levels [correlate] strongly with poor sleep.
Double Letter Traps,The wild dog became highly [aggressive] when approached by the hikers.
Suffix Traps (-ence / -ance),The building requires constant [maintenance] to keep the roof from leaking.
Suffix Traps (-ence / -ance),The suspect changed his physical [appearance] to avoid being recognized.
Suffix Traps (-ence / -ance),The bacteria developed a strong [resistance] to the antibiotic drugs.
Suffix Traps (-ence / -ance),The school has a strict zero [tolerance] policy for bullying.
Suffix Traps (-ence / -ance),Many people doubt the [existence] of life on other planets.
Suffix Traps (-ence / -ance),The country fought a long and brutal war for its [independence].
Suffix Traps (-ence / -ance),"When booking a flight, please state your meal [preference]."
Suffix Traps (-ence / -ance),Flooding is a rare [occurrence] in this desert region.
Suffix Traps (-ence / -ance),There is a significant [difference] between the two competing products.
Suffix Traps (-ence / -ance),Please provide at least one professional [reference] on your resume.
Vowels & Silent Letters,The photography competition is open to both professionals and [amateur] photographers.
Vowels & Silent Letters,A successful [entrepreneur] must be willing to take calculated financial risks.
Vowels & Silent Letters,We cannot [guarantee] that the package will arrive before the weekend.
Vowels & Silent Letters,The corporate [hierarchy] makes it difficult for junior staff to suggest ideas.
Vowels & Silent Letters,The army [lieutenant] gave a direct order to his soldiers.
Vowels & Silent Letters,It is difficult to [maneuver] a large truck through these narrow city streets.
Vowels & Silent Letters,The invention of the smartphone created a fundamental [paradigm] shift in communication.
Vowels & Silent Letters,The train is running exactly on [schedule] despite the heavy rain.
Vowels & Silent Letters,You need to use a [vacuum] cleaner to get the dog hair out of the carpet.
Vowels & Silent Letters,The weather has been incredibly [weird] and unpredictable this season.
Task 1 Data Vocabulary,The value of the company's shares [plummeted] following the scandal.
Task 1 Data Vocabulary,"After the new advertising campaign, product sales [soared] to record highs."
Task 1 Data Vocabulary,Population growth eventually [plateaued] at roughly five million people.
Task 1 Data Vocabulary,Economic growth has [stagnated] due to a lack of foreign investment.
Task 1 Data Vocabulary,A significant [proportion] of the budget is spent on national defense.
Task 1 Data Vocabulary,The vast [majority] of voters supported the new environmental legislation.
Task 1 Data Vocabulary,Only a tiny [minority] of students failed the final examination.
Task 1 Data Vocabulary,The journey takes [approximately] two hours by high-speed train.
Task 1 Data Vocabulary,"The total cost was [exactly] five thousand dollars, with no extra fees."
Task 2 Academic Vocab,A severe lack of sleep is a direct [consequence] of modern work culture.
Task 2 Academic Vocab,The initial error caused a series of [subsequent] failures in the system.
Task 2 Academic Vocab,The current funding is not [adequate] to cover the cost of repairs.
Task 2 Academic Vocab,The punishment must be [proportionate] to the severity of the crime.
Task 2 Academic Vocab,The successful [implementation] of the policy relies on public support.
Task 2 Academic Vocab,Technological [innovation] is the driving force behind economic growth.
Task 2 Academic Vocab,The scientists conducted an experiment to test their initial [hypothesis].
Task 2 Academic Vocab,A detailed [analysis] of the data reveals a troubling upward trend.
Task 2 Academic Vocab,The vehicles are divided into a specific [category] based on their weight.
Task 2 Academic Vocab,The marketing team needs to develop a new [strategy] for the social media campaign.
Task 2 Academic Vocab,Traveling abroad gives students a much broader global [perspective].
Task 2 Academic Vocab,Freedom of speech is considered a [fundamental] human right in democracies.
Task 2 Academic Vocab,"If we do not reduce emissions, ecological disaster is entirely [inevitable]."
Task 2 Academic Vocab,It is absolutely [crucial] that we address this issue immediately.
Task 2 Academic Vocab,There has been a [significant] improvement in his writing score.
Task 2 Academic Vocab,It is [apparent] from the data that the current approach is failing.
Task 2 Academic Vocab,The evidence provided by the defense was not [sufficient] to prove innocence.
Task 2 Academic Vocab,This type of tropical disease is highly [prevalent] in humid climates.
Task 2 Academic Vocab,Please ensure all documentation is [relevant] to the job you are applying for.
Task 2 Academic Vocab,The teacher will [evaluate] the students based on their final presentations.
Task 2 Academic Vocab,Reading extensively is the best way to improve your academic [vocabulary].
Task 2 Academic Vocab,The laboratory must [validate] the test results before they are published.
Task 2 Academic Vocab,Could you please [elaborate] on the second point you made in your essay?
Task 2 Academic Vocab,The speaker used several diagrams to [illustrate] his complex theory.
Task 2 Academic Vocab,A vegetarian diet completely seeks to [eliminate] meat from daily meals.
Task 2 Academic Vocab,The government introduced a new strict [policy] regarding plastic waste.
Task 2 Academic Vocab,Einstein's [theory] of relativity completely changed our understanding of physics.
Task 2 Academic Vocab,The euro is the official [currency] used by most countries in the European Union.
Task 2 Academic Vocab,The new testing method greatly improves the [accuracy] of the medical diagnosis.
Core Academic Words (AWL),The committee will [assess] the damage caused by the recent storm.
Core Academic Words (AWL),The [concept] of artificial intelligence is difficult for some people to grasp.
Core Academic Words (AWL),You cannot understand this historical event without knowing the political [context].
Core Academic Words (AWL),The researchers collected massive amounts of [data] over a ten-year period.
Core Academic Words (AWL),Many English words actually [derive] from ancient Latin and Greek.
Core Academic Words (AWL),Price is a major deciding [factor] for consumers when buying a car.
Core Academic Words (AWL),The doctor was able to quickly [identify] the cause of the illness.
Core Academic Words (AWL),Red flashing lights usually [indicate] a severe mechanical warning.
Core Academic Words (AWL),Traffic congestion is a [major] problem in almost all capital cities.
Core Academic Words (AWL),The traditional [method] of farming is no longer sustainable.
Core Academic Words (AWL),Earthquakes can [occur] without any prior warning whatsoever.
Core Academic Words (AWL),The medieval [period] is often misunderstood by modern historians.
Core Academic Words (AWL),The basic [principle] of the design is to maximize natural sunlight.
Core Academic Words (AWL),Applying for a passport can be a long and frustrating [process].
Core Academic Words (AWL),Further [research] is required before the drug can be sold to the public.
Core Academic Words (AWL),The immune system will naturally [respond] to the presence of a virus.
Core Academic Words (AWL),The agricultural [sector] employs thousands of workers in this region.
Core Academic Words (AWL),Wind is a highly reliable [source] of renewable energy.
Core Academic Words (AWL),The doctor gave me highly [specific] instructions regarding my medication.
Core Academic Words (AWL),The physical [structure] of the bridge was weakened by the earthquake.
Core Academic Words (AWL),Weather is an unpredictable [variable] that affects crop yields every year.
Core Academic Words (AWL),The company is trying to [acquire] its smaller rival to dominate the market.
Core Academic Words (AWL),Lack of sleep will heavily [affect] your ability to concentrate in class.
Core Academic Words (AWL),We must consider every [aspect] of the problem before making a decision.
Core Academic Words (AWL),The situation is incredibly [complex] and cannot be solved overnight.
Core Academic Words (AWL),The scientists were forced to [conclude] that their hypothesis was incorrect.
Core Academic Words (AWL),The university will [conduct] a thorough review of its admission policies.
Core Academic Words (AWL),Food is a central part of traditional Japanese [culture].
Core Academic Words (AWL),The graphic artist was hired to [design] a new logo for the brand.
Core Academic Words (AWL),Water is an essential [element] for all known forms of life.
Core Academic Words (AWL),Many people falsely [equate] wealth with genuine happiness.
Core Academic Words (AWL),The smartphone's most popular [feature] is its high-resolution camera.
Core Academic Words (AWL),Climate change will heavily [impact] coastal communities in the future.
Core Academic Words (AWL),You can seriously [injure] yourself if you lift weights incorrectly.
Core Academic Words (AWL),The police will thoroughly [investigate] the scene of the crime.
Core Academic Words (AWL),Please place every single [item] into the scanning bin at security.
Core Academic Words (AWL),The findings were published in a highly respected medical [journal].
Core Academic Words (AWL),It is difficult to [maintain] a healthy diet while traveling constantly.
Core Academic Words (AWL),It is perfectly [normal] to feel nervous before a speaking exam.
Core Academic Words (AWL),You must [obtain] a visa before you can legally enter the country.
Core Academic Words (AWL),All students are expected to actively [participate] in group discussions.
Core Academic Words (AWL),Dogs can [perceive] sounds that are completely inaudible to human ears.
Core Academic Words (AWL),The new community center had a highly [positive] effect on the neighborhood.
Core Academic Words (AWL),The abandoned warehouse poses a [potential] fire hazard to the street.
Core Academic Words (AWL),The current manager is much more efficient than the [previous] one.
Core Academic Words (AWL),The [primary] reason for his resignation was a lack of job satisfaction.
Core Academic Words (AWL),The store offers a wide [range] of products for outdoor enthusiasts.
Core Academic Words (AWL),This specific [region] is known for its excellent wine production.
Core Academic Words (AWL),The government is attempting to strictly [regulate] the banking industry.
Core Academic Words (AWL),Many older citizens [reside] in quiet towns away from the bustling city.
Core Academic Words (AWL),Fresh water is becoming a highly scarce [resource] in many countries.
Core Academic Words (AWL),The new law will severely [restrict] the sale of tobacco products.
Core Academic Words (AWL),Please ensure that you tightly [secure] your luggage before the flight.
Core Academic Words (AWL),Many refugees cross the border to [seek] safety and a better life.
Core Academic Words (AWL),You must [select] three elective subjects for your final semester.
`