const task1Data = [
    // ==========================================
    // TYPE 1: SINGLE LINE GRAPHS (Trend Vocabulary)
    // ==========================================
    {
        title: "Electric Car Sales (Thousands)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [{ label: "Total Sales", data: [5, 15, 35, 36, 35, 37] }],
        questions: [
            {
                prompt: "Look at the period from 2010 to 2014. What happened to the sales?",
                correct: "They saw an exponential surge",
                wrong: ["They halved", "They plummeted", "They plateaued completely"]
            },
            {
                prompt: "Look at the period from 2016 to 2020. How would you describe the trend?",
                correct: "It largely plateaued",
                wrong: ["It crashed significantly", "It surged dramatically", "It fluctuated wildly"]
            }
        ]
    },
    {
        title: "Unemployment Rate (%)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "National Rate", data: [9.5, 5.2, 2.1, 2.0] }],
        questions: [
            {
                prompt: "Look at the shift from Q1 to Q3. Which phrase best describes this trajectory?",
                correct: "Experienced a sharp plummet",
                wrong: ["Plateaued entirely", "Soared unpredictably", "Marginally dipped"]
            },
            {
                prompt: "What happened between Q3 and Q4?",
                correct: "The rate finally levelled off",
                wrong: ["It experienced a sharp spike", "It fluctuated slightly", "It halved abruptly"]
            }
        ]
    },
    {
        title: "Retail Profit Margins",
        chartType: "line",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "Profit (%)", data: [60, 58, 62, 15, 65] }],
        questions: [
            {
                prompt: "Look at the data from 2016 to 2018. How would you describe it?",
                correct: "It remained relatively stable",
                wrong: ["It plummeted", "It grew exponentially", "It doubled"]
            },
            {
                prompt: "Look specifically at 2019. Which phrase applies best?",
                correct: "Experienced a sharp, sudden dip",
                wrong: ["Saw an exponential rise", "Remained largely unchanged", "Plateaued completely"]
            }
        ]
    },

    // ==========================================
    // TYPE 2: PIE CHARTS (Proportions & Fractions)
    // ==========================================
    {
        title: "Primary Energy Sources (2020)",
        chartType: "pie",
        labels: ["Coal", "Nuclear", "Solar", "Wind"],
        datasets: [{ label: "Energy (%)", data: [65, 20, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe the usage of Coal?",
                correct: "It accounted for a significant majority",
                wrong: ["It constituted a mere fraction", "It comprised exactly a quarter", "It represented a minority"]
            },
            {
                prompt: "How would you describe the usage of Wind energy?",
                correct: "It made up a mere fraction",
                wrong: ["It constituted the largest proportion", "It accounted for exactly half", "It was the predominant source"]
            }
        ]
    },
    {
        title: "Student Transport to University",
        chartType: "pie",
        labels: ["Bus", "Bicycle", "Walking", "Car"],
        datasets: [{ label: "Students (%)", data: [25, 35, 30, 10] }],
        questions: [
            {
                prompt: "How would you describe the proportion of students taking the Bus?",
                correct: "It comprised precisely a quarter",
                wrong: ["It accounted for a massive majority", "It made up exactly half", "It was a negligible amount"]
            },
            {
                prompt: "Which phrase best describes Bicycle usage?",
                correct: "It constituted the largest single proportion",
                wrong: ["It made up a tiny minority", "It was the least preferred method", "It accounted for nearly all students"]
            }
        ]
    },
    {
        title: "University Budget Allocation",
        chartType: "pie",
        labels: ["Staff Salaries", "Research", "Library", "Sports Facilities"],
        datasets: [{ label: "Budget (%)", data: [50, 30, 15, 5] }],
        questions: [
            {
                prompt: "How would you describe the allocation for Staff Salaries?",
                correct: "It accounted for exactly half of the budget",
                wrong: ["It comprised a mere fraction", "It was roughly a third", "It constituted a small minority"]
            },
            {
                prompt: "How would you describe the Sports Facilities budget?",
                correct: "It represented a negligible proportion",
                wrong: ["It constituted the absolute majority", "It made up exactly a quarter", "It was the primary expenditure"]
            }
        ]
    },

    // ==========================================
    // TYPE 3: BAR CHARTS (Comparisons)
    // ==========================================
    {
        title: "Coffee Consumption by Country (Liters/Year)",
        chartType: "bar",
        labels: ["Finland", "Sweden", "UK", "Japan"],
        datasets: [{ label: "Consumption", data: [120, 110, 30, 25] }],
        questions: [
            {
                prompt: "How does Finland's consumption compare to the UK and Japan?",
                correct: "It stands in stark contrast",
                wrong: ["It shows a remarkably similar pattern", "It is marginally lower", "It mirrors their consumption exactly"]
            },
            {
                prompt: "Compare the UK and Japan.",
                correct: "They share a broadly similar pattern",
                wrong: ["They are vastly different", "The UK consumed three times as much", "Japan significantly outperformed the UK"]
            }
        ]
    },
    {
        title: "Smartphone Usage by Age Group (Hours/Day)",
        chartType: "bar",
        labels: ["15-20", "21-30", "31-40", "41-50"],
        datasets: [{ label: "Usage Hours", data: [8, 6, 4, 2] }],
        questions: [
            {
                prompt: "Compare the 15-20 age group with the 41-50 group.",
                correct: "The youngest group used devices four times as much",
                wrong: ["They showed an identical pattern", "The oldest group significantly outperformed them", "The difference was entirely marginal"]
            },
            {
                prompt: "How would you describe the overall pattern across the age groups?",
                correct: "An inverse correlation between age and usage",
                wrong: ["A direct correlation", "A completely random distribution", "A uniform pattern across all ages"]
            }
        ]
    },
    {
        title: "Annual Museum Visitors (Millions)",
        chartType: "bar",
        labels: ["Paris", "London", "Rome"],
        datasets: [{ label: "2018", data: [10, 8, 5] }, { label: "2019", data: [12, 10, 6] }],
        questions: [
            {
                prompt: "How does Paris in 2019 compare to Rome in 2019?",
                correct: "Paris saw exactly double the number of visitors",
                wrong: ["They share an identical figure", "Rome marginally outperformed Paris", "Paris had three times the amount"]
            },
            {
                prompt: "What is the general trend for all three cities from 2018 to 2019?",
                correct: "They all experienced proportional growth",
                wrong: ["They all suffered a dramatic decline", "They fluctuated wildly", "They plateaued completely"]
            }
        ]
    },

    // ==========================================
    // TYPE 4: MULTI-LINE GRAPHS (Intersections)
    // ==========================================
    {
        title: "Media Sales (Millions)",
        chartType: "line",
        labels: ["2005", "2010", "2015", "2020"],
        datasets: [
            { label: "DVDs", data: [150, 100, 20, 5] },
            { label: "Streaming", data: [5, 15, 80, 200] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two formats?",
                correct: "They show completely inverse trajectories",
                wrong: ["They closely mirrored one another", "They both plateaued simultaneously", "They shared a similar growth pattern"]
            },
            {
                prompt: "What happened specifically between 2010 and 2015?",
                correct: "Streaming subscriptions finally overtook DVD sales",
                wrong: ["DVD sales briefly recovered", "Both markets entirely collapsed", "Streaming sales plummeted abruptly"]
            }
        ]
    },
    {
        title: "Energy Production (Terawatts)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Coal", data: [80, 90, 60, 20] },
            { label: "Solar", data: [0, 5, 45, 95] }
        ],
        questions: [
            {
                prompt: "Look at the period just after 2010. What happened?",
                correct: "The lines intersected as Solar became dominant",
                wrong: ["They ran completely parallel", "Coal recovered its leading position", "They both plateaued simultaneously"]
            },
            {
                prompt: "How would you describe the trajectory of Solar from 1990 to 2020?",
                correct: "A consistent, exponential surge",
                wrong: ["Wild fluctuations followed by a dip", "A steady decline", "A prolonged period of stagnation"]
            }
        ]
    },
    {
        title: "Retail Sales: Physical vs Online",
        chartType: "line",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            { label: "In-Store", data: [100, 95, 20, 15, 10] },
            { label: "Online", data: [40, 45, 110, 120, 125] }
        ],
        questions: [
            {
                prompt: "What occurred precisely in March?",
                correct: "Online sales surpassed physical sales",
                wrong: ["Physical sales reached their peak", "Both sectors completely collapsed", "The sales numbers were identical"]
            },
            {
                prompt: "How would you describe In-Store sales from March to May?",
                correct: "They bottomed out and remained low",
                wrong: ["They recovered swiftly", "They mirrored online sales exactly", "They fluctuated wildly"]
            }
        ]
    },
    // ==========================================
    // TYPE 1: SINGLE LINE GRAPHS (Expansion)
    // ==========================================
    {
        title: "National Literacy Rates (%)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{ label: "Literacy Rate", data: [65, 75, 80, 82, 83] }],
        questions: [
            {
                prompt: "How would you describe the growth from 1980 to 2000?",
                correct: "A sharp and consistent upward trajectory",
                wrong: ["An exponential surge", "A period of erratic fluctuation", "A marginal increase"]
            },
            {
                prompt: "Look at the period from 2000 to 2020. What is the pattern?",
                correct: "The rate levelled out to a gradual plateau",
                wrong: ["It crashed significantly", "It reached a sudden trough", "It doubled in value"]
            }
        ]
    },
    {
        title: "Average Weekly Television Viewing (Hours)",
        chartType: "line",
        labels: ["2005", "2008", "2011", "2014", "2017", "2020"],
        datasets: [{ label: "Viewing Time", data: [35, 34, 30, 20, 15, 14] }],
        questions: [
            {
                prompt: "Look at the trajectory between 2008 and 2017. What happened?",
                correct: "It experienced a steep and continuous decline",
                wrong: ["It fluctuated wildly", "It saw a sharp, sudden spike", "It plateaued entirely"]
            },
            {
                prompt: "What is the overall summary of the fifteen-year period?",
                correct: "A consistent downward trend in viewing habits",
                wrong: ["A volatile but ultimately static period", "An exponential rise in consumption", "A temporary dip followed by a recovery"]
            }
        ]
    },
    {
        title: "Domestic Flight Passengers (Millions)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "Passengers", data: [12, 14, 45, 15] }],
        questions: [
            {
                prompt: "What happened specifically during Q3?",
                correct: "Passenger numbers saw a dramatic peak",
                wrong: ["They bottomed out", "They remained completely static", "They plummeted sharply"]
            },
            {
                prompt: "Compare Q4 to Q3. How would you describe the shift?",
                correct: "A severe plummet returning to previous levels",
                wrong: ["A gradual, steady decline", "A marginal decrease", "A period of total stagnation"]
            }
        ]
    },

    // ==========================================
    // TYPE 2: PIE CHARTS (Expansion)
    // ==========================================
    {
        title: "Global Greenhouse Gas Sources",
        chartType: "pie",
        labels: ["Electricity", "Agriculture", "Industry", "Transportation"],
        datasets: [{ label: "Emissions (%)", data: [40, 30, 20, 10] }],
        questions: [
            {
                prompt: "How would you describe the proportion generated by Electricity?",
                correct: "It constituted the largest single proportion",
                wrong: ["It accounted for a tiny minority", "It was exactly a quarter", "It made up a mere fraction"]
            },
            {
                prompt: "Compare Transportation to Electricity.",
                correct: "Transportation accounted for exactly a quarter of the Electricity figure",
                wrong: ["They represented an identical proportion", "Transportation was the predominant source", "Electricity comprised a negligible amount"]
            }
        ]
    },
    {
        title: "Household Monthly Expenditure",
        chartType: "pie",
        labels: ["Housing", "Food", "Transport", "Entertainment"],
        datasets: [{ label: "Spending (%)", data: [50, 25, 15, 10] }],
        questions: [
            {
                prompt: "How would you describe the spending on Housing?",
                correct: "It comprised exactly half of the total budget",
                wrong: ["It constituted a small minority", "It was roughly a third", "It accounted for a mere fraction"]
            },
            {
                prompt: "How would you describe the spending on Food?",
                correct: "It accounted for precisely a quarter of outgoings",
                wrong: ["It was the predominant expenditure", "It made up a negligible proportion", "It was exactly double the Housing budget"]
            }
        ]
    },
    {
        title: "Smartphone Operating Systems",
        chartType: "pie",
        labels: ["Android", "iOS", "Windows", "Other"],
        datasets: [{ label: "Market Share (%)", data: [75, 20, 3, 2] }],
        questions: [
            {
                prompt: "How would you describe Android's market presence?",
                correct: "It accounted for a significant majority of the market",
                wrong: ["It constituted precisely half", "It was roughly a third", "It made up a negligible fraction"]
            },
            {
                prompt: "How would you combine and describe Windows and 'Other'?",
                correct: "Together they constituted a mere fraction",
                wrong: ["They represented the absolute majority", "They comprised a quarter of the market", "They were the predominant systems"]
            }
        ]
    },

    // ==========================================
    // TYPE 3: BAR CHARTS (Expansion)
    // ==========================================
    {
        title: "Average Commute Times (Minutes/Day)",
        chartType: "bar",
        labels: ["New York", "London", "Tokyo", "Berlin"],
        datasets: [{ label: "Commute", data: [75, 72, 85, 40] }],
        questions: [
            {
                prompt: "Compare Berlin's commute time to Tokyo's.",
                correct: "Berlin's time was less than half that of Tokyo",
                wrong: ["They showed an identical pattern", "Berlin marginally outperformed Tokyo", "They stood in stark contrast with Berlin being higher"]
            },
            {
                prompt: "How does New York compare to London?",
                correct: "They displayed a broadly similar figure",
                wrong: ["New York was three times as high", "London saw an exponential surge", "They were vastly different"]
            }
        ]
    },
    {
        title: "Book Sales by Genre (Millions)",
        chartType: "bar",
        labels: ["Fiction", "Biography", "Science", "History"],
        datasets: [{ label: "2015", data: [50, 20, 10, 15] }, { label: "2020", data: [45, 40, 12, 14] }],
        questions: [
            {
                prompt: "What happened to Biography sales between 2015 and 2020?",
                correct: "They saw a twofold increase",
                wrong: ["They plummeted drastically", "They remained entirely static", "They suffered a marginal dip"]
            },
            {
                prompt: "Look at Fiction sales over the two periods. What is the trend?",
                correct: "They experienced a marginal decline",
                wrong: ["They surged exponentially", "They plateaued completely", "They more than doubled"]
            }
        ]
    },
    {
        title: "Government Spending ($ Billions)",
        chartType: "bar",
        labels: ["Healthcare", "Education", "Defense"],
        datasets: [{ label: "2010", data: [40, 30, 20] }, { label: "2020", data: [80, 60, 40] }],
        questions: [
            {
                prompt: "What is the overarching pattern across all three sectors?",
                correct: "Expenditure exactly doubled in all areas",
                wrong: ["Spending fluctuated wildly", "Defense marginally outperformed Healthcare", "Education suffered a sharp decline"]
            },
            {
                prompt: "Compare Healthcare to Defense in 2020.",
                correct: "Healthcare expenditure was exactly double that of Defense",
                wrong: ["They shared an identical budget", "Defense significantly outperformed Healthcare", "They showed a completely inverse trend"]
            }
        ]
    },

    // ==========================================
    // TYPE 4: MULTI-LINE GRAPHS (Expansion)
    // ==========================================
    {
        title: "Meat Consumption (kg per person)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Beef", data: [40, 35, 25, 20, 15] },
            { label: "Chicken", data: [15, 20, 30, 45, 60] }
        ],
        questions: [
            {
                prompt: "How would you describe the overall relationship between the two diets?",
                correct: "They exhibit completely inverse trajectories",
                wrong: ["They mirrored one another closely", "They both plateaued after 2000", "They shared a proportional growth pattern"]
            },
            {
                prompt: "What happened specifically in the late 1990s (just before 2000)?",
                correct: "Chicken consumption surpassed beef consumption",
                wrong: ["Beef consumption reached its peak", "Both markets entirely collapsed", "Chicken consumption plummeted abruptly"]
            }
        ]
    },
    {
        title: "Commuter Transport Methods",
        chartType: "line",
        labels: ["Jan", "Mar", "May", "Jul", "Sep"],
        datasets: [
            { label: "Train", data: [80, 85, 20, 15, 80] },
            { label: "Car", data: [30, 25, 90, 85, 30] }
        ],
        questions: [
            {
                prompt: "Look at the period from March to May. What occurred?",
                correct: "The lines intersected as cars became the dominant method",
                wrong: ["Both transport methods grew exponentially", "Trains recovered their leading position", "They both plateaued simultaneously"]
            },
            {
                prompt: "What happened to the trends in September?",
                correct: "They completely reversed, returning to their original positions",
                wrong: ["They both crashed to a trough", "Cars saw a continuous upward trajectory", "They levelled out permanently"]
            }
        ]
    },
    {
        title: "Social Media Platform Users (Millions)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
            { label: "Platform A", data: [10, 50, 150, 300, 310, 305] },
            { label: "Platform B", data: [200, 180, 150, 50, 10, 5] }
        ],
        questions: [
            {
                prompt: "Look at Platform A between 2015 and 2018. What is the trend?",
                correct: "A period of exponential surge",
                wrong: ["A gradual, steady increase", "A volatile fluctuation", "A completely static trajectory"]
            },
            {
                prompt: "What occurred exactly in 2017?",
                correct: "The platforms intersected at 150 million users",
                wrong: ["Platform B overtook Platform A", "Both platforms hit their lowest points", "They plateaued simultaneously"]
            },
            {
                prompt: "Look at Platform A in 2019 and 2020. How would you describe it?",
                correct: "The growth curve finally levelled off",
                wrong: ["It experienced a severe plummet", "It continued to double annually", "It fluctuated wildly"]
            }
        ]
    },
    // ==========================================
    // BATCH 1 - TYPE 1: SINGLE LINE GRAPHS
    // ==========================================
    {
        title: "Global Population Growth (Billions)",
        chartType: "line",
        labels: ["1960", "1970", "1980", "1990", "2000", "2010"],
        datasets: [{ label: "Population", data: [3.0, 3.7, 4.4, 5.3, 6.1, 6.9] }],
        questions: [
            {
                prompt: "How would you describe the overarching trend of the global population?",
                correct: "A continuous and remarkably steady upward trajectory",
                wrong: ["An erratic series of wild fluctuations", "A period of exponential, sudden surge", "A complete plateau across the period"]
            }
        ]
    },
    {
        title: "National Inflation Rate (%)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "Inflation", data: [2.0, 2.1, 2.2, 8.5, 2.5, 2.4] }],
        questions: [
            {
                prompt: "Look at the period covering 2017 to 2019. What happened?",
                correct: "A dramatic spike followed by an immediate plummet",
                wrong: ["A gradual and steady increase", "It levelled off completely", "It fell to a record low"]
            },
            {
                prompt: "Compare 2015-2017 with 2019-2020. How would you describe them?",
                correct: "Both periods remained relatively static",
                wrong: ["Both periods showed exponential growth", "They experienced wild volatility", "They suffered a constant decline"]
            }
        ]
    },
    {
        title: "Manufacturing Jobs (Millions)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{ label: "Employment", data: [20, 18, 12, 8, 5] }],
        questions: [
            {
                prompt: "How would you describe the overall employment trend in this sector?",
                correct: "A steep and continuous decline over four decades",
                wrong: ["A slight, marginal dip", "A sudden collapse in the final decade", "A period of wild fluctuation"]
            }
        ]
    },
    {
        title: "Average Internet Connection Speed (Mbps)",
        chartType: "line",
        labels: ["2005", "2008", "2011", "2014", "2017", "2020"],
        datasets: [{ label: "Speed", data: [2, 5, 10, 45, 120, 250] }],
        questions: [
            {
                prompt: "Look at the period from 2011 to 2020. What is the trend?",
                correct: "An exponential surge in connection speeds",
                wrong: ["A gradual, modest increase", "A completely static trajectory", "A period of extreme volatility"]
            }
        ]
    },
    {
        title: "Monthly Crime Rate (Incidents)",
        chartType: "line",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{ label: "Reported Crimes", data: [500, 480, 200, 190, 195, 190] }],
        questions: [
            {
                prompt: "What happened between February and March?",
                correct: "Incidents experienced a sharp plummet",
                wrong: ["They saw a marginal dip", "They plateaued completely", "They grew exponentially"]
            },
            {
                prompt: "Look at the period from March to June. How would you report this?",
                correct: "The rate levelled off at a significant low",
                wrong: ["It recovered swiftly to previous levels", "It continued its steep downward trajectory", "It fluctuated wildly"]
            }
        ]
    },
    {
        title: "Price of Gold (Per Ounce $)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "Gold Price", data: [1200, 1800, 1100, 1750] }],
        questions: [
            {
                prompt: "How would you best describe the behavior of the gold market?",
                correct: "It exhibited wild and erratic volatility",
                wrong: ["It maintained a steady upward trajectory", "It plummeted consistently", "It largely plateaued"]
            }
        ]
    },
    {
        title: "Annual Birth Rate (Per 1000 people)",
        chartType: "line",
        labels: ["1970", "1980", "1990", "2000", "2010", "2020"],
        datasets: [{ label: "Birth Rate", data: [35, 30, 28, 22, 15, 10] }],
        questions: [
            {
                prompt: "What is the overarching pattern over the fifty-year period?",
                correct: "A consistent downward trajectory",
                wrong: ["A dramatic, sudden collapse", "A period of stagnation", "A sharp dip followed by a recovery"]
            }
        ]
    },
    {
        title: "Crude Oil Prices (Per Barrel $)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [{ label: "Price", data: [80, 85, 82, 40, 42, 45] }],
        questions: [
            {
                prompt: "Look at the period from 2010 to 2014. What happened?",
                correct: "Prices remained relatively stable",
                wrong: ["Prices plummeted sharply", "Prices surged dramatically", "Prices experienced wild fluctuations"]
            },
            {
                prompt: "Look at the period from 2014 to 2016. Which phrase applies?",
                correct: "The market suffered a dramatic crash",
                wrong: ["It saw a marginal decrease", "It plateaued entirely", "It more than doubled"]
            }
        ]
    },
    {
        title: "Foreign Direct Investment ($ Billions)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "FDI", data: [10, 45, 12, 60, 15, 80] }],
        questions: [
            {
                prompt: "How would you describe the overall investment trend?",
                correct: "Extreme fluctuations with an overall upward trend",
                wrong: ["A completely static plateau", "A smooth, exponential rise", "A consistent downward plummet"]
            }
        ]
    },
    {
        title: "Carbon Emissions (Million Tonnes)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [{ label: "Emissions", data: [150, 180, 240, 310] }],
        questions: [
            {
                prompt: "How would you describe the trajectory from 1990 to 2020?",
                correct: "A steady, uninterrupted increase",
                wrong: ["A period of wild volatility", "A dramatic and sudden spike", "A marginal decline"]
            }
        ]
    },

    // ==========================================
    // BATCH 1 - TYPE 2: PIE CHARTS
    // ==========================================
    {
        title: "Global Water Consumption",
        chartType: "pie",
        labels: ["Agriculture", "Industry", "Domestic", "Other"],
        datasets: [{ label: "Usage (%)", data: [70, 20, 8, 2] }],
        questions: [
            {
                prompt: "How would you describe Agricultural water usage?",
                correct: "It accounted for the vast majority of consumption",
                wrong: ["It constituted roughly half", "It made up a negligible fraction", "It was exactly a quarter"]
            },
            {
                prompt: "How would you describe Domestic and 'Other' combined?",
                correct: "Together they constituted a mere fraction",
                wrong: ["They represented the absolute majority", "They accounted for exactly a third", "They were the predominant consumers"]
            }
        ]
    },
    {
        title: "Municipal Waste Composition",
        chartType: "pie",
        labels: ["Paper", "Plastic", "Organic", "Glass", "Metal"],
        datasets: [{ label: "Waste (%)", data: [35, 30, 20, 10, 5] }],
        questions: [
            {
                prompt: "Compare Paper and Plastic waste.",
                correct: "They accounted for similar, large proportions",
                wrong: ["Paper was exactly double that of Plastic", "Plastic constituted a tiny minority", "They stood in stark contrast"]
            },
            {
                prompt: "How would you describe Metal waste?",
                correct: "It made up the smallest proportion",
                wrong: ["It constituted a significant majority", "It accounted for precisely a quarter", "It was the primary waste material"]
            }
        ]
    },
    {
        title: "Causes of Global Land Degradation",
        chartType: "pie",
        labels: ["Overgrazing", "Deforestation", "Agriculture", "Industrial"],
        datasets: [{ label: "Causes (%)", data: [35, 30, 28, 7] }],
        questions: [
            {
                prompt: "How would you describe the impact of Overgrazing?",
                correct: "It constituted the largest single cause",
                wrong: ["It accounted for the absolute majority", "It made up a negligible fraction", "It was precisely half"]
            },
            {
                prompt: "How would you describe the Industrial impact?",
                correct: "It represented a marginal proportion",
                wrong: ["It accounted for exactly a quarter", "It was the predominant factor", "It constituted a massive majority"]
            }
        ]
    },
    {
        title: "University Degrees Awarded (2020)",
        chartType: "pie",
        labels: ["Business", "Engineering", "Arts", "Science"],
        datasets: [{ label: "Degrees (%)", data: [40, 35, 15, 10] }],
        questions: [
            {
                prompt: "How would you summarize the popularity of Business and Engineering?",
                correct: "Together they comprised a significant majority",
                wrong: ["They accounted for exactly half", "They constituted a mere fraction", "They were the least preferred subjects"]
            }
        ]
    },
    {
        title: "Tourist Accommodation Preferences",
        chartType: "pie",
        labels: ["Hotels", "Hostels", "Camping", "Staying with relatives"],
        datasets: [{ label: "Preference (%)", data: [50, 20, 15, 15] }],
        questions: [
            {
                prompt: "How would you describe the preference for Hotels?",
                correct: "It accounted for exactly half of all tourists",
                wrong: ["It constituted a massive majority", "It made up a tiny minority", "It comprised roughly a third"]
            },
            {
                prompt: "Compare Camping and Staying with Relatives.",
                correct: "They represented identical proportions",
                wrong: ["Camping significantly outperformed relatives", "Together they made up the majority", "They stood in stark contrast"]
            }
        ]
    },
    {
        title: "Daily Commuter Methods",
        chartType: "pie",
        labels: ["Car", "Train", "Bus", "Bicycle"],
        datasets: [{ label: "Commuters (%)", data: [65, 20, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe Car usage?",
                correct: "It was the predominant method of transport",
                wrong: ["It accounted for precisely a quarter", "It made up a negligible fraction", "It was equally as popular as the Train"]
            },
            {
                prompt: "How would you describe Bicycle usage?",
                correct: "It constituted a mere fraction of commuters",
                wrong: ["It was the primary transport method", "It accounted for roughly a third", "It made up the absolute majority"]
            }
        ]
    },
    {
        title: "Macronutrient Diet Composition",
        chartType: "pie",
        labels: ["Carbohydrates", "Protein", "Fats", "Fiber"],
        datasets: [{ label: "Diet (%)", data: [50, 25, 15, 10] }],
        questions: [
            {
                prompt: "How would you describe Carbohydrate intake?",
                correct: "It comprised exactly half of the diet",
                wrong: ["It accounted for a tiny minority", "It constituted a quarter", "It made up the vast majority"]
            },
            {
                prompt: "How would you describe Protein intake?",
                correct: "It accounted for precisely a quarter",
                wrong: ["It was the predominant nutrient", "It constituted a negligible proportion", "It was exactly double the Carbohydrates"]
            }
        ]
    },
    {
        title: "Renewable Energy Sources (2020)",
        chartType: "pie",
        labels: ["Hydroelectric", "Wind", "Solar", "Geothermal"],
        datasets: [{ label: "Sources (%)", data: [60, 25, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe the role of Hydroelectric power?",
                correct: "It constituted a significant majority",
                wrong: ["It accounted for exactly a quarter", "It made up a mere fraction", "It represented a tiny minority"]
            },
            {
                prompt: "Compare Wind energy to Solar energy.",
                correct: "Wind energy accounted for more than double that of Solar",
                wrong: ["They represented an identical proportion", "Solar energy significantly outperformed Wind", "They share a broadly similar figure"]
            }
        ]
    },
    {
        title: "Corporate Advertising Budget",
        chartType: "pie",
        labels: ["Online", "Television", "Print", "Radio"],
        datasets: [{ label: "Budget (%)", data: [45, 35, 15, 5] }],
        questions: [
            {
                prompt: "How would you summarize Online and Television advertising?",
                correct: "They accounted for the vast majority of expenditure",
                wrong: ["They constituted a negligible proportion", "They made up exactly half the budget", "They stood in stark contrast to one another"]
            },
            {
                prompt: "How would you describe the Radio budget?",
                correct: "It represented a highly marginal proportion",
                wrong: ["It was the primary expenditure", "It comprised exactly a quarter", "It accounted for the absolute majority"]
            }
        ]
    },
    {
        title: "Primary Reasons for Emigration",
        chartType: "pie",
        labels: ["Employment", "Education", "Family", "Climate"],
        datasets: [{ label: "Reasons (%)", data: [40, 35, 20, 5] }],
        questions: [
            {
                prompt: "Compare Employment and Education.",
                correct: "They accounted for broadly similar proportions",
                wrong: ["Employment was exactly double Education", "They stood in stark contrast", "Education significantly outperformed Employment"]
            }
        ]
    },

    // ==========================================
    // BATCH 1 - TYPE 3: BAR CHARTS
    // ==========================================
    {
        title: "Average Life Expectancy (Years)",
        chartType: "bar",
        labels: ["Japan", "USA", "Brazil", "India"],
        datasets: [{ label: "Expectancy", data: [84, 78, 75, 69] }],
        questions: [
            {
                prompt: "Compare Japan's life expectancy with India's.",
                correct: "Japan's figure is significantly higher",
                wrong: ["They show a perfectly identical pattern", "India marginally outperformed Japan", "Japan's figure is exactly double"]
            },
            {
                prompt: "Compare the USA and Brazil.",
                correct: "Their figures are remarkably similar",
                wrong: ["They stand in stark contrast", "The USA is three times higher", "Brazil significantly outperformed the USA"]
            }
        ]
    },
    {
        title: "National Recycling Rates (%)",
        chartType: "bar",
        labels: ["Germany", "UK", "France", "Italy"],
        datasets: [{ label: "2010", data: [45, 25, 20, 15] }, { label: "2020", data: [65, 45, 40, 35] }],
        questions: [
            {
                prompt: "What is the overarching pattern across all four nations from 2010 to 2020?",
                correct: "They all experienced a substantial increase",
                wrong: ["They all suffered a dramatic decline", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "Compare Germany in 2010 with the other nations in 2010.",
                correct: "Germany significantly outperformed the others",
                wrong: ["Germany stood identical to the UK", "France marginally outperformed Germany", "Germany saw an exponential surge"]
            }
        ]
    },
    {
        title: "Average Household Size",
        chartType: "bar",
        labels: ["1 Person", "2 People", "3-4 People", "5+ People"],
        datasets: [{ label: "1980", data: [15, 25, 45, 15] }, { label: "2020", data: [35, 40, 20, 5] }],
        questions: [
            {
                prompt: "What happened to the '1 Person' household category between 1980 and 2020?",
                correct: "It more than doubled in proportion",
                wrong: ["It plummeted drastically", "It remained completely static", "It suffered a marginal dip"]
            },
            {
                prompt: "Compare the '5+ People' category over the two years.",
                correct: "It experienced a sharp decline",
                wrong: ["It surged exponentially", "It plateaued completely", "It saw a twofold increase"]
            }
        ]
    },
    {
        title: "Social Media Usage by Age (Hours/Week)",
        chartType: "bar",
        labels: ["Teens", "20s", "30s", "40s"],
        datasets: [{ label: "Usage", data: [25, 20, 12, 5] }],
        questions: [
            {
                prompt: "How would you describe the overall pattern across the demographics?",
                correct: "A clear inverse correlation between age and usage",
                wrong: ["A direct correlation", "A completely random distribution", "A uniform pattern across all ages"]
            },
            {
                prompt: "Compare Teens with the 40s demographic.",
                correct: "Teens used platforms five times as much",
                wrong: ["They shared a broadly similar figure", "The 40s group marginally outperformed them", "The difference was entirely negligible"]
            }
        ]
    },
    {
        title: "Sports Participation (Millions)",
        chartType: "bar",
        labels: ["Football", "Swimming", "Tennis", "Rugby"],
        datasets: [{ label: "Male", data: [25, 10, 8, 12] }, { label: "Female", data: [5, 20, 9, 2] }],
        questions: [
            {
                prompt: "Compare Male and Female participation in Football.",
                correct: "Male participation was five times higher",
                wrong: ["They shared an identical figure", "Female participation marginally outperformed Male", "They stood at a completely equal ratio"]
            },
            {
                prompt: "Look at Tennis participation.",
                correct: "The figures were remarkably similar for both genders",
                wrong: ["They stood in stark contrast", "Male participation completely eclipsed Female", "It was the least popular sport overall"]
            }
        ]
    },
    {
        title: "Car Ownership by Household (%)",
        chartType: "bar",
        labels: ["0 Cars", "1 Car", "2 Cars", "3+ Cars"],
        datasets: [{ label: "2000", data: [30, 45, 20, 5] }, { label: "2020", data: [15, 35, 40, 10] }],
        questions: [
            {
                prompt: "What happened to the '2 Cars' category between 2000 and 2020?",
                correct: "It exactly doubled in proportion",
                wrong: ["It suffered a drastic plummet", "It remained relatively stable", "It halved"]
            },
            {
                prompt: "Look at the '0 Cars' category. What is the trend?",
                correct: "It saw a 50% decrease",
                wrong: ["It surged dramatically", "It plateaued completely", "It doubled"]
            }
        ]
    },
    {
        title: "Hot Beverage Consumption (Cups/Day)",
        chartType: "bar",
        labels: ["UK", "USA", "Japan"],
        datasets: [{ label: "Coffee", data: [1, 3, 1] }, { label: "Tea", data: [4, 1, 3] }],
        questions: [
            {
                prompt: "Compare Coffee and Tea consumption in the UK.",
                correct: "Tea consumption was exactly four times higher",
                wrong: ["They displayed a remarkably similar pattern", "Coffee significantly outperformed Tea", "The difference was marginal"]
            },
            {
                prompt: "Compare the USA's drinking habits with the UK's.",
                correct: "They show a completely inverse trend",
                wrong: ["They mirror one another perfectly", "They both share a preference for tea", "They consumed identical amounts of coffee"]
            }
        ]
    },
    {
        title: "University Graduation Rates by Gender (%)",
        chartType: "bar",
        labels: ["2000", "2010", "2020"],
        datasets: [{ label: "Male", data: [45, 48, 50] }, { label: "Female", data: [42, 52, 60] }],
        questions: [
            {
                prompt: "What happened in 2010?",
                correct: "Female graduation rates overtook Male rates",
                wrong: ["Both rates completely plummeted", "Male rates surged exponentially", "The figures were perfectly identical"]
            },
            {
                prompt: "How would you describe the Female trajectory over the 20 years?",
                correct: "A consistent upward trajectory",
                wrong: ["A drastic collapse", "Wild fluctuations", "A completely static plateau"]
            }
        ]
    },
    {
        title: "Average Regional Rainfall (mm)",
        chartType: "bar",
        labels: ["Spring", "Summer", "Autumn", "Winter"],
        datasets: [{ label: "North", data: [50, 40, 80, 120] }, { label: "South", data: [80, 20, 60, 50] }],
        questions: [
            {
                prompt: "Compare the North and South during Winter.",
                correct: "The North received more than double the rainfall",
                wrong: ["They experienced identical figures", "The South significantly outperformed the North", "The difference was entirely marginal"]
            },
            {
                prompt: "Look at Summer rainfall.",
                correct: "The North received exactly double the South's figure",
                wrong: ["They stood in stark contrast with the South higher", "They were relatively similar", "The South received four times as much"]
            }
        ]
    },
    {
        title: "Average Salaries by Profession ($ Thousands)",
        chartType: "bar",
        labels: ["Doctor", "Teacher", "Plumber", "Waiter"],
        datasets: [{ label: "Salary", data: [120, 50, 60, 25] }],
        questions: [
            {
                prompt: "Compare the Doctor's salary with the Plumber's.",
                correct: "The Doctor earned exactly double",
                wrong: ["They shared a broadly similar figure", "The Plumber marginally outperformed the Doctor", "The Doctor earned four times as much"]
            },
            {
                prompt: "Compare the Teacher and Plumber.",
                correct: "They displayed broadly similar earning figures",
                wrong: ["They stood in stark contrast", "The Plumber earned double", "The Teacher significantly outperformed the Plumber"]
            }
        ]
    },

    // ==========================================
    // BATCH 1 - TYPE 4: MULTI-LINE GRAPHS
    // ==========================================
    {
        title: "Population Distribution (Millions)",
        chartType: "line",
        labels: ["1950", "1970", "1990", "2010", "2030 (est)"],
        datasets: [
            { label: "Rural", data: [60, 55, 45, 30, 20] },
            { label: "Urban", data: [20, 35, 50, 75, 90] }
        ],
        questions: [
            {
                prompt: "How would you describe the overarching relationship between the two populations?",
                correct: "They exhibit completely inverse trajectories",
                wrong: ["They closely mirrored one another", "They both plateaued simultaneously", "They shared a proportional growth pattern"]
            },
            {
                prompt: "What happened just before 1990?",
                correct: "The Urban population officially surpassed the Rural",
                wrong: ["The Rural population reached its absolute peak", "Both populations completely collapsed", "The figures plateaued completely"]
            }
        ]
    },
    {
        title: "National Trade Balance ($ Billions)",
        chartType: "line",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
            { label: "Exports", data: [80, 85, 90, 70, 65] },
            { label: "Imports", data: [60, 65, 70, 95, 100] }
        ],
        questions: [
            {
                prompt: "What occurred precisely in 2019?",
                correct: "Imports dramatically overtook Exports",
                wrong: ["Exports reached a record peak", "Both sectors levelled off", "Imports plummeted sharply"]
            },
            {
                prompt: "Look at Exports from 2018 to 2020. What is the trend?",
                correct: "A sharp and consistent decline",
                wrong: ["A period of exponential surge", "A completely static plateau", "Wild volatility"]
            }
        ]
    },
    {
        title: "National Demographics (Per 1000)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Birth Rate", data: [35, 30, 20, 15, 12] },
            { label: "Death Rate", data: [10, 11, 12, 14, 16] }
        ],
        questions: [
            {
                prompt: "How would you describe the Birth Rate over the forty years?",
                correct: "A steep and uninterrupted downward trajectory",
                wrong: ["A steady, gradual increase", "A period of erratic fluctuation", "A drastic spike followed by a plateau"]
            },
            {
                prompt: "What is happening to the gap between the two lines by 2020?",
                correct: "The gap is rapidly closing",
                wrong: ["The gap is widening exponentially", "The lines are running perfectly parallel", "The Death Rate has plummeted"]
            }
        ]
    },
    {
        title: "Device Sales (Millions)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [
            { label: "Desktop PCs", data: [80, 75, 50, 30, 20, 15] },
            { label: "Tablets", data: [5, 20, 60, 85, 90, 88] }
        ],
        questions: [
            {
                prompt: "What occurred exactly in 2014?",
                correct: "Tablet sales decisively surpassed PC sales",
                wrong: ["PC sales reached their highest peak", "Both markets completely collapsed", "Tablet sales plummeted abruptly"]
            },
            {
                prompt: "Look at Tablet sales in 2018 and 2020. What happened?",
                correct: "The exponential growth finally plateaued",
                wrong: ["They experienced a severe crash", "They continued to double annually", "They fluctuated wildly"]
            }
        ]
    },
    {
        title: "New Gym Memberships",
        chartType: "line",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            { label: "Male", data: [100, 80, 40, 35, 30] },
            { label: "Female", data: [95, 85, 45, 30, 25] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two datasets?",
                correct: "They closely mirrored one another's trajectory",
                wrong: ["They showed completely inverse patterns", "They fluctuated entirely independently", "Male memberships surged while Female dropped"]
            },
            {
                prompt: "What is the overarching pattern for both genders?",
                correct: "A sharp plummet followed by a low plateau",
                wrong: ["A steady, gradual increase", "A volatile and erratic period", "An exponential surge"]
            }
        ]
    },
    {
        title: "Entertainment Attendance (Millions)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Cinema", data: [50, 70, 85, 20] },
            { label: "Theater", data: [15, 12, 10, 5] }
        ],
        questions: [
            {
                prompt: "What happened to Cinema attendance in 2020?",
                correct: "It suffered a dramatic and sudden crash",
                wrong: ["It reached a record peak", "It plateaued completely", "It overtook Theater attendance"]
            },
            {
                prompt: "How would you describe Theater attendance overall?",
                correct: "A steady, gradual decline",
                wrong: ["An erratic series of fluctuations", "An exponential surge", "A sudden collapse and recovery"]
            }
        ]
    },
    {
        title: "Economic Indicators (%)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
            { label: "Inflation", data: [2, 3, 7, 8] },
            { label: "Wage Growth", data: [4, 4, 2, 1] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two lines?",
                correct: "They exhibit completely inverse trajectories",
                wrong: ["They closely mirrored one another", "They both plateaued simultaneously", "They shared a proportional growth pattern"]
            },
            {
                prompt: "What occurred during Q2 and Q3?",
                correct: "Inflation intersected and overtook Wage Growth",
                wrong: ["Wage Growth reached its peak", "Both indicators entirely collapsed", "Inflation plummeted abruptly"]
            }
        ]
    },
    {
        title: "Energy Sector Investment ($ Billions)",
        chartType: "line",
        labels: ["2005", "2010", "2015", "2020"],
        datasets: [
            { label: "Fossil Fuels", data: [100, 110, 60, 30] },
            { label: "Renewables", data: [10, 30, 70, 120] }
        ],
        questions: [
            {
                prompt: "What happened specifically in 2015?",
                correct: "Renewable investment decisively surpassed Fossil Fuels",
                wrong: ["Fossil Fuel investment peaked", "Both sectors plateaued", "Renewable investment dipped marginally"]
            },
            {
                prompt: "How would you describe the trajectory of Renewables?",
                correct: "A consistent, exponential surge",
                wrong: ["Wild fluctuations", "A steady decline", "A prolonged period of stagnation"]
            }
        ]
    },
    {
        title: "Dining Out Expenditure ($/Month)",
        chartType: "line",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
            { label: "Fast Food", data: [40, 45, 50, 55, 80] },
            { label: "Restaurants", data: [60, 65, 70, 75, 10] }
        ],
        questions: [
            {
                prompt: "Look at the period from 2016 to 2019. How would you describe the relationship?",
                correct: "Both sectors experienced steady, parallel growth",
                wrong: ["They showed inverse patterns", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "What occurred drastically in 2020?",
                correct: "Restaurants crashed while Fast Food surged, crossing over",
                wrong: ["Both sectors plummeted", "Both sectors surged", "Fast Food crashed while Restaurants surged"]
            }
        ]
    },
    {
        title: "Book Sales Formats (Millions)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [
            { label: "Paper Books", data: [80, 75, 70, 65, 70, 75] },
            { label: "E-Books", data: [5, 20, 45, 60, 55, 50] }
        ],
        questions: [
            {
                prompt: "What happened to Paper Books after 2016?",
                correct: "They experienced a steady recovery",
                wrong: ["They continued to plummet", "They plateaued completely", "They crashed to zero"]
            },
            {
                prompt: "Did E-books ever overtake Paper Books?",
                correct: "No, they peaked just below Paper Books before declining",
                wrong: ["Yes, they decisively surpassed them in 2016", "Yes, they crossed over in 2014", "No, they remained at a flat plateau the entire time"]
            }
        ]
    },
    // ==========================================
    // BATCH 2 - TYPE 1: SINGLE LINE GRAPHS
    // ==========================================
    {
        title: "Global Smartphone Sales (Millions)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [{ label: "Units Sold", data: [300, 700, 1300, 1500, 1450, 1350] }],
        questions: [
            {
                prompt: "Look at the period from 2010 to 2014. What happened to sales?",
                correct: "They experienced an exponential surge",
                wrong: ["They remained relatively stable", "They experienced a marginal increase", "They fluctuated wildly"]
            },
            {
                prompt: "What occurred after 2016?",
                correct: "Sales reached a peak and then began a gradual decline",
                wrong: ["They completely plummeted", "They levelled off perfectly", "They continued to double"]
            }
        ]
    },
    {
        title: "Remote Work Adoption (%)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "Workforce", data: [5, 6, 5, 7, 8, 45] }],
        questions: [
            {
                prompt: "How would you describe the trend from 2015 to 2019?",
                correct: "It remained largely static at a low baseline",
                wrong: ["It suffered a steady decline", "It surged dramatically", "It fluctuated with high volatility"]
            },
            {
                prompt: "What happened exactly in 2020?",
                correct: "It saw an unprecedented, dramatic spike",
                wrong: ["It suffered a drastic collapse", "It plateaued completely", "It dipped marginally"]
            }
        ]
    },
    {
        title: "Annual Deforestation Rate (Million Hectares)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [{ label: "Forest Lost", data: [16, 13, 8, 5] }],
        questions: [
            {
                prompt: "How would you describe the overarching trend?",
                correct: "A significant and continuous downward trajectory",
                wrong: ["A period of erratic fluctuation", "A steady, gradual increase", "An exponential surge"]
            }
        ]
    },
    {
        title: "E-commerce Revenue ($ Billions)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "Revenue", data: [20, 22, 25, 60] }],
        questions: [
            {
                prompt: "Look at the first three quarters (Q1 to Q3). How would you describe them?",
                correct: "A steady, moderate upward trend",
                wrong: ["A drastic plummet", "A period of complete stagnation", "Wild and erratic fluctuations"]
            },
            {
                prompt: "What occurred during Q4?",
                correct: "Revenue skyrocketed abruptly",
                wrong: ["Revenue bottomed out", "It plateaued completely", "It saw a marginal dip"]
            }
        ]
    },
    {
        title: "Local Cinema Attendance (Thousands)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
        datasets: [{ label: "Tickets Sold", data: [500, 480, 450, 400, 250, 50] }],
        questions: [
            {
                prompt: "How would you describe the period from 2016 to 2020?",
                correct: "It suffered an increasingly steep collapse",
                wrong: ["It levelled off completely", "It fluctuated wildly", "It saw a moderate recovery"]
            }
        ]
    },
    {
        title: "Solar Panel Costs ($ per Watt)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{ label: "Cost", data: [30, 10, 5, 2, 0.5] }],
        questions: [
            {
                prompt: "Look at the shift from 1980 to 1990. Which phrase best describes it?",
                correct: "Prices experienced a drastic plummet",
                wrong: ["Prices surged exponentially", "Prices remained static", "Prices marginally dipped"]
            },
            {
                prompt: "How would you describe the trajectory from 2000 to 2020?",
                correct: "It continued to decline, approaching a low plateau",
                wrong: ["It recovered to previous highs", "It experienced wild volatility", "It doubled repeatedly"]
            }
        ]
    },
    {
        title: "Fast Food Consumption (Meals per Month)",
        chartType: "line",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [{ label: "Meals", data: [5, 8, 12, 10, 9] }],
        questions: [
            {
                prompt: "What happened between 2000 and 2010?",
                correct: "Consumption more than doubled",
                wrong: ["It remained entirely stable", "It halved", "It plummeted dramatically"]
            },
            {
                prompt: "What occurred after the peak in 2010?",
                correct: "It experienced a slight, gradual decline",
                wrong: ["It crashed completely", "It surged exponentially", "It fluctuated with extreme volatility"]
            }
        ]
    },
    {
        title: "Public Park Visitors (Thousands)",
        chartType: "line",
        labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
        datasets: [{ label: "Visitors", data: [5, 15, 45, 80, 30, 8] }],
        questions: [
            {
                prompt: "How would you describe the overall shape of the data?",
                correct: "A dramatic seasonal peak in the summer months",
                wrong: ["A steady, uninterrupted decline", "A completely static baseline", "A constant period of extreme volatility"]
            }
        ]
    },
    {
        title: "Monthly Gym Attendance",
        chartType: "line",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{ label: "Visits", data: [90, 50, 40, 35, 30, 25] }],
        questions: [
            {
                prompt: "Look at the shift from January to February. What happened?",
                correct: "Attendance practically halved",
                wrong: ["Attendance doubled", "It plateaued completely", "It reached a record peak"]
            },
            {
                prompt: "Look at the period from March to June. How would you report this?",
                correct: "A steady, gradual downward trajectory",
                wrong: ["An exponential surge", "A period of erratic fluctuations", "A sudden and steep spike"]
            }
        ]
    },
    {
        title: "Average Daily Commute Time (Minutes)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "Commute", data: [45, 60, 40, 75, 35, 20] }],
        questions: [
            {
                prompt: "How would you best describe the overarching trend before 2020?",
                correct: "It exhibited wild and erratic volatility",
                wrong: ["It maintained a steady upward trajectory", "It plummeted consistently", "It largely plateaued"]
            }
        ]
    },

    // ==========================================
    // BATCH 2 - TYPE 2: PIE CHARTS
    // ==========================================
    {
        title: "Government Healthcare Spending",
        chartType: "pie",
        labels: ["Hospitals", "Medication", "Administration", "Preventative Care"],
        datasets: [{ label: "Budget (%)", data: [60, 25, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe the spending on Hospitals?",
                correct: "It accounted for a significant majority of the budget",
                wrong: ["It constituted exactly a quarter", "It made up a negligible fraction", "It was roughly a third"]
            },
            {
                prompt: "Compare Preventative Care to the other sectors.",
                correct: "It received the smallest proportion of funding",
                wrong: ["It constituted the absolute majority", "It accounted for exactly half", "It was the predominant expenditure"]
            }
        ]
    },
    {
        title: "Music Streaming by Genre",
        chartType: "pie",
        labels: ["Pop", "Hip-Hop", "Rock", "Classical"],
        datasets: [{ label: "Streams (%)", data: [45, 30, 15, 10] }],
        questions: [
            {
                prompt: "How would you describe Pop and Hip-Hop combined?",
                correct: "Together they constituted exactly three-quarters of all streams",
                wrong: ["They accounted for a mere fraction", "They made up precisely half", "They represented a tiny minority"]
            },
            {
                prompt: "How would you describe Classical music's share?",
                correct: "It accounted for exactly one-tenth of the total",
                wrong: ["It was the predominant genre", "It comprised exactly a quarter", "It made up the absolute majority"]
            }
        ]
    },
    {
        title: "Global Coffee Production by Region",
        chartType: "pie",
        labels: ["South America", "Asia", "Africa", "Central America"],
        datasets: [{ label: "Production (%)", data: [50, 30, 12, 8] }],
        questions: [
            {
                prompt: "How would you describe South America's contribution?",
                correct: "It comprised exactly half of the global total",
                wrong: ["It accounted for a tiny minority", "It constituted a quarter", "It made up a negligible proportion"]
            },
            {
                prompt: "How does Africa compare to Central America?",
                correct: "They both represented relatively marginal proportions",
                wrong: ["They constituted the overwhelming majority", "They accounted for exactly half", "They were the primary producers"]
            }
        ]
    },
    {
        title: "Student Housing Choices",
        chartType: "pie",
        labels: ["Shared House", "Dorms", "Studio Apartment", "With Parents"],
        datasets: [{ label: "Students (%)", data: [40, 35, 15, 10] }],
        questions: [
            {
                prompt: "Compare Shared Houses and Dorms.",
                correct: "They both accounted for broadly similar, large proportions",
                wrong: ["Shared Houses were exactly double Dorms", "They stood in stark contrast", "Dorms significantly outperformed Shared Houses"]
            }
        ]
    },
    {
        title: "Causes of Workplace Stress",
        chartType: "pie",
        labels: ["Workload", "Management", "Commute", "Colleagues"],
        datasets: [{ label: "Stressors (%)", data: [55, 25, 15, 5] }],
        questions: [
            {
                prompt: "How would you describe Workload as a stressor?",
                correct: "It constituted the absolute majority of complaints",
                wrong: ["It made up a negligible fraction", "It accounted for exactly a quarter", "It was roughly a third"]
            },
            {
                prompt: "How would you describe Colleagues as a stressor?",
                correct: "It represented a highly marginal proportion",
                wrong: ["It was the predominant factor", "It comprised exactly half", "It accounted for a significant majority"]
            }
        ]
    },
    {
        title: "Preferred Communication Methods",
        chartType: "pie",
        labels: ["Texting", "Voice Calls", "Video Calls", "Email"],
        datasets: [{ label: "Preference (%)", data: [65, 15, 10, 10] }],
        questions: [
            {
                prompt: "How would you describe the preference for Texting?",
                correct: "It accounted for a massive majority",
                wrong: ["It constituted a mere fraction", "It made up precisely a quarter", "It was the least preferred method"]
            },
            {
                prompt: "Compare Voice Calls to Email.",
                correct: "They both represented small, comparable minorities",
                wrong: ["They constituted the vast majority combined", "Voice calls were exactly double email", "They stood in stark contrast"]
            }
        ]
    },
    {
        title: "Ocean Plastic Sources",
        chartType: "pie",
        labels: ["Packaging", "Fishing Nets", "Microplastics", "Other"],
        datasets: [{ label: "Sources (%)", data: [45, 25, 20, 10] }],
        questions: [
            {
                prompt: "How would you describe Packaging compared to the total?",
                correct: "It constituted nearly half of all oceanic plastic",
                wrong: ["It accounted for a tiny minority", "It was exactly a quarter", "It made up a negligible proportion"]
            },
            {
                prompt: "How would you describe Fishing Nets?",
                correct: "It accounted for exactly a quarter",
                wrong: ["It was the predominant source", "It constituted a mere fraction", "It was exactly double the Packaging"]
            }
        ]
    },
    {
        title: "Dietary Preferences",
        chartType: "pie",
        labels: ["Omnivore", "Vegetarian", "Pescatarian", "Vegan"],
        datasets: [{ label: "Diet (%)", data: [75, 12, 8, 5] }],
        questions: [
            {
                prompt: "How would you describe the Omnivore diet?",
                correct: "It accounted for exactly three-quarters of the demographic",
                wrong: ["It constituted precisely half", "It made up a negligible fraction", "It was roughly a third"]
            },
            {
                prompt: "How would you combine and describe Vegetarian, Pescatarian, and Vegan?",
                correct: "Together they constituted exactly a quarter",
                wrong: ["They represented the absolute majority", "They comprised a mere fraction", "They were the predominant diets"]
            }
        ]
    },
    {
        title: "Retail Sales Channels",
        chartType: "pie",
        labels: ["Physical Stores", "E-commerce", "Catalog", "Social Media"],
        datasets: [{ label: "Sales (%)", data: [33, 50, 2, 15] }],
        questions: [
            {
                prompt: "How would you describe Physical Stores?",
                correct: "They accounted for roughly a third of all sales",
                wrong: ["They constituted the absolute majority", "They made up a negligible proportion", "They were exactly half"]
            },
            {
                prompt: "How would you describe the Catalog channel?",
                correct: "It represented a highly marginal fraction",
                wrong: ["It was the primary expenditure", "It comprised exactly a quarter", "It accounted for the absolute majority"]
            }
        ]
    },
    {
        title: "Home Energy Usage",
        chartType: "pie",
        labels: ["Heating", "Appliances", "Water", "Lighting"],
        datasets: [{ label: "Usage (%)", data: [45, 30, 15, 10] }],
        questions: [
            {
                prompt: "Compare Heating and Appliances.",
                correct: "Together they accounted for exactly three-quarters of energy use",
                wrong: ["Heating was exactly double Appliances", "They stood in stark contrast", "Appliances significantly outperformed Heating"]
            }
        ]
    },

    // ==========================================
    // BATCH 2 - TYPE 3: BAR CHARTS
    // ==========================================
    {
        title: "Foreign Language Learners (Millions)",
        chartType: "bar",
        labels: ["English", "Spanish", "Mandarin", "French"],
        datasets: [{ label: "Learners", data: [1500, 500, 300, 250] }],
        questions: [
            {
                prompt: "Compare English with Spanish.",
                correct: "English had exactly three times as many learners",
                wrong: ["They showed a remarkably similar pattern", "Spanish marginally outperformed English", "They stood in identical proportions"]
            },
            {
                prompt: "Compare Mandarin and French.",
                correct: "They shared broadly similar figures at the lower end",
                wrong: ["They stood in stark contrast", "French was three times higher", "Mandarin completely dwarfed English"]
            }
        ]
    },
    {
        title: "Daily Caloric Intake by Region",
        chartType: "bar",
        labels: ["North America", "Europe", "Asia", "Africa"],
        datasets: [{ label: "Calories", data: [3600, 3400, 2800, 2400] }],
        questions: [
            {
                prompt: "Compare North America to Europe.",
                correct: "They displayed relatively similar, high intake levels",
                wrong: ["North America was exactly double Europe", "They stood in stark contrast", "Europe significantly outperformed North America"]
            },
            {
                prompt: "Compare North America to Africa.",
                correct: "North America's figure was exactly one and a half times higher",
                wrong: ["Africa marginally outperformed North America", "They share a completely identical pattern", "North America was exactly double"]
            }
        ]
    },
    {
        title: "Electric Vehicle Sales by Country (Thousands)",
        chartType: "bar",
        labels: ["China", "USA", "Germany", "Norway"],
        datasets: [{ label: "2019", data: [1200, 300, 100, 80] }, { label: "2020", data: [1300, 320, 150, 105] }],
        questions: [
            {
                prompt: "What is the overarching pattern for all countries across the two years?",
                correct: "They all experienced a clear upward trajectory",
                wrong: ["They all suffered a dramatic decline", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "Compare China to the other nations.",
                correct: "China completely dwarfed all other markets combined",
                wrong: ["China stood identical to the USA", "Germany marginally outperformed China", "China saw a drastic collapse"]
            }
        ]
    },
    {
        title: "Social Media Advertising Spend ($ Billions)",
        chartType: "bar",
        labels: ["Platform A", "Platform B", "Platform C", "Platform D"],
        datasets: [{ label: "Spend", data: [80, 75, 20, 5] }],
        questions: [
            {
                prompt: "Compare Platform A and Platform B.",
                correct: "They share broadly similar, dominant figures",
                wrong: ["Platform A was precisely double Platform B", "They represent completely inverse trends", "Platform B significantly outperformed Platform A"]
            },
            {
                prompt: "Compare Platform B and Platform D.",
                correct: "Platform D accounted for a mere fraction of Platform B's total",
                wrong: ["They shared a broadly similar figure", "Platform D marginally outperformed Platform B", "The difference was entirely negligible"]
            }
        ]
    },
    {
        title: "Weekly Exercise Hours by Age",
        chartType: "bar",
        labels: ["18-25", "26-35", "36-45", "46-55"],
        datasets: [{ label: "Male", data: [6, 4, 3, 2] }, { label: "Female", data: [5, 5, 4, 3] }],
        questions: [
            {
                prompt: "Compare Male and Female patterns in the 26-35 group.",
                correct: "Females marginally outperformed Males",
                wrong: ["They shared an identical figure", "Male participation was double Female participation", "They stood in stark contrast"]
            },
            {
                prompt: "Look at the overall trend for Males as age increases.",
                correct: "A clear, steady downward trajectory",
                wrong: ["A stark, exponential rise", "A period of erratic fluctuation", "A completely static plateau"]
            }
        ]
    },
    {
        title: "University Tuition Fees ($ Thousands)",
        chartType: "bar",
        labels: ["USA", "UK", "Australia", "Germany"],
        datasets: [{ label: "2010", data: [25, 12, 18, 0] }, { label: "2020", data: [35, 12, 22, 0] }],
        questions: [
            {
                prompt: "What happened to the UK and Germany between 2010 and 2020?",
                correct: "They both remained entirely static",
                wrong: ["They suffered a drastic plummet", "They exactly doubled in proportion", "They fluctuated wildly"]
            },
            {
                prompt: "Look at the USA's trajectory.",
                correct: "It saw a significant and continued increase",
                wrong: ["It plummeted completely", "It plateaued entirely", "It halved"]
            }
        ]
    },
    {
        title: "Public Transport Delays (Minutes)",
        chartType: "bar",
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{ label: "Bus", data: [15, 12, 10, 18, 25] }, { label: "Train", data: [5, 4, 5, 6, 8] }],
        questions: [
            {
                prompt: "Compare Bus and Train delays throughout the week.",
                correct: "Bus delays were consistently and significantly higher",
                wrong: ["They displayed a remarkably similar pattern", "Trains significantly outperformed Buses in delays", "The difference was marginal"]
            },
            {
                prompt: "What happened specifically on Friday?",
                correct: "Both transport methods reached their peak delays",
                wrong: ["They mirror one another perfectly at zero", "They both share their lowest point", "They consumed identical amounts of time"]
            }
        ]
    },
    {
        title: "Organic Food Sales ($ Millions)",
        chartType: "bar",
        labels: ["2015", "2017", "2019", "2021"],
        datasets: [{ label: "Fruits", data: [10, 15, 25, 40] }, { label: "Meat", data: [2, 3, 5, 10] }],
        questions: [
            {
                prompt: "What is the trend for Organic Fruits from 2015 to 2021?",
                correct: "It experienced an exponential surge, multiplying fourfold",
                wrong: ["Both rates completely plummeted", "It plateaued entirely", "The figures were perfectly identical"]
            },
            {
                prompt: "Compare the volumes of Fruits to Meat across the entire period.",
                correct: "Fruits consistently and vastly outperformed Meat",
                wrong: ["A drastic collapse of Fruits relative to Meat", "Wild fluctuations between the two", "A completely static plateau for both"]
            }
        ]
    },
    {
        title: "Average Retirement Age",
        chartType: "bar",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [{ label: "Men", data: [62, 63, 65, 67] }, { label: "Women", data: [60, 61, 63, 66] }],
        questions: [
            {
                prompt: "Compare Men and Women across the period.",
                correct: "They followed a closely parallel upward trajectory",
                wrong: ["They experienced identical figures", "Women significantly outperformed Men", "The difference was entirely inverted"]
            },
            {
                prompt: "What is the overarching pattern for the total population?",
                correct: "A gradual, steady increase over thirty years",
                wrong: ["They stood in stark contrast", "They were completely static", "They experienced a sharp decline"]
            }
        ]
    },
    {
        title: "Household Debt Levels ($ Thousands)",
        chartType: "bar",
        labels: ["2000", "2010", "2020"],
        datasets: [{ label: "Mortgage", data: [80, 120, 150] }, { label: "Credit Card", data: [5, 15, 10] }],
        questions: [
            {
                prompt: "Compare Mortgage debt with Credit Card debt.",
                correct: "Mortgages accounted for a massively predominant share of total debt",
                wrong: ["They shared a broadly similar figure", "Credit Cards marginally outperformed Mortgages", "They experienced identical growth"]
            },
            {
                prompt: "What happened to Credit Card debt between 2010 and 2020?",
                correct: "It experienced a moderate decline",
                wrong: ["They stood in stark contrast", "It exactly doubled", "It significantly outperformed Mortgages"]
            }
        ]
    },

    // ==========================================
    // BATCH 2 - TYPE 4: MULTI-LINE GRAPHS
    // ==========================================
    {
        title: "Web Traffic (Millions of Visits)",
        chartType: "line",
        labels: ["2010", "2013", "2016", "2019", "2022"],
        datasets: [
            { label: "Desktop", data: [80, 70, 50, 40, 35] },
            { label: "Mobile", data: [5, 25, 60, 90, 120] }
        ],
        questions: [
            {
                prompt: "How would you describe the overarching relationship between the two formats?",
                correct: "They exhibit completely inverse trajectories",
                wrong: ["They closely mirrored one another", "They both plateaued simultaneously", "They shared a proportional growth pattern"]
            },
            {
                prompt: "What happened precisely around 2016?",
                correct: "Mobile traffic officially intersected and surpassed Desktop",
                wrong: ["Desktop traffic reached its absolute peak", "Both populations completely collapsed", "The figures plateaued completely"]
            }
        ]
    },
    {
        title: "News Readership (Millions)",
        chartType: "line",
        labels: ["2005", "2010", "2015", "2020"],
        datasets: [
            { label: "Print Newspapers", data: [60, 45, 20, 5] },
            { label: "Digital News", data: [10, 30, 50, 75] }
        ],
        questions: [
            {
                prompt: "What occurred over the course of the period?",
                correct: "Digital readership dramatically overtook Print",
                wrong: ["Print reached a record peak", "Both sectors levelled off", "Digital readership plummeted sharply"]
            },
            {
                prompt: "Look at Print Newspapers. What is the trend?",
                correct: "A sharp, consistent, and continuous decline",
                wrong: ["A period of exponential surge", "A completely static plateau", "Wild volatility"]
            }
        ]
    },
    {
        title: "Meat vs Plant-Based Meat Sales ($ Millions)",
        chartType: "line",
        labels: ["2015", "2017", "2019", "2021"],
        datasets: [
            { label: "Traditional Meat", data: [500, 490, 485, 480] },
            { label: "Plant-Based", data: [10, 15, 30, 60] }
        ],
        questions: [
            {
                prompt: "How would you describe Traditional Meat sales?",
                correct: "A very marginal and gradual downward trajectory",
                wrong: ["A steep, uninterrupted downward trajectory", "A period of erratic fluctuation", "A drastic spike followed by a plateau"]
            },
            {
                prompt: "What is happening to Plant-Based sales?",
                correct: "They are experiencing an exponential surge",
                wrong: ["They are widening the gap negatively", "They are running perfectly parallel to traditional meat", "They have plummeted"]
            }
        ]
    },
    {
        title: "Commuting Methods (Millions of Trips)",
        chartType: "line",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [
            { label: "Private Car", data: [40, 45, 30, 25, 20] },
            { label: "Public Transport", data: [15, 18, 35, 40, 45] }
        ],
        questions: [
            {
                prompt: "What occurred exactly between 2005 and 2010?",
                correct: "Public Transport decisively surpassed Private Cars",
                wrong: ["Private Cars reached their highest peak", "Both markets completely collapsed", "Public Transport plummeted abruptly"]
            },
            {
                prompt: "Look at Private Cars from 2010 to 2020. What happened?",
                correct: "They continued a steady, downward trajectory",
                wrong: ["They experienced a severe crash", "They continued to double annually", "They fluctuated wildly"]
            }
        ]
    },
    {
        title: "Energy Investment ($ Billions)",
        chartType: "line",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [
            { label: "Conventional", data: [150, 160, 100, 80, 60] },
            { label: "Renewable", data: [20, 30, 120, 150, 200] }
        ],
        questions: [
            {
                prompt: "What is the overarching relationship between the two datasets?",
                correct: "They show completely inverse trajectories",
                wrong: ["They closely mirrored one another's trajectory", "They fluctuated entirely independently", "Conventional surged while Renewable dropped"]
            },
            {
                prompt: "What happened between 2005 and 2010?",
                correct: "An intersection where Renewables overtook Conventional energy",
                wrong: ["A steady, gradual increase in both", "A volatile and erratic period", "An exponential surge in Conventional energy"]
            }
        ]
    },
    {
        title: "Food Consumption (Thousand Tonnes)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018"],
        datasets: [
            { label: "Imported Produce", data: [80, 75, 60, 40, 30] },
            { label: "Local Produce", data: [20, 25, 50, 70, 85] }
        ],
        questions: [
            {
                prompt: "What happened to Imported Produce overall?",
                correct: "It suffered a consistent and steady decline",
                wrong: ["It reached a record peak", "It plateaued completely", "It overtook Local Produce"]
            },
            {
                prompt: "How would you describe Local Produce?",
                correct: "An exponential surge that eventually intersected the other data",
                wrong: ["An erratic series of fluctuations", "A steady, gradual decline", "A sudden collapse and recovery"]
            }
        ]
    },
    {
        title: "Crime Rates (Per 100,000)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Urban", data: [120, 100, 60, 40] },
            { label: "Rural", data: [30, 25, 20, 15] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two lines?",
                correct: "They exhibit parallel, downward trajectories",
                wrong: ["They closely mirrored an upward trend", "They both plateaued immediately", "They shared an inverse growth pattern"]
            },
            {
                prompt: "What is happening to the gap between the two rates?",
                correct: "The gap is significantly narrowing over time",
                wrong: ["The gap is widening", "Both indicators intersected", "Urban crime plummeted below Rural crime"]
            }
        ]
    },
    {
        title: "Average Starting Salaries ($ Thousands)",
        chartType: "line",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [
            { label: "High School Grad", data: [25, 26, 25, 27, 28] },
            { label: "University Grad", data: [35, 40, 45, 52, 60] }
        ],
        questions: [
            {
                prompt: "What happened specifically to High School Grads?",
                correct: "Their salaries remained highly static, forming a long plateau",
                wrong: ["They peaked and crashed", "They intersected University Grads", "They dipped marginally and never recovered"]
            },
            {
                prompt: "What is happening to the gap between the two cohorts?",
                correct: "The discrepancy is widening significantly",
                wrong: ["Wild fluctuations are closing the gap", "A steady decline in University salaries is closing it", "A prolonged period of stagnation for both"]
            }
        ]
    },
    {
        title: "Holiday Bookings (Thousands)",
        chartType: "line",
        labels: ["2014", "2016", "2018", "2020", "2022"],
        datasets: [
            { label: "Hotels", data: [100, 95, 80, 10, 60] },
            { label: "Airbnb", data: [10, 30, 70, 5, 80] }
        ],
        questions: [
            {
                prompt: "Look at the period from 2014 to 2018. How would you describe it?",
                correct: "Airbnb surged dramatically, nearly catching up to Hotels",
                wrong: ["They showed inverse patterns that never closed", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "What occurred drastically in 2020?",
                correct: "Both sectors plummeted identically, hitting an absolute trough",
                wrong: ["Both sectors plateaued", "Both sectors surged", "Hotels crashed while Airbnb surged"]
            }
        ]
    },
    {
        title: "Payment Methods (%)",
        chartType: "line",
        labels: ["2010", "2013", "2016", "2019", "2022"],
        datasets: [
            { label: "Cash", data: [75, 60, 40, 20, 5] },
            { label: "Contactless", data: [5, 20, 50, 75, 90] }
        ],
        questions: [
            {
                prompt: "What happened to Cash payments overall?",
                correct: "They experienced a steep, consistent downward trajectory",
                wrong: ["They continued to fluctuate", "They plateaued completely after 2016", "They crashed to zero immediately"]
            },
            {
                prompt: "Did Contactless ever overtake Cash?",
                correct: "Yes, they decisively intersected and surpassed Cash around 2015",
                wrong: ["No, they peaked just below Cash before declining", "Yes, they crossed over in 2022", "No, they remained at a flat plateau"]
            }
        ]
    },
    // ==========================================
    // BATCH 3 - TYPE 1: SINGLE LINE GRAPHS
    // ==========================================
    {
        title: "Renewable Energy Investment ($ Billions)",
        chartType: "line",
        labels: ["2005", "2010", "2015", "2020"],
        datasets: [{ label: "Investment", data: [10, 25, 80, 85] }],
        questions: [
            {
                prompt: "Look at the period from 2010 to 2015. How would you describe it?",
                correct: "It saw a sharp, exponential surge",
                wrong: ["It plateaued completely", "It suffered a drastic plummet", "It remained relatively stable"]
            },
            {
                prompt: "What happened between 2015 and 2020?",
                correct: "The rapid growth finally levelled off",
                wrong: ["It plummeted back to original levels", "It fluctuated with extreme volatility", "It doubled again"]
            }
        ]
    },
    {
        title: "Local Library Memberships (Thousands)",
        chartType: "line",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [{ label: "Members", data: [50, 48, 45, 42, 10] }],
        questions: [
            {
                prompt: "Describe the trend from 2016 to 2019.",
                correct: "A steady, marginal decline",
                wrong: ["An erratic series of fluctuations", "An exponential downward trajectory", "A complete and static plateau"]
            },
            {
                prompt: "What occurred abruptly in 2020?",
                correct: "Memberships suffered a dramatic and sudden crash",
                wrong: ["They recovered to previous highs", "They plateaued", "They saw a marginal dip"]
            }
        ]
    },
    {
        title: "Electric Scooter Usage (Thousands of Trips)",
        chartType: "line",
        labels: ["Jan", "Mar", "May", "Jul", "Sep"],
        datasets: [{ label: "Trips", data: [2, 5, 20, 50, 80] }],
        questions: [
            {
                prompt: "How would you describe the overarching trend?",
                correct: "A consistent and exponential upward trajectory",
                wrong: ["A period of wild volatility", "A steady, marginal increase", "A sharp spike followed by a drop"]
            }
        ]
    },
    {
        title: "Coal Consumption (Million Tonnes)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [{ label: "Consumption", data: [150, 120, 80, 40] }],
        questions: [
            {
                prompt: "Which phrase best summarizes the entire period?",
                correct: "A steep and continuous decline",
                wrong: ["A static baseline", "An unpredictable fluctuation", "A rapid surge followed by a crash"]
            }
        ]
    },
    {
        title: "Online Grocery Shopping Orders (Thousands)",
        chartType: "line",
        labels: ["2018", "2019", "2020", "2021", "2022"],
        datasets: [{ label: "Orders", data: [10, 12, 90, 85, 88] }],
        questions: [
            {
                prompt: "What occurred exactly in 2020?",
                correct: "Orders skyrocketed to unprecedented levels",
                wrong: ["Orders bottomed out completely", "Orders experienced a marginal dip", "Orders plateaued entirely"]
            },
            {
                prompt: "Look at the period following the 2020 peak.",
                correct: "The numbers remained relatively stable at a high plateau",
                wrong: ["They collapsed to original levels", "They continued to grow exponentially", "They fluctuated wildly"]
            }
        ]
    },
    {
        title: "National Unemployment Rate (%)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "Rate", data: [4.5, 8.2, 3.1, 7.5] }],
        questions: [
            {
                prompt: "How would you describe the behavior of the employment market?",
                correct: "It exhibited severe and erratic volatility",
                wrong: ["It maintained a steady upward trajectory", "It plummeted consistently", "It largely plateaued"]
            }
        ]
    },
    {
        title: "Average Daily Screen Time (Hours)",
        chartType: "line",
        labels: ["2010", "2013", "2016", "2019", "2022"],
        datasets: [{ label: "Hours", data: [2, 3.5, 5, 6.5, 8] }],
        questions: [
            {
                prompt: "What is the overarching pattern over the twelve years?",
                correct: "A constant and uninterrupted upward trend",
                wrong: ["A drastic, sudden spike", "A period of stagnation", "A sharp dip followed by a recovery"]
            }
        ]
    },
    {
        title: "Public Transport Satisfaction (%)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018", "2019"],
        datasets: [{ label: "Satisfaction", data: [85, 84, 85, 40, 42] }],
        questions: [
            {
                prompt: "Look at the period from 2015 to 2017. What happened?",
                correct: "Satisfaction remained entirely static",
                wrong: ["It plummeted sharply", "It surged dramatically", "It experienced wild fluctuations"]
            },
            {
                prompt: "What occurred between 2017 and 2018?",
                correct: "The approval rating suffered a dramatic crash",
                wrong: ["It saw a marginal decrease", "It plateaued entirely", "It more than doubled"]
            }
        ]
    },
    {
        title: "Cinema Ticket Prices ($)",
        chartType: "line",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [{ label: "Price", data: [5, 7, 9, 12, 15] }],
        questions: [
            {
                prompt: "How would you describe the pricing trend?",
                correct: "A steady, progressive increase over two decades",
                wrong: ["A completely static plateau", "An exponential, vertical rise", "A consistent downward plummet"]
            }
        ]
    },
    {
        title: "Carbon Footprint per Capita (Tonnes)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [{ label: "Footprint", data: [20, 18, 15, 12] }],
        questions: [
            {
                prompt: "How would you describe the trajectory from 1990 to 2020?",
                correct: "A gradual, consistent downward trajectory",
                wrong: ["A period of wild volatility", "A dramatic and sudden collapse", "A marginal increase"]
            }
        ]
    },

    // ==========================================
    // BATCH 3 - TYPE 2: PIE CHARTS
    // ==========================================
    {
        title: "Global Energy Consumption by Sector",
        chartType: "pie",
        labels: ["Industry", "Transport", "Residential", "Commercial"],
        datasets: [{ label: "Usage (%)", data: [55, 25, 15, 5] }],
        questions: [
            {
                prompt: "How would you describe Industrial consumption?",
                correct: "It accounted for the absolute majority of energy used",
                wrong: ["It constituted exactly half", "It made up a negligible fraction", "It was precisely a quarter"]
            },
            {
                prompt: "Compare Residential and Commercial usage.",
                correct: "Combined, they accounted for exactly one-fifth of total usage",
                wrong: ["They represented the absolute majority", "They accounted for exactly a third", "They were the predominant consumers"]
            }
        ]
    },
    {
        title: "Primary Sources of News",
        chartType: "pie",
        labels: ["Social Media", "Television", "Print", "Radio"],
        datasets: [{ label: "Sources (%)", data: [65, 20, 10, 5] }],
        questions: [
            {
                prompt: "Describe the reliance on Social Media.",
                correct: "It constituted a significant majority",
                wrong: ["It was exactly double that of Television", "It constituted a tiny minority", "It stood in stark contrast to Print"]
            },
            {
                prompt: "How would you describe Radio as a news source?",
                correct: "It made up a highly marginal proportion",
                wrong: ["It constituted a significant majority", "It accounted for precisely a quarter", "It was the primary source"]
            }
        ]
    },
    {
        title: "Transportation to Work",
        chartType: "pie",
        labels: ["Private Car", "Public Transit", "Walking", "Bicycle"],
        datasets: [{ label: "Methods (%)", data: [75, 15, 8, 2] }],
        questions: [
            {
                prompt: "How would you describe the usage of Private Cars?",
                correct: "It constituted precisely three-quarters of all commuters",
                wrong: ["It accounted for exactly half", "It made up a negligible fraction", "It was a tiny minority"]
            },
            {
                prompt: "How would you describe Bicycle usage?",
                correct: "It represented a negligible proportion",
                wrong: ["It accounted for exactly a quarter", "It was the predominant method", "It constituted a massive majority"]
            }
        ]
    },
    {
        title: "Household Water Usage",
        chartType: "pie",
        labels: ["Showers/Baths", "Toilets", "Laundry", "Cooking/Drinking"],
        datasets: [{ label: "Usage (%)", data: [50, 25, 15, 10] }],
        questions: [
            {
                prompt: "How would you summarize Shower and Bath usage?",
                correct: "It comprised exactly half of total household consumption",
                wrong: ["It accounted for precisely a quarter", "It constituted a mere fraction", "It was the least preferred method"]
            },
            {
                prompt: "How would you describe Toilet usage?",
                correct: "It accounted for exactly a quarter of the total",
                wrong: ["It represented the absolute majority", "It comprised a mere fraction", "It was the predominant usage"]
            }
        ]
    },
    {
        title: "Average Tourist Spending Breakdown",
        chartType: "pie",
        labels: ["Accommodation", "Food", "Transport", "Souvenirs"],
        datasets: [{ label: "Spending (%)", data: [50, 30, 15, 5] }],
        questions: [
            {
                prompt: "How would you describe spending on Accommodation?",
                correct: "It accounted for exactly half of all expenditure",
                wrong: ["It constituted a massive majority", "It made up a tiny minority", "It comprised roughly a third"]
            },
            {
                prompt: "Describe the spending on Souvenirs.",
                correct: "It represented a highly marginal fraction of the budget",
                wrong: ["It significantly outperformed Transport", "Together with Food, it made up the majority", "It stood in stark contrast to Transport"]
            }
        ]
    },
    {
        title: "Plastic Waste by Type",
        chartType: "pie",
        labels: ["Packaging", "Construction", "Textiles", "Consumer Products"],
        datasets: [{ label: "Waste (%)", data: [60, 20, 10, 10] }],
        questions: [
            {
                prompt: "How would you describe Packaging waste?",
                correct: "It was the predominant source of plastic waste",
                wrong: ["It accounted for precisely a quarter", "It made up a negligible fraction", "It was equally as popular as Construction"]
            },
            {
                prompt: "Compare Textiles to Consumer Products.",
                correct: "They constituted identical, minor proportions",
                wrong: ["They were the primary waste sources", "They accounted for roughly a third combined", "They made up the absolute majority"]
            }
        ]
    },
    {
        title: "Global Diet Distribution",
        chartType: "pie",
        labels: ["Omnivore", "Vegetarian", "Vegan", "Other"],
        datasets: [{ label: "Diet (%)", data: [75, 15, 5, 5] }],
        questions: [
            {
                prompt: "How would you describe the Omnivore demographic?",
                correct: "It comprised exactly three-quarters of the global population",
                wrong: ["It accounted for a tiny minority", "It constituted exactly half", "It made up a negligible fraction"]
            },
            {
                prompt: "How would you describe Veganism?",
                correct: "It accounted for a mere fraction of global diets",
                wrong: ["It was the predominant diet", "It constituted a quarter", "It was exactly double the Vegetarian figure"]
            }
        ]
    },
    {
        title: "Streaming Service Market Share",
        chartType: "pie",
        labels: ["Service A", "Service B", "Service C", "Service D"],
        datasets: [{ label: "Share (%)", data: [65, 20, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe Service A's position?",
                correct: "It accounted for a significant majority of the market",
                wrong: ["It accounted for exactly a quarter", "It made up a mere fraction", "It represented a tiny minority"]
            },
            {
                prompt: "Compare Service B to Service C.",
                correct: "Service B's market share was exactly double that of Service C",
                wrong: ["They represented an identical proportion", "Service C significantly outperformed Service B", "They share a broadly similar figure"]
            }
        ]
    },
    {
        title: "University Funding Sources",
        chartType: "pie",
        labels: ["Government", "Tuition Fees", "Alumni Donations", "Corporate Grants"],
        datasets: [{ label: "Funding (%)", data: [50, 35, 10, 5] }],
        questions: [
            {
                prompt: "How would you summarize Government funding?",
                correct: "It accounted for exactly half of the university's income",
                wrong: ["It constituted a negligible proportion", "It made up exactly a quarter", "It stood in stark contrast to Tuition"]
            },
            {
                prompt: "How would you describe Corporate Grants?",
                correct: "It represented a highly marginal proportion of funding",
                wrong: ["It was the primary expenditure", "It comprised exactly a quarter", "It accounted for the absolute majority"]
            }
        ]
    },
    {
        title: "Wildlife Conservation Budget",
        chartType: "pie",
        labels: ["Anti-Poaching", "Habitat Restoration", "Research", "Education"],
        datasets: [{ label: "Budget (%)", data: [55, 25, 10, 10] }],
        questions: [
            {
                prompt: "How would you describe the Anti-Poaching budget?",
                correct: "It constituted the absolute majority of expenditure",
                wrong: ["It was exactly double Habitat Restoration", "They stood in stark contrast", "Research significantly outperformed it"]
            }
        ]
    },

    // ==========================================
    // BATCH 3 - TYPE 3: BAR CHARTS
    // ==========================================
    {
        title: "Home Ownership Rates by Age (%)",
        chartType: "bar",
        labels: ["20-29", "30-39", "40-49", "50-59"],
        datasets: [{ label: "Ownership Rate", data: [15, 35, 65, 80] }],
        questions: [
            {
                prompt: "How would you describe the overall pattern across the age demographics?",
                correct: "There is a direct correlation between age and home ownership",
                wrong: ["There is a clear inverse correlation", "The rates fluctuated wildly", "They stood in identical proportions"]
            },
            {
                prompt: "Compare the 20-29 group with the 50-59 group.",
                correct: "The oldest group vastly outperformed the youngest demographic",
                wrong: ["They stood in stark contrast, with the youngest higher", "The youngest was three times higher", "They shared broadly similar figures"]
            }
        ]
    },
    {
        title: "Average Weekly Working Hours",
        chartType: "bar",
        labels: ["Mexico", "South Korea", "UK", "Germany"],
        datasets: [{ label: "Hours", data: [45, 42, 36, 28] }],
        questions: [
            {
                prompt: "Compare Mexico to Germany.",
                correct: "Mexico's working hours were significantly higher than Germany's",
                wrong: ["Mexico was exactly double Germany", "They stood in identical proportions", "Germany significantly outperformed Mexico"]
            },
            {
                prompt: "Compare the UK and Germany.",
                correct: "They both sat at the lower end of the spectrum",
                wrong: ["The UK was double Germany", "They share a completely identical pattern", "The UK was the highest overall"]
            }
        ]
    },
    {
        title: "Preferred Beverage by Country (%)",
        chartType: "bar",
        labels: ["UK", "Japan", "Italy", "USA"],
        datasets: [{ label: "Tea", data: [80, 75, 10, 20] }, { label: "Coffee", data: [20, 25, 90, 80] }],
        questions: [
            {
                prompt: "Compare the UK and Japan to Italy and the USA.",
                correct: "They exhibit completely inverse preferences",
                wrong: ["They all experienced a clear upward trajectory", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "Look at Italy's preferences.",
                correct: "Coffee consumption completely dwarfed Tea consumption",
                wrong: ["Tea stood identical to Coffee", "Tea marginally outperformed Coffee", "Coffee saw a drastic collapse"]
            }
        ]
    },
    {
        title: "Museum Attendance by Season (Thousands)",
        chartType: "bar",
        labels: ["Spring", "Summer", "Autumn", "Winter"],
        datasets: [{ label: "Visitors", data: [120, 300, 110, 80] }],
        questions: [
            {
                prompt: "Describe the seasonal trend in Summer.",
                correct: "Attendance reached a dramatic, seasonal peak",
                wrong: ["Attendance was precisely double Winter", "It represented a completely inverse trend", "It marginally outperformed Spring"]
            },
            {
                prompt: "Compare Spring and Autumn.",
                correct: "They shared broadly similar attendance figures",
                wrong: ["Autumn significantly outperformed Spring", "Spring was exactly double Autumn", "The difference was entirely negligible"]
            }
        ]
    },
    {
        title: "Average Annual Salary by Education ($ Thousands)",
        chartType: "bar",
        labels: ["High School", "Bachelor's", "Master's", "PhD"],
        datasets: [{ label: "Salary", data: [30, 55, 75, 90] }],
        questions: [
            {
                prompt: "What is the overarching pattern?",
                correct: "A clear, direct correlation between education level and salary",
                wrong: ["A stark, inverse correlation", "A period of erratic fluctuation", "A completely static plateau"]
            },
            {
                prompt: "Compare High School to PhD salaries.",
                correct: "PhD graduates earned exactly triple the salary of High School graduates",
                wrong: ["They shared a broadly similar figure", "PhD marginally outperformed High School", "High School was exactly double PhD"]
            }
        ]
    },
    {
        title: "Renewable Energy Capacity (Gigawatts)",
        chartType: "bar",
        labels: ["China", "USA", "Brazil", "India"],
        datasets: [{ label: "2010", data: [50, 40, 60, 20] }, { label: "2020", data: [250, 120, 100, 80] }],
        questions: [
            {
                prompt: "What happened to China's capacity between 2010 and 2020?",
                correct: "It saw an exponential, five-fold surge",
                wrong: ["It suffered a drastic plummet", "It exactly doubled in proportion", "It remained static"]
            },
            {
                prompt: "Look at the overall trend across all nations.",
                correct: "Every country experienced a significant capacity increase",
                wrong: ["They all plummeted completely", "They plateaued entirely", "They fluctuated wildly"]
            }
        ]
    },
    {
        title: "Internet Penetration (%)",
        chartType: "bar",
        labels: ["2005", "2010", "2015", "2020"],
        datasets: [{ label: "Urban", data: [40, 65, 85, 95] }, { label: "Rural", data: [10, 25, 50, 75] }],
        questions: [
            {
                prompt: "Compare Urban and Rural penetration throughout the period.",
                correct: "Urban areas consistently and significantly outperformed Rural areas",
                wrong: ["They displayed a remarkably similar pattern", "Rural significantly outperformed Urban", "The difference was marginal"]
            },
            {
                prompt: "What is the trajectory for both demographics?",
                correct: "They both followed a steep, parallel upward trajectory",
                wrong: ["They mirror one another perfectly at zero", "They both share their lowest point", "They crashed completely"]
            }
        ]
    },
    {
        title: "Fast Food Spending by Age ($/Month)",
        chartType: "bar",
        labels: ["15-25", "26-35", "36-45", "46+"],
        datasets: [{ label: "Spending", data: [120, 90, 50, 20] }],
        questions: [
            {
                prompt: "What is the trend regarding age and fast food expenditure?",
                correct: "A stark inverse correlation; as age increases, spending drops",
                wrong: ["A direct correlation", "It plateaued entirely", "The figures were perfectly identical across groups"]
            },
            {
                prompt: "Compare the 15-25 group to the 46+ group.",
                correct: "The youngest demographic spent exactly six times as much",
                wrong: ["A drastic collapse of youth spending", "Wild fluctuations between the two", "A completely static plateau for both"]
            }
        ]
    },
    {
        title: "Electric Vehicle Market Share (%)",
        chartType: "bar",
        labels: ["2017", "2018", "2019", "2020"],
        datasets: [{ label: "Norway", data: [40, 50, 60, 75] }, { label: "Global Average", data: [1, 2, 3, 5] }],
        questions: [
            {
                prompt: "Compare Norway to the Global Average across the period.",
                correct: "Norway completely dwarfed the global average",
                wrong: ["They experienced identical figures", "The global average significantly outperformed Norway", "The difference was entirely inverted"]
            },
            {
                prompt: "What is the pattern for Norway over the four years?",
                correct: "A steady, progressive upward trajectory",
                wrong: ["They stood in stark contrast", "They were completely static", "They experienced a sharp decline"]
            }
        ]
    },
    {
        title: "Healthcare Spending per Capita ($ Thousands)",
        chartType: "bar",
        labels: ["USA", "Switzerland", "Germany", "UK"],
        datasets: [{ label: "Spending", data: [11, 8, 6, 4] }],
        questions: [
            {
                prompt: "Compare the USA with the UK.",
                correct: "The USA's expenditure was nearly triple that of the UK",
                wrong: ["They shared a broadly similar figure", "The UK marginally outperformed the USA", "They experienced identical growth"]
            },
            {
                prompt: "Compare Switzerland and Germany.",
                correct: "Switzerland's spending was moderately higher than Germany's",
                wrong: ["They stood in stark contrast", "It exactly doubled", "Germany significantly outperformed Switzerland"]
            }
        ]
    },

    // ==========================================
    // BATCH 3 - TYPE 4: MULTI-LINE GRAPHS
    // ==========================================
    {
        title: "E-books vs Paperbacks (Millions Sold)",
        chartType: "line",
        labels: ["2010", "2012", "2014", "2016", "2018"],
        datasets: [
            { label: "Paperbacks", data: [100, 90, 70, 50, 45] },
            { label: "E-books", data: [10, 30, 80, 110, 120] }
        ],
        questions: [
            {
                prompt: "What happened specifically in 2014?",
                correct: "E-books successfully intersected and overtook Paperbacks",
                wrong: ["Paperbacks recovered their leading position", "Both markets entirely collapsed", "E-books plummeted abruptly"]
            },
            {
                prompt: "How would you describe the overarching relationship?",
                correct: "They exhibit completely inverse trajectories",
                wrong: ["They closely mirrored one another", "They both plateaued simultaneously", "They shared a proportional growth pattern"]
            }
        ]
    },
    {
        title: "Petrol vs Electric Cars (Thousands)",
        chartType: "line",
        labels: ["2015", "2017", "2019", "2021", "2023"],
        datasets: [
            { label: "Petrol", data: [500, 480, 400, 200, 150] },
            { label: "Electric", data: [10, 50, 150, 300, 450] }
        ],
        questions: [
            {
                prompt: "What occurred between 2019 and 2021?",
                correct: "Electric car sales dramatically overtook Petrol sales",
                wrong: ["Petrol sales reached a record peak", "Both sectors levelled off", "Electric sales plummeted sharply"]
            },
            {
                prompt: "Look at Petrol cars from 2017 to 2021. What is the trend?",
                correct: "A sharp, consistent downward trajectory",
                wrong: ["A period of exponential surge", "A completely static plateau", "Wild volatility"]
            }
        ]
    },
    {
        title: "Suburbs vs City Center Population (Thousands)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "City Center", data: [200, 180, 150, 100] },
            { label: "Suburbs", data: [50, 80, 120, 250] }
        ],
        questions: [
            {
                prompt: "How would you describe the Suburbs trajectory?",
                correct: "An exponential surge as people migrated outwards",
                wrong: ["A steep, uninterrupted downward trajectory", "A period of erratic fluctuation", "A drastic spike followed by a plateau"]
            },
            {
                prompt: "What happened to the City Center population?",
                correct: "It suffered a steady and consistent decline",
                wrong: ["It widened the gap negatively", "It ran perfectly parallel to the Suburbs", "It surged exponentially"]
            }
        ]
    },
    {
        title: "Inflation vs Interest Rates (%)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        datasets: [
            { label: "Inflation", data: [2, 4, 8, 9, 3] },
            { label: "Interest Rates", data: [1, 2, 4, 10, 10] }
        ],
        questions: [
            {
                prompt: "What happened between Q3 and Q4?",
                correct: "Interest rates surged and intersected Inflation",
                wrong: ["Interest rates plummeted abruptly", "Both markets completely collapsed", "Inflation overtook Interest rates"]
            },
            {
                prompt: "Look at Q4 to Q5. What happened?",
                correct: "Inflation crashed while Interest rates plateaued",
                wrong: ["They experienced a severe mutual crash", "They continued to double identically", "They fluctuated wildly together"]
            }
        ]
    },
    {
        title: "Streaming vs Cable TV (Millions)",
        chartType: "line",
        labels: ["2012", "2014", "2016", "2018", "2020"],
        datasets: [
            { label: "Cable", data: [100, 95, 80, 50, 30] },
            { label: "Streaming", data: [20, 40, 90, 150, 200] }
        ],
        questions: [
            {
                prompt: "What is the overarching relationship between the two datasets?",
                correct: "They show completely inverse trajectories",
                wrong: ["They closely mirrored one another's trajectory", "They fluctuated entirely independently", "Cable surged while Streaming dropped"]
            },
            {
                prompt: "What happened around 2016?",
                correct: "An intersection where Streaming overtook Cable",
                wrong: ["A steady, gradual increase in both", "A volatile and erratic period", "An exponential surge in Cable"]
            }
        ]
    },
    {
        title: "Desktop vs Mobile Gaming ($ Billions)",
        chartType: "line",
        labels: ["2014", "2016", "2018", "2020", "2022"],
        datasets: [
            { label: "Desktop", data: [40, 45, 42, 40, 38] },
            { label: "Mobile", data: [15, 30, 60, 90, 110] }
        ],
        questions: [
            {
                prompt: "What happened to Desktop Gaming overall?",
                correct: "It peaked slightly then experienced a slow, marginal decline",
                wrong: ["It reached a record trough", "It plateaued completely at zero", "It skyrocketed above Mobile"]
            },
            {
                prompt: "How would you describe Mobile Gaming?",
                correct: "An exponential surge that eventually intersected Desktop",
                wrong: ["An erratic series of fluctuations", "A steady, gradual decline", "A sudden collapse and recovery"]
            }
        ]
    },
    {
        title: "National Import vs Export ($ Billions)",
        chartType: "line",
        labels: ["2015", "2016", "2017", "2018"],
        datasets: [
            { label: "Imports", data: [100, 90, 70, 50] },
            { label: "Exports", data: [30, 40, 60, 80] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two lines?",
                correct: "They exhibit perfect, inverse trajectories that eventually cross",
                wrong: ["They closely mirrored an upward trend", "They both plateaued immediately", "They shared a parallel growth pattern"]
            },
            {
                prompt: "What is happening to the gap between the two rates before 2017?",
                correct: "The gap is significantly narrowing",
                wrong: ["The gap is widening exponentially", "Both indicators plateaued", "Exports plummeted below Imports"]
            }
        ]
    },
    {
        title: "Domestic vs International Tourism (Millions)",
        chartType: "line",
        labels: ["2018", "2019", "2020", "2021", "2022"],
        datasets: [
            { label: "Domestic", data: [150, 160, 20, 100, 140] },
            { label: "International", data: [80, 90, 5, 20, 50] }
        ],
        questions: [
            {
                prompt: "What happened specifically in 2020?",
                correct: "Both sectors suffered an identical, devastating crash",
                wrong: ["They peaked simultaneously", "They intersected as Domestic overtook International", "They dipped marginally and never recovered"]
            },
            {
                prompt: "Compare the recovery in 2021 and 2022.",
                correct: "Domestic tourism recovered significantly faster than International",
                wrong: ["International completely outpaced Domestic", "Both remained at a flat plateau", "They experienced a continued plummet"]
            }
        ]
    },
    {
        title: "Meat vs Vegan Diet Adoption (Thousands)",
        chartType: "line",
        labels: ["2010", "2013", "2016", "2019", "2022"],
        datasets: [
            { label: "Traditional Meat", data: [500, 480, 400, 250, 200] },
            { label: "Vegan Diet", data: [10, 50, 150, 300, 400] }
        ],
        questions: [
            {
                prompt: "Look at the period from 2016 to 2019. How would you describe it?",
                correct: "Vegan adoption surged dramatically, overtaking Meat diets",
                wrong: ["They showed inverse patterns that never closed", "They fluctuated wildly", "They plateaued completely"]
            },
            {
                prompt: "What is the trajectory of Traditional Meat diets?",
                correct: "A steep and continuous decline",
                wrong: ["It plateaued entirely", "It surged exponentially", "It crashed and then rapidly recovered"]
            }
        ]
    },
    {
        title: "High School vs College Grad Salaries ($ Thousands)",
        chartType: "line",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "High School", data: [25, 27, 28, 29] },
            { label: "College", data: [35, 45, 60, 80] }
        ],
        questions: [
            {
                prompt: "What happened to High School salaries overall?",
                correct: "They remained highly static, forming a long, low plateau",
                wrong: ["They continued to fluctuate wildly", "They plateaued completely after crashing", "They skyrocketed"]
            },
            {
                prompt: "What happened to the wage gap over the 30-year period?",
                correct: "The discrepancy widened exponentially",
                wrong: ["It closed completely in 2020", "It remained perfectly parallel", "It narrowed to a marginal difference"]
            }
        ]
    },
    // ==========================================
    // BATCH 4 - ADVANCED DATA (Band 7.5 - 8.0)
    // ==========================================
    {
        title: "Projected Urban vs Rural Population (Millions)",
        chartType: "line",
        labels: ["2000", "2010", "2020", "2030 (est)", "2040 (est)"],
        datasets: [
            { label: "Urban", data: [40, 55, 70, 95, 120] },
            { label: "Rural", data: [80, 75, 60, 45, 30] }
        ],
        questions: [
            {
                prompt: "Looking at the period beyond 2020, how would you describe the forecast for rural populations?",
                correct: "It is projected to continue its steep, uninterrupted downward trajectory.",
                wrong: ["It will have suffered a dramatic and sudden crash.", "It is bound to experience an exponential surge.", "It is anticipated to level off completely."]
            },
            {
                prompt: "How would you describe the overall relationship between the two demographic trends?",
                correct: "They exhibit diametrically opposed trajectories that intersected around 2015.",
                wrong: ["They closely mirror one another's proportional growth.", "They are expected to run perfectly parallel into the future.", "They both suffered a sudden collapse and rapid recovery."]
            }
        ]
    },
    {
        title: "Annual Foreign Investment Volatility ($ Billions)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
        datasets: [{ label: "FDI", data: [12, 85, 10, 90, 8, 95] }],
        questions: [
            {
                prompt: "Which phrase best encapsulates the behavior of foreign investment across the six quarters?",
                correct: "It was characterized by extreme and erratic volatility.",
                wrong: ["It maintained a remarkably stable plateau.", "It experienced a smooth, exponential surge.", "It suffered a consistent and steady decline."]
            },
            {
                prompt: "What occurred between Q1 and Q2, and again between Q3 and Q4?",
                correct: "Investment saw dramatic, unprecedented spikes.",
                wrong: ["It bottomed out completely.", "It experienced a marginal, steady increase.", "It levelled off to a high plateau."]
            }
        ]
    },
    {
        title: "Wealth Distribution by Age Demographic (%)",
        chartType: "bar",
        labels: ["Under 30", "30-45", "46-60", "Over 60"],
        datasets: [
            { label: "1990", data: [15, 30, 35, 20] }, 
            { label: "2020", data: [5, 20, 45, 30] }
        ],
        questions: [
            {
                prompt: "Compare the 'Under 30' wealth share between 1990 and 2020.",
                correct: "Their proportion of wealth diminished to exactly a third of its former size.",
                wrong: ["They experienced an exponential surge in wealth.", "Their financial standing remained relatively static.", "They vastly outperformed the 'Over 60' demographic."]
            },
            {
                prompt: "What is the most striking overarching trend across the thirty-year period?",
                correct: "A stark and widening disparity favoring older demographics.",
                wrong: ["A completely uniform distribution of wealth.", "A sudden collapse in the financial standing of older citizens.", "A direct correlation between youth and wealth accumulation."]
            }
        ]
    },
    {
        title: "Corporate Spending Drop (Millions)",
        chartType: "line",
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{ label: "Marketing", data: [100, 95, 15, 12] }],
        questions: [
            {
                prompt: "Look closely at the plummet from February to March. Which phrasing is grammatically accurate?",
                correct: "Spending plummeted by 80 million.",
                wrong: ["Spending plummeted to 80 million.", "Spending surged by 15 million.", "Spending dropped to 80 million."]
            },
            {
                prompt: "How else could you accurately describe the March figure relative to January?",
                correct: "It collapsed to a mere fraction of its original peak.",
                wrong: ["It remained relatively stable.", "It represented a marginal decrease.", "It more than doubled its initial value."]
            }
        ]
    },
    {
        title: "Sources of National Energy (2022)",
        chartType: "pie",
        labels: ["Fossil Fuels", "Nuclear", "Hydroelectric", "Solar & Wind"],
        datasets: [{ label: "Energy (%)", data: [78, 12, 8, 2] }],
        questions: [
            {
                prompt: "How would you describe the role of Solar & Wind energy combined?",
                correct: "They accounted for a highly marginal fraction of the total.",
                wrong: ["They constituted a significant majority.", "They were the predominant source of national power.", "They comprised precisely a quarter."]
            },
            {
                prompt: "How does Fossil Fuel usage compare to the other three categories combined?",
                correct: "It completely dwarfed all alternative sources combined.",
                wrong: ["It stood in identical proportion to the renewable sectors.", "It accounted for roughly a third of the total.", "It represented a tiny, negligible minority."]
            }
        ]
    },
    // ==========================================
    // BATCH 5 - ADVANCED DATA EXPANSION (Band 7.5 - 8.0)
    // ==========================================
    {
        title: "Vintage Film Camera Valuations ($)",
        chartType: "line",
        labels: ["2015", "2017", "2019", "2021", "2023"],
        datasets: [
            { label: "SLR Cameras", data: [150, 140, 200, 450, 800] }, 
            { label: "Rangefinders", data: [300, 290, 280, 260, 250] }
        ],
        questions: [
            {
                prompt: "Describe the trend for SLR Cameras after 2019.",
                correct: "They experienced a stark, exponential surge in market value.",
                wrong: ["They suffered a dramatic and sudden crash.", "They maintained a remarkably stable plateau.", "They experienced a smooth, marginal decline."]
            },
            {
                prompt: "Compare the two trajectories over the 8-year period.",
                correct: "They exhibited diametrically opposed trajectories, intersecting around 2020.",
                wrong: ["They closely mirrored one another's proportional growth.", "They ran perfectly parallel into the future.", "They both suffered a sudden collapse and rapid recovery."]
            }
        ]
    },
    {
        title: "Coastal Wetland Avian Populations (Thousands)",
        chartType: "bar",
        labels: ["2000", "2010", "2020"],
        datasets: [
            { label: "Migratory", data: [120, 80, 25] }, 
            { label: "Native", data: [40, 42, 45] }
        ],
        questions: [
            {
                prompt: "What is the overarching pattern for the migratory species?",
                correct: "A steep, uninterrupted downward trajectory towards a fraction of its original peak.",
                wrong: ["A stark, exponential rise.", "A completely uniform distribution.", "A direct correlation with the native population."]
            },
            {
                prompt: "Contrast the native species with the migratory ones.",
                correct: "While the native population remained relatively static, the migratory numbers collapsed entirely.",
                wrong: ["They displayed broadly similar, dominant figures.", "The native species completely dwarfed the migratory ones in 2000.", "They experienced identical growth."]
            }
        ]
    },
    {
        title: "Computational Processing Volume (Terabytes/Sec)",
        chartType: "line",
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        datasets: [
            { label: "Stochastic Models", data: [5, 15, 80, 150, 300] }, 
            { label: "Deterministic PDEs", data: [100, 105, 110, 112, 115] }
        ],
        questions: [
            {
                prompt: "How would you describe the progression of stochastic modeling processing?",
                correct: "It underwent a parabolic surge, ultimately dwarfing the alternative method.",
                wrong: ["It suffered a drastic plummet.", "It levelled off completely.", "It experienced wild and erratic volatility."]
            },
            {
                prompt: "What is the defining characteristic of the deterministic PDE data?",
                correct: "It maintained a highly stable, marginal upward progression.",
                wrong: ["It plummeted abruptly.", "It intersected and overtook the stochastic models.", "It showed a completely inverse trend."]
            }
        ]
    },
    {
        title: "3D Medical Imaging Diagnostics (2025)",
        chartType: "pie",
        labels: ["CT Scans", "MRI", "Ultrasound", "PET"],
        datasets: [{ label: "Usage (%)", data: [55, 30, 10, 5] }],
        questions: [
            {
                prompt: "How would you describe the reliance on CT Scans?",
                correct: "They constituted the absolute majority of all diagnostic procedures.",
                wrong: ["They accounted for a tiny, negligible minority.", "They comprised exactly a quarter.", "They represented a highly marginal fraction."]
            },
            {
                prompt: "Compare the combined usage of Ultrasound and PET to MRI.",
                correct: "Together, they accounted for exactly half the proportion of MRI usage.",
                wrong: ["They represented an identical proportion.", "They significantly outperformed MRI.", "They constituted a significant majority."]
            }
        ]
    },
    {
        title: "Suspicious Financial Transaction Flags (Thousands)",
        chartType: "line",
        labels: ["2018", "2019", "2020", "2021", "2022"],
        datasets: [
            { label: "Domestic", data: [50, 48, 45, 42, 40] }, 
            { label: "Cross-Border", data: [10, 15, 60, 120, 250] }
        ],
        questions: [
            {
                prompt: "Describe the trajectory of Cross-Border anomalies.",
                correct: "They skyrocketed abruptly, representing a twenty-five-fold increase over the period.",
                wrong: ["They bottomed out completely.", "They remained highly static, forming a long plateau.", "They experienced a moderate decline."]
            },
            {
                prompt: "What happened to the gap between Domestic and Cross-Border flags?",
                correct: "The initial discrepancy was entirely inverted as cross-border flags surged.",
                wrong: ["The gap remained completely static.", "Domestic flags plummeted below Cross-Border flags.", "The lines ran perfectly parallel."]
            }
        ]
    },
    {
        title: "National Energy Grid Integration (Gigawatts)",
        chartType: "line",
        labels: ["2005", "2010", "2015", "2020", "2025 (est)"],
        datasets: [
            { label: "Fossil Fuels", data: [200, 195, 150, 80, 30] }, 
            { label: "Renewables", data: [10, 25, 90, 160, 250] }
        ],
        questions: [
            {
                prompt: "How would you describe the relationship between the two energy sectors?",
                correct: "They exhibited completely inverse trajectories, decisively intersecting between 2010 and 2015.",
                wrong: ["They showed a completely identical pattern.", "They fluctuated entirely independently.", "They both suffered a sudden collapse."]
            },
            {
                prompt: "Looking at the 2025 projection for Fossil Fuels, what is the expected outcome?",
                correct: "It is projected to collapse to a mere fraction of its 2005 peak.",
                wrong: ["It is anticipated to level off completely.", "It is bound to experience an exponential surge.", "It will recover swiftly to previous levels."]
            }
        ]
    },
    {
        title: "Graduate Employability within 6 Months (%)",
        chartType: "bar",
        labels: ["Applied Mathematics", "Pure Mathematics", "Physics", "General Science"],
        datasets: [
            { label: "2015", data: [65, 40, 50, 45] }, 
            { label: "2025", data: [95, 42, 55, 48] }
        ],
        questions: [
            {
                prompt: "Contrast Applied Mathematics with the other disciplines in 2025.",
                correct: "It completely outstripped the other fields, achieving near-universal employability.",
                wrong: ["They shared a broadly similar figure.", "It experienced a sharp decline compared to Physics.", "It stood in identical proportions to Pure Mathematics."]
            },
            {
                prompt: "What is the defining characteristic of the Pure Mathematics data?",
                correct: "It remained highly static, forming a prolonged, low-level plateau.",
                wrong: ["It saw a twofold increase.", "It surged dramatically.", "It suffered a drastic plummet."]
            }
        ]
    },
    {
        title: "Social Services Budget Allocation",
        chartType: "pie",
        labels: ["Aged Care", "Disability Support", "Family Benefits", "Housing"],
        datasets: [{ label: "Allocation (%)", data: [45, 35, 15, 5] }],
        questions: [
            {
                prompt: "Summarize the allocation for Aged Care and Disability Support.",
                correct: "Combined, they commanded an overwhelming majority of the total expenditure.",
                wrong: ["They accounted for exactly half.", "They constituted a mere fraction.", "They were the least preferred subjects."]
            },
            {
                prompt: "Describe the funding directed towards Housing.",
                correct: "It represented a highly marginal, negligible proportion of the overall budget.",
                wrong: ["It constituted the absolute majority.", "It made up exactly a quarter.", "It was the primary expenditure."]
            }
        ]
    },
    {
        title: "Mechanical Restoration Wait Times (Months)",
        chartType: "line",
        labels: ["Jan", "Mar", "May", "Jul", "Sep"],
        datasets: [
            { label: "Standard Repair", data: [1, 1.5, 2, 2.5, 3] }, 
            { label: "Full Repaint & Leatherette", data: [2, 4, 8, 14, 22] }
        ],
        questions: [
            {
                prompt: "How would you characterize the wait time for Full Repaint & Leatherette services?",
                correct: "It underwent a parabolic surge, compounding drastically over the year.",
                wrong: ["It remained relatively stable.", "It suffered a marginal dip.", "It levelled off completely."]
            },
            {
                prompt: "Compare the two service trajectories.",
                correct: "While standard repairs saw a marginal, linear increase, comprehensive restorations widened the gap exponentially.",
                wrong: ["They closely mirrored one another.", "They exhibited completely inverse trajectories.", "They intersected and overtook one another repeatedly."]
            }
        ]
    },
    {
        title: "National Olympiad Participation (Thousands)",
        chartType: "bar",
        labels: ["2010", "2015", "2020", "2025"],
        datasets: [
            { label: "Physics", data: [5, 8, 15, 25] }, 
            { label: "Chemistry", data: [6, 7, 8, 7.5] }
        ],
        questions: [
            {
                prompt: "Describe the trajectory of Physics participation.",
                correct: "It experienced a five-fold multiplication, exhibiting a stark upward trajectory.",
                wrong: ["It remained completely static.", "It suffered a dramatic and sudden crash.", "It levelled out to a gradual plateau."]
            },
            {
                prompt: "How does Chemistry compare over the fifteen-year period?",
                correct: "It remained relatively stagnant, plateauing entirely after 2015.",
                wrong: ["It significantly outperformed Physics.", "It skyrocketed abruptly.", "It displayed wild and erratic volatility."]
            }
        ]
    },
    {
        title: "Algorithm Diagnostic Accuracy (%)",
        chartType: "line",
        labels: ["Epoch 10", "Epoch 20", "Epoch 30", "Epoch 40", "Epoch 50"],
        datasets: [
            { label: "Model A", data: [40, 85, 92, 94, 95] }, 
            { label: "Model B", data: [35, 45, 55, 60, 58] }
        ],
        questions: [
            {
                prompt: "What happened to Model A between Epoch 10 and 20?",
                correct: "It witnessed a dramatic, almost vertical spike before gradually leveling off.",
                wrong: ["It suffered a drastic plummet.", "It maintained a highly static, unwavering baseline.", "It fluctuated wildly."]
            },
            {
                prompt: "Describe Model B's performance.",
                correct: "It exhibited a sluggish, marginal climb followed by a slight degradation.",
                wrong: ["It saw a continuous, exponential surge.", "It intersected and overtook Model A.", "It remained exactly double that of Model A."]
            }
        ]
    },
    {
        title: "Industrial Carbon Output (Million Tonnes)",
        chartType: "line",
        labels: ["2018", "2019", "2020", "2021", "2022"],
        datasets: [
            { label: "Regulated Sector", data: [500, 480, 300, 150, 100] }, 
            { label: "Unregulated Sector", data: [200, 210, 250, 350, 480] }
        ],
        questions: [
            {
                prompt: "What occurred within the Regulated Sector between 2019 and 2021?",
                correct: "Emissions plummeted sharply, collapsing to less than a third of previous levels.",
                wrong: ["Emissions remained completely static.", "Emissions surged exponentially.", "Emissions experienced a slight, marginal dip."]
            },
            {
                prompt: "Describe the overarching relationship between the two sectors.",
                correct: "They experienced diametrically opposed trajectories, resulting in a complete inversion of their initial standing.",
                wrong: ["They mirrored one another perfectly.", "They both suffered a sudden collapse and rapid recovery.", "They shared broadly similar figures."]
            }
        ]
    },
    {
        title: "Peer-Reviewed Publications (Thousands)",
        chartType: "bar",
        labels: ["1990", "2000", "2010", "2020"],
        datasets: [
            { label: "Data Science", data: [2, 5, 25, 120] }, 
            { label: "Traditional Statistics", data: [40, 42, 45, 43] }
        ],
        questions: [
            {
                prompt: "Compare Data Science in 1990 to 2020.",
                correct: "The volume of publications exploded, representing a sixty-fold amplification.",
                wrong: ["The volume plummeted drastically.", "It remained relatively stable.", "It halved abruptly."]
            },
            {
                prompt: "Describe the pattern for Traditional Statistics.",
                correct: "It maintained a highly static, unwavering baseline across all three decades.",
                wrong: ["It saw a twofold increase.", "It experienced wild volatility.", "It surged dramatically."]
            }
        ]
    },
    {
        title: "Global Surface Temperature Anomalies (°C)",
        chartType: "line",
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{ label: "Deviation from Mean", data: [0.1, 0.25, 0.4, 0.65, 1.0] }],
        questions: [
            {
                prompt: "How would you describe the overarching climatic trend?",
                correct: "An unabated, progressively steepening upward trajectory.",
                wrong: ["A drastic, sudden collapse.", "A completely static plateau.", "An erratic series of fluctuations."]
            },
            {
                prompt: "Look at the shift from 2010 to 2020.",
                correct: "The anomaly experienced an aggressive, accelerated surge.",
                wrong: ["It leveled off completely.", "It plummeted sharply.", "It maintained a steady, marginal decline."]
            }
        ]
    },
    {
        title: "Urban Transport Subsidies ($ Millions)",
        chartType: "pie",
        labels: ["Rail Networks", "Electric Buses", "Ferry Services", "Cycling Infrastructure"],
        datasets: [{ label: "Allocation (%)", data: [52, 38, 7, 3] }],
        questions: [
            {
                prompt: "Describe the funding directed toward Rail Networks.",
                correct: "It commanded an absolute majority of the total financial allocation.",
                wrong: ["It constituted a negligible fraction.", "It made up exactly a quarter.", "It accounted for roughly a third."]
            },
            {
                prompt: "Compare Cycling Infrastructure to Electric Buses.",
                correct: "Cycling received a completely negligible fraction compared to the substantial bus subsidies.",
                wrong: ["They represented an identical proportion.", "Cycling significantly outperformed Electric Buses.", "They constituted the overwhelming majority combined."]
            }
        ]
    }
];