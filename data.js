const questionBanks = {
    "Grammar: Articles (a/the/none)": [
        { 
            q: "Can you pass me ___ book that is on the desk?", 
            // The correct answer is ALWAYS the first string
            options: ["the", "a", "nothing"] 
        },
        { 
            q: "Water in ___ river is safe for the birds to drink.", 
            options: ["the", "a", "nothing"] 
        }
    ],
    "Grammar: Participles (-ing/-ed)": [
        { 
            q: "I don't want to go into a room with the lights ___.", 
            options: ["turned off", "turning off", "turn off"] 
        },
        { 
            q: "Please don't leave the tap with the water ___.", 
            options: ["running", "runned", "ran"] 
        }
    ],
    "Reading Comprehension (Paragraph Mapping)": [
        { 
            customTime: 45, 
            q: "For decades, the prevailing scientific consensus maintained that complex cognitive abilities, such as tool manufacture, were strictly limited to the primate lineage. It was assumed that avian brains were too small and lacked the structural complexity necessary to support abstract reasoning. However, recent observations of corvids—specifically New Caledonian crows—have fundamentally challenged this assumption.<br><br><b>What is the primary function of this paragraph?</b>", 
            options: [
                "Introduces a shift from an old primate theory to new bird evidence.", 
                "Contrasts the brain size of primates with corvids.", 
                "Details the specific tools made by New Caledonian crows."
            ] 
        }
    ]
};