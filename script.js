
// Enhanced Quiz Data with Multiple Difficulties and Question Types
const quizData = {
  general: {
    name: "General Knowledge",
    icon: "fas fa-lightbulb",
    description: "Test your general knowledge across various topics",
    questions: {
      easy: [
        {
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correct: [2],
          type: "single",
          explanation: "Paris is the capital and most populous city of France.",
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correct: [1],
          type: "single",
          explanation: "Mars is called the Red Planet due to its reddish appearance from iron oxide on its surface.",
        },
        {
          question: "What is the largest mammal in the world?",
          options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
          correct: [1],
          type: "single",
          explanation: "The Blue Whale is the largest animal ever known to have lived on Earth.",
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
          correct: [2],
          type: "single",
          explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.",
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          correct: [2],
          type: "single",
          explanation: "Au comes from the Latin word 'aurum' meaning gold.",
        },
        {
          question: "How many continents are there?",
          options: ["5", "6", "7", "8"],
          correct: [2],
          type: "single",
          explanation:
            "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        },
        {
          question: "What is the smallest country in the world?",
          options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
          correct: [2],
          type: "single",
          explanation: "Vatican City is the smallest sovereign state in the world by both area and population.",
        },
        {
          question: "Which ocean is the largest?",
          options: ["Atlantic", "Indian", "Arctic", "Pacific"],
          correct: [3],
          type: "single",
          explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Platinum"],
          correct: [2],
          type: "single",
          explanation: "Diamond is the hardest naturally occurring substance known.",
        },
        {
          question: "How many sides does a hexagon have?",
          options: ["5", "6", "7", "8"],
          correct: [1],
          type: "single",
          explanation: "A hexagon is a polygon with six sides and six angles.",
        },
      ],
      medium: [
        {
          question: "Which of these are primary colors? (Select all that apply)",
          options: ["Red", "Green", "Blue", "Yellow"],
          correct: [0, 2, 3],
          type: "multiple",
          explanation: "In traditional color theory, red, blue, and yellow are considered primary colors.",
        },
        {
          question: "What is the currency of Japan?",
          options: ["Yuan", "Won", "Yen", "Rupee"],
          correct: [2],
          type: "single",
          explanation: "The Japanese yen is the official currency of Japan.",
        },
        {
          question: "Which Shakespeare play features the characters Romeo and Juliet?",
          options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
          correct: [2],
          type: "single",
          explanation: "Romeo and Juliet is a tragedy written by William Shakespeare.",
        },
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correct: [2],
          type: "single",
          explanation: "12 × 12 = 144, so the square root of 144 is 12.",
        },
        {
          question: "Which elements make up water? (Select all that apply)",
          options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
          correct: [0, 1],
          type: "multiple",
          explanation: "Water (H₂O) is composed of hydrogen and oxygen atoms.",
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1910", "1911", "1912", "1913"],
          correct: [2],
          type: "single",
          explanation: "The RMS Titanic sank on April 15, 1912, during its maiden voyage.",
        },
        {
          question: "What is the largest desert in the world?",
          options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
          correct: [2],
          type: "single",
          explanation: "Antarctica is technically the largest desert in the world, being a cold desert.",
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          correct: [2],
          type: "single",
          explanation: "Mercury is the closest planet to the Sun in our solar system.",
        },
        {
          question: "What is the longest river in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correct: [1],
          type: "single",
          explanation: "The Nile River is generally considered the longest river in the world.",
        },
        {
          question: "Which of these are noble gases? (Select all that apply)",
          options: ["Helium", "Neon", "Oxygen", "Argon"],
          correct: [0, 1, 3],
          type: "multiple",
          explanation: "Helium, neon, and argon are all noble gases in the periodic table.",
        },
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Perth"],
          correct: [2],
          type: "single",
          explanation: "Canberra is the capital city of Australia.",
        },
        {
          question: "Who wrote '1984'?",
          options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
          correct: [1],
          type: "single",
          explanation: "George Orwell wrote the dystopian novel '1984', published in 1949.",
        },
        {
          question: "What is the speed of light in vacuum?",
          options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
          correct: [0],
          type: "single",
          explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second.",
        },
        {
          question: "Which countries border France? (Select all that apply)",
          options: ["Spain", "Germany", "Italy", "Netherlands"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation: "France borders Spain, Germany, and Italy, among other countries.",
        },
        {
          question: "What is the smallest prime number?",
          options: ["0", "1", "2", "3"],
          correct: [2],
          type: "single",
          explanation: "2 is the smallest prime number and the only even prime number.",
        },
      ],
      hard: [
        {
          question: "Which of these are correct about quantum mechanics? (Select all that apply)",
          options: [
            "Particles can exist in multiple states simultaneously",
            "Observation affects the outcome of measurements",
            "Energy is always continuous",
            "Uncertainty principle limits precision of measurements",
          ],
          correct: [0, 1, 3],
          type: "multiple",
          explanation:
            "Quantum mechanics involves superposition, observer effect, and uncertainty principle. Energy is quantized, not continuous.",
        },
        {
          question: "What is the Fibonacci sequence's 8th number?",
          options: ["13", "21", "34", "55"],
          correct: [1],
          type: "single",
          explanation: "The Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21... The 8th number is 21.",
        },
        {
          question: "Which philosophical concept is associated with René Descartes?",
          options: ["Tabula rasa", "Cogito ergo sum", "Categorical imperative", "Will to power"],
          correct: [1],
          type: "single",
          explanation: "'Cogito ergo sum' (I think, therefore I am) is Descartes' famous philosophical statement.",
        },
        {
          question: "What is the half-life of Carbon-14?",
          options: ["5,730 years", "1,600 years", "50,000 years", "100 years"],
          correct: [0],
          type: "single",
          explanation:
            "Carbon-14 has a half-life of approximately 5,730 years, making it useful for radiocarbon dating.",
        },
        {
          question: "Which mathematical constants are transcendental? (Select all that apply)",
          options: ["π (pi)", "e (Euler's number)", "√2", "φ (golden ratio)"],
          correct: [0, 1],
          type: "multiple",
          explanation: "π and e are transcendental numbers, while √2 and φ are algebraic numbers.",
        },
        {
          question: "What is the name of the theoretical boundary around a black hole?",
          options: ["Photon sphere", "Event horizon", "Ergosphere", "Singularity"],
          correct: [1],
          type: "single",
          explanation:
            "The event horizon is the boundary beyond which nothing can escape a black hole's gravitational pull.",
        },
        {
          question: "Which economic theory is associated with John Maynard Keynes?",
          options: ["Supply-side economics", "Monetarism", "Keynesian economics", "Austrian school"],
          correct: [2],
          type: "single",
          explanation:
            "Keynesian economics emphasizes the role of government intervention in managing economic cycles.",
        },
        {
          question: "What is the molecular formula for caffeine?",
          options: ["C₈H₁₀N₄O₂", "C₆H₁₂O₆", "C₂H₅OH", "C₁₇H₂₁NO₄"],
          correct: [0],
          type: "single",
          explanation: "Caffeine has the molecular formula C₈H₁₀N₄O₂.",
        },
        {
          question: "Which logical fallacies involve faulty reasoning? (Select all that apply)",
          options: ["Ad hominem", "Straw man", "Modus ponens", "False dichotomy"],
          correct: [0, 1, 3],
          type: "multiple",
          explanation:
            "Ad hominem, straw man, and false dichotomy are logical fallacies. Modus ponens is a valid logical form.",
        },
        {
          question: "What is the Planck constant approximately?",
          options: ["6.626 × 10⁻³⁴ J⋅s", "3.0 × 10⁸ m/s", "9.8 m/s²", "1.6 × 10⁻¹⁹ C"],
          correct: [0],
          type: "single",
          explanation: "The Planck constant is approximately 6.626 × 10⁻³⁴ joule-seconds.",
        },
        {
          question: "Which programming paradigms emphasize immutability? (Select all that apply)",
          options: [
            "Functional programming",
            "Object-oriented programming",
            "Logic programming",
            "Imperative programming",
          ],
          correct: [0, 2],
          type: "multiple",
          explanation: "Functional and logic programming paradigms typically emphasize immutability.",
        },
        {
          question: "What is the time complexity of quicksort in the average case?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correct: [1],
          type: "single",
          explanation: "Quicksort has an average time complexity of O(n log n).",
        },
        {
          question: "Which neurotransmitters are associated with mood regulation? (Select all that apply)",
          options: ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
          correct: [0, 1, 3],
          type: "multiple",
          explanation: "Serotonin, dopamine, and GABA are all involved in mood regulation.",
        },
        {
          question: "What is the name of the paradox involving a set of all sets that do not contain themselves?",
          options: ["Zeno's paradox", "Russell's paradox", "Banach-Tarski paradox", "Fermi paradox"],
          correct: [1],
          type: "single",
          explanation: "Russell's paradox highlights contradictions in naive set theory.",
        },
        {
          question: "Which thermodynamic laws are correctly stated? (Select all that apply)",
          options: [
            "Energy cannot be created or destroyed",
            "Entropy of an isolated system always increases",
            "Absolute zero is achievable",
            "Heat flows from hot to cold objects",
          ],
          correct: [0, 1, 3],
          type: "multiple",
          explanation:
            "The first and second laws of thermodynamics and heat flow direction are correct. Absolute zero is unattainable.",
        },
        {
          question: "What is the chromatic number of a complete graph with 5 vertices (K₅)?",
          options: ["3", "4", "5", "6"],
          correct: [2],
          type: "single",
          explanation: "A complete graph with n vertices requires n colors, so K₅ has chromatic number 5.",
        },
        {
          question: "Which cognitive biases affect decision-making? (Select all that apply)",
          options: ["Confirmation bias", "Anchoring bias", "Availability heuristic", "Occam's razor"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Confirmation bias, anchoring bias, and availability heuristic are cognitive biases. Occam's razor is a principle, not a bias.",
        },
        {
          question: "What is the derivative of ln(x) with respect to x?",
          options: ["x", "1/x", "ln(x)", "e^x"],
          correct: [1],
          type: "single",
          explanation: "The derivative of the natural logarithm ln(x) is 1/x.",
        },
        {
          question: "Which encryption methods are considered quantum-resistant? (Select all that apply)",
          options: ["RSA", "Lattice-based cryptography", "Hash-based signatures", "Elliptic curve cryptography"],
          correct: [1, 2],
          type: "multiple",
          explanation:
            "Lattice-based and hash-based cryptography are considered quantum-resistant, while RSA and ECC are vulnerable to quantum attacks.",
        },
        {
          question: "What is the solution to the equation x² - 5x + 6 = 0?",
          options: ["x = 2, 3", "x = 1, 6", "x = -2, -3", "x = 0, 5"],
          correct: [0],
          type: "single",
          explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3.",
        },
      ],
    },
  },
  science: {
    name: "Science & Technology",
    icon: "fas fa-atom",
    description: "Explore the wonders of science and technology",
    questions: {
      easy: [
        {
          question: "What does DNA stand for?",
          options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Acid", "Deoxyribose Nucleic Acid", "Dinitrogen Acid"],
          correct: [0],
          type: "single",
          explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic information.",
        },
        {
          question: "Which element has the atomic number 1?",
          options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
          correct: [1],
          type: "single",
          explanation: "Hydrogen has atomic number 1, meaning it has one proton in its nucleus.",
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
          correct: [2],
          type: "single",
          explanation: "Jupiter is the largest planet in our solar system by both mass and volume.",
        },
        {
          question: "What is the chemical formula for water?",
          options: ["H₂O", "CO₂", "NaCl", "CH₄"],
          correct: [0],
          type: "single",
          explanation: "Water consists of two hydrogen atoms and one oxygen atom (H₂O).",
        },
        {
          question: "Which force keeps planets in orbit around the Sun?",
          options: ["Magnetic force", "Gravitational force", "Electric force", "Nuclear force"],
          correct: [1],
          type: "single",
          explanation: "Gravitational force between the Sun and planets keeps them in orbital motion.",
        },
        {
          question: "What is the speed of sound in air at room temperature?",
          options: ["343 m/s", "300 m/s", "1000 m/s", "150 m/s"],
          correct: [0],
          type: "single",
          explanation: "Sound travels at approximately 343 meters per second in air at 20°C.",
        },
        {
          question: "Which gas makes up most of Earth's atmosphere?",
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
          correct: [2],
          type: "single",
          explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
        },
        {
          question: "What is the basic unit of life?",
          options: ["Atom", "Molecule", "Cell", "Tissue"],
          correct: [2],
          type: "single",
          explanation: "The cell is considered the basic structural and functional unit of life.",
        },
        {
          question: "Which scientist developed the theory of evolution?",
          options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo Galilei"],
          correct: [2],
          type: "single",
          explanation: "Charles Darwin developed the theory of evolution by natural selection.",
        },
        {
          question: "What is the chemical symbol for iron?",
          options: ["Ir", "Fe", "In", "I"],
          correct: [1],
          type: "single",
          explanation: "Fe comes from the Latin word 'ferrum' meaning iron.",
        },
      ],
      medium: [
        {
          question: "Which programming languages are object-oriented? (Select all that apply)",
          options: ["Java", "Python", "C", "JavaScript"],
          correct: [0, 1, 3],
          type: "multiple",
          explanation: "Java, Python, and JavaScript support object-oriented programming. C is procedural.",
        },
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
          correct: [1],
          type: "single",
          explanation: "Mitochondria produce ATP, the energy currency of cells.",
        },
        {
          question: "Which planet has the most moons?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correct: [1],
          type: "single",
          explanation: "Saturn has the most confirmed moons with over 80 natural satellites.",
        },
        {
          question: "What is the pH of pure water?",
          options: ["6", "7", "8", "9"],
          correct: [1],
          type: "single",
          explanation: "Pure water has a pH of 7, which is neutral on the pH scale.",
        },
        {
          question: "Which types of electromagnetic radiation have the highest energy? (Select all that apply)",
          options: ["Radio waves", "X-rays", "Gamma rays", "Visible light"],
          correct: [1, 2],
          type: "multiple",
          explanation: "X-rays and gamma rays are high-energy electromagnetic radiation.",
        },
        {
          question: "What is the most abundant element in the universe?",
          options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
          correct: [2],
          type: "single",
          explanation: "Hydrogen is the most abundant element, making up about 75% of normal matter.",
        },
        {
          question: "Which law states that energy cannot be created or destroyed?",
          options: ["Newton's first law", "Law of conservation of energy", "Ohm's law", "Boyle's law"],
          correct: [1],
          type: "single",
          explanation:
            "The law of conservation of energy states that energy can only be transformed from one form to another.",
        },
        {
          question: "What is the binary representation of the decimal number 10?",
          options: ["1010", "1100", "1001", "1111"],
          correct: [0],
          type: "single",
          explanation: "10 in decimal equals 1010 in binary (8 + 2 = 10).",
        },
        {
          question: "Which organelles are involved in protein synthesis? (Select all that apply)",
          options: ["Ribosomes", "Endoplasmic reticulum", "Golgi apparatus", "Lysosomes"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Ribosomes synthesize proteins, ER processes them, and Golgi apparatus modifies and packages them.",
        },
        {
          question: "What is the chemical formula for methane?",
          options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
          correct: [0],
          type: "single",
          explanation: "Methane consists of one carbon atom bonded to four hydrogen atoms (CH₄).",
        },
        {
          question: "Which principle explains how airplanes generate lift?",
          options: ["Archimedes' principle", "Bernoulli's principle", "Pascal's principle", "Hooke's law"],
          correct: [1],
          type: "single",
          explanation: "Bernoulli's principle explains how differences in air pressure create lift.",
        },
        {
          question: "What is the smallest unit of matter that retains chemical properties?",
          options: ["Proton", "Neutron", "Electron", "Atom"],
          correct: [3],
          type: "single",
          explanation: "An atom is the smallest unit that retains the chemical properties of an element.",
        },
        {
          question: "Which database types are NoSQL? (Select all that apply)",
          options: ["MongoDB", "MySQL", "Cassandra", "Redis"],
          correct: [0, 2, 3],
          type: "multiple",
          explanation: "MongoDB, Cassandra, and Redis are NoSQL databases. MySQL is a relational (SQL) database.",
        },
        {
          question: "What is the process by which plants make their own food?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
          correct: [1],
          type: "single",
          explanation: "Photosynthesis is the process where plants convert sunlight, CO₂, and water into glucose.",
        },
        {
          question: "Which particles are found in the nucleus of an atom?",
          options: ["Protons only", "Neutrons only", "Protons and neutrons", "Protons, neutrons, and electrons"],
          correct: [2],
          type: "single",
          explanation: "The atomic nucleus contains protons and neutrons. Electrons orbit around the nucleus.",
        },
      ],
      hard: [
        {
          question: "Which quantum mechanical principles are fundamental? (Select all that apply)",
          options: ["Wave-particle duality", "Uncertainty principle", "Superposition", "Classical determinism"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Wave-particle duality, uncertainty principle, and superposition are fundamental to quantum mechanics.",
        },
        {
          question: "What is the time complexity of the merge sort algorithm?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
          correct: [1],
          type: "single",
          explanation: "Merge sort has a time complexity of O(n log n) in all cases.",
        },
        {
          question: "Which enzyme is responsible for unwinding DNA during replication?",
          options: ["DNA polymerase", "Helicase", "Ligase", "Primase"],
          correct: [1],
          type: "single",
          explanation: "Helicase unwinds the DNA double helix during replication.",
        },
        {
          question: "What is the Chandrasekhar limit?",
          options: ["1.4 solar masses", "2.1 solar masses", "3.0 solar masses", "5.0 solar masses"],
          correct: [0],
          type: "single",
          explanation: "The Chandrasekhar limit is approximately 1.4 solar masses for white dwarf stars.",
        },
        {
          question: "Which cryptographic algorithms are asymmetric? (Select all that apply)",
          options: ["RSA", "AES", "Elliptic Curve", "DES"],
          correct: [0, 2],
          type: "multiple",
          explanation: "RSA and Elliptic Curve are asymmetric (public-key) algorithms. AES and DES are symmetric.",
        },
        {
          question: "What is the half-life of Uranium-238?",
          options: ["4.5 million years", "4.5 billion years", "700 million years", "1.3 billion years"],
          correct: [1],
          type: "single",
          explanation: "Uranium-238 has a half-life of approximately 4.5 billion years.",
        },
        {
          question: "Which design patterns are creational? (Select all that apply)",
          options: ["Singleton", "Observer", "Factory", "Strategy"],
          correct: [0, 2],
          type: "multiple",
          explanation: "Singleton and Factory are creational patterns. Observer and Strategy are behavioral patterns.",
        },
        {
          question: "What is the name of the theoretical particle that gives mass to other particles?",
          options: ["Photon", "Higgs boson", "Graviton", "Gluon"],
          correct: [1],
          type: "single",
          explanation: "The Higgs boson is associated with the Higgs field that gives mass to particles.",
        },
        {
          question: "Which machine learning algorithms are unsupervised? (Select all that apply)",
          options: ["K-means clustering", "Linear regression", "Principal Component Analysis", "Decision trees"],
          correct: [0, 2],
          type: "multiple",
          explanation:
            "K-means clustering and PCA are unsupervised. Linear regression and decision trees are supervised.",
        },
        {
          question: "What is the critical temperature for superconductivity in mercury?",
          options: ["4.2 K", "7.2 K", "9.2 K", "77 K"],
          correct: [0],
          type: "single",
          explanation: "Mercury becomes superconducting at approximately 4.2 Kelvin.",
        },
        {
          question: "Which molecular techniques are used for gene editing? (Select all that apply)",
          options: ["CRISPR-Cas9", "PCR", "TALENs", "Western blot"],
          correct: [0, 2],
          type: "multiple",
          explanation:
            "CRISPR-Cas9 and TALENs are gene editing techniques. PCR amplifies DNA, Western blot detects proteins.",
        },
        {
          question: "What is the space complexity of the quicksort algorithm?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correct: [1],
          type: "single",
          explanation: "Quicksort has O(log n) space complexity due to recursive calls on the stack.",
        },
        {
          question: "Which forces are fundamental in the Standard Model? (Select all that apply)",
          options: ["Strong nuclear force", "Weak nuclear force", "Electromagnetic force", "Centrifugal force"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Strong, weak, and electromagnetic forces are fundamental. Centrifugal force is a fictitious force.",
        },
        {
          question: "What is the computational complexity class of problems solvable in polynomial time?",
          options: ["NP", "P", "PSPACE", "EXPTIME"],
          correct: [1],
          type: "single",
          explanation: "P is the class of problems solvable by a deterministic Turing machine in polynomial time.",
        },
        {
          question: "Which neurotransmitter systems are involved in addiction? (Select all that apply)",
          options: ["Dopaminergic", "Serotonergic", "GABAergic", "Cholinergic"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation: "Dopaminergic, serotonergic, and GABAergic systems are all involved in addiction mechanisms.",
        },
        {
          question: "What is the energy required to remove an electron from a hydrogen atom?",
          options: ["13.6 eV", "10.2 eV", "15.4 eV", "12.1 eV"],
          correct: [0],
          type: "single",
          explanation: "The ionization energy of hydrogen is 13.6 electron volts.",
        },
        {
          question: "Which sorting algorithms are stable? (Select all that apply)",
          options: ["Merge sort", "Quick sort", "Insertion sort", "Heap sort"],
          correct: [0, 2],
          type: "multiple",
          explanation: "Merge sort and insertion sort are stable. Quick sort and heap sort are not stable.",
        },
        {
          question: "What is the name of the process where atomic nuclei combine to form heavier elements?",
          options: ["Nuclear fission", "Nuclear fusion", "Radioactive decay", "Beta decay"],
          correct: [1],
          type: "single",
          explanation: "Nuclear fusion combines lighter atomic nuclei to form heavier elements.",
        },
        {
          question: "Which protocols operate at the application layer? (Select all that apply)",
          options: ["HTTP", "TCP", "SMTP", "IP"],
          correct: [0, 2],
          type: "multiple",
          explanation: "HTTP and SMTP are application layer protocols. TCP is transport layer, IP is network layer.",
        },
        {
          question: "What is the maximum theoretical efficiency of a heat engine operating between 300K and 600K?",
          options: ["25%", "50%", "75%", "100%"],
          correct: [1],
          type: "single",
          explanation: "Carnot efficiency = 1 - (T_cold/T_hot) = 1 - (300/600) = 50%.",
        },
      ],
    },
  },
  history: {
    name: "History",
    icon: "fas fa-scroll",
    description: "Journey through the pages of human history",
    questions: {
      easy: [
        {
          question: "In which year did World War II end?",
          options: ["1944", "1945", "1946", "1947"],
          correct: [1],
          type: "single",
          explanation: "World War II ended in 1945 with the surrender of Japan in September.",
        },
        {
          question: "Who was the first person to walk on the moon?",
          options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
          correct: [1],
          type: "single",
          explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969.",
        },
        {
          question: "The Berlin Wall fell in which year?",
          options: ["1987", "1988", "1989", "1990"],
          correct: [2],
          type: "single",
          explanation: "The Berlin Wall fell on November 9, 1989, marking the end of the Cold War era.",
        },
        {
          question: "Who was the first President of the United States?",
          options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
          correct: [3],
          type: "single",
          explanation: "George Washington served as the first President of the United States from 1789 to 1797.",
        },
        {
          question: "Which ancient wonder was located in Alexandria?",
          options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
          correct: [1],
          type: "single",
          explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.",
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1910", "1911", "1912", "1913"],
          correct: [2],
          type: "single",
          explanation: "The RMS Titanic sank on April 15, 1912, during its maiden voyage.",
        },
        {
          question: "Who painted the ceiling of the Sistine Chapel?",
          options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
          correct: [2],
          type: "single",
          explanation: "Michelangelo painted the ceiling of the Sistine Chapel between 1508 and 1512.",
        },
        {
          question: "Which empire was ruled by Julius Caesar?",
          options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
          correct: [1],
          type: "single",
          explanation:
            "Julius Caesar was a Roman general and statesman who played a critical role in the Roman Empire.",
        },
        {
          question: "In which year did the American Civil War begin?",
          options: ["1860", "1861", "1862", "1863"],
          correct: [1],
          type: "single",
          explanation: "The American Civil War began in 1861 and lasted until 1865.",
        },
        {
          question: "Who wrote the Declaration of Independence?",
          options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
          correct: [2],
          type: "single",
          explanation: "Thomas Jefferson was the primary author of the Declaration of Independence in 1776.",
        },
      ],
      medium: [
        {
          question: "Which countries were part of the Axis Powers in WWII? (Select all that apply)",
          options: ["Germany", "Italy", "Japan", "Soviet Union"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Germany, Italy, and Japan formed the main Axis Powers. The Soviet Union was part of the Allies.",
        },
        {
          question: "What was the name of the ship that brought the Pilgrims to America?",
          options: ["Mayflower", "Santa Maria", "Pinta", "Nina"],
          correct: [0],
          type: "single",
          explanation: "The Mayflower brought the Pilgrims to Plymouth, Massachusetts in 1620.",
        },
        {
          question: "Which dynasty ruled China for the longest period?",
          options: ["Ming Dynasty", "Qing Dynasty", "Tang Dynasty", "Zhou Dynasty"],
          correct: [3],
          type: "single",
          explanation: "The Zhou Dynasty ruled China for about 800 years (1046-2560 BCE).",
        },
        {
          question: "Who was known as the 'Iron Lady'?",
          options: ["Queen Elizabeth II", "Margaret Thatcher", "Golda Meir", "Indira Gandhi"],
          correct: [1],
          type: "single",
          explanation: "Margaret Thatcher, the British Prime Minister, was nicknamed the 'Iron Lady'.",
        },
        {
          question: "Which revolutions occurred in the 18th century? (Select all that apply)",
          options: ["American Revolution", "French Revolution", "Industrial Revolution", "Russian Revolution"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "The American, French, and Industrial Revolutions all began in the 18th century. The Russian Revolution was in the 20th century.",
        },
        {
          question: "What was the name of the treaty that ended World War I?",
          options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Westphalia"],
          correct: [0],
          type: "single",
          explanation: "The Treaty of Versailles officially ended World War I between Germany and the Allied Powers.",
        },
        {
          question: "Which pharaoh built the Great Pyramid of Giza?",
          options: ["Tutankhamun", "Ramesses II", "Khufu", "Cleopatra"],
          correct: [2],
          type: "single",
          explanation: "The Great Pyramid of Giza was built for Pharaoh Khufu around 2580-2560 BCE.",
        },
        {
          question: "In which year did the Soviet Union collapse?",
          options: ["1989", "1990", "1991", "1992"],
          correct: [2],
          type: "single",
          explanation: "The Soviet Union officially dissolved on December 26, 1991.",
        },
        {
          question: "Which explorers reached the Americas before Columbus? (Select all that apply)",
          options: ["Leif Erikson", "Zheng He", "Vikings", "Polynesians"],
          correct: [0, 2],
          type: "multiple",
          explanation: "Leif Erikson and other Vikings reached North America around 1000 CE, before Columbus.",
        },
        {
          question: "What was the main cause of the Black Death?",
          options: ["Virus", "Bacteria", "Fungus", "Parasite"],
          correct: [1],
          type: "single",
          explanation: "The Black Death was caused by the bacterium Yersinia pestis.",
        },
        {
          question: "Which empire was known as the 'Land of the Rising Sun'?",
          options: ["Chinese Empire", "Korean Empire", "Japanese Empire", "Mongol Empire"],
          correct: [2],
          type: "single",
          explanation: "Japan has been known as the 'Land of the Rising Sun' for centuries.",
        },
        {
          question: "Who was the last Tsar of Russia?",
          options: ["Alexander III", "Nicholas II", "Alexander II", "Nicholas I"],
          correct: [1],
          type: "single",
          explanation: "Nicholas II was the last Tsar of Russia, ruling until his abdication in 1917.",
        },
        {
          question: "Which ancient civilizations developed writing systems? (Select all that apply)",
          options: ["Mesopotamian", "Egyptian", "Indus Valley", "Olmec"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation: "Mesopotamians, Egyptians, and Indus Valley civilizations all developed early writing systems.",
        },
        {
          question: "What was the name of the first successful English colony in America?",
          options: ["Plymouth", "Jamestown", "Roanoke", "Massachusetts Bay"],
          correct: [1],
          type: "single",
          explanation: "Jamestown, established in 1607, was the first successful English colony in America.",
        },
        {
          question: "Which war was fought between the North and South in America?",
          options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
          correct: [2],
          type: "single",
          explanation: "The American Civil War (1861-1865) was fought between the Northern and Southern states.",
        },
      ],
      hard: [
        {
          question: "Which factors contributed to the fall of the Roman Empire? (Select all that apply)",
          options: ["Economic inflation", "Barbarian invasions", "Political instability", "Climate change"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Economic problems, barbarian invasions, and political instability all contributed to Rome's fall.",
        },
        {
          question: "What was the name of the secret police in Nazi Germany?",
          options: ["SS", "SA", "Gestapo", "Wehrmacht"],
          correct: [2],
          type: "single",
          explanation: "The Gestapo was the official secret police of Nazi Germany.",
        },
        {
          question: "Which treaty established the principle of cuius regio, eius religio?",
          options: ["Peace of Westphalia", "Peace of Augsburg", "Treaty of Versailles", "Congress of Vienna"],
          correct: [1],
          type: "single",
          explanation:
            "The Peace of Augsburg (1555) established the principle that rulers could determine their territory's religion.",
        },
        {
          question: "Who was the Byzantine Emperor during the First Crusade?",
          options: ["Justinian I", "Alexios I Komnenos", "Basil II", "Constantine VII"],
          correct: [1],
          type: "single",
          explanation:
            "Alexios I Komnenos was the Byzantine Emperor who requested help from the West, leading to the First Crusade.",
        },
        {
          question: "Which philosophical schools influenced the Enlightenment? (Select all that apply)",
          options: ["Empiricism", "Rationalism", "Scholasticism", "Stoicism"],
          correct: [0, 1],
          type: "multiple",
          explanation: "Empiricism and rationalism were key philosophical influences on Enlightenment thinking.",
        },
        {
          question: "What was the name of the Mongol law code established by Genghis Khan?",
          options: ["Yassa", "Kurultai", "Ortoq", "Decimal system"],
          correct: [0],
          type: "single",
          explanation: "The Yassa was the oral law code of the Mongol Empire established by Genghis Khan.",
        },
        {
          question: "Which events marked the beginning of the French Revolution? (Select all that apply)",
          options: [
            "Storming of the Bastille",
            "Tennis Court Oath",
            "Estates-General meeting",
            "Execution of Louis XVI",
          ],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "The Estates-General, Tennis Court Oath, and Storming of the Bastille marked the revolution's beginning.",
        },
        {
          question: "Who was the Carthaginian general who crossed the Alps to attack Rome?",
          options: ["Hamilcar Barca", "Hannibal", "Hasdrubal", "Mago"],
          correct: [1],
          type: "single",
          explanation: "Hannibal famously crossed the Alps with elephants during the Second Punic War.",
        },
        {
          question: "Which reforms were implemented during the Meiji Restoration? (Select all that apply)",
          options: [
            "Abolition of feudalism",
            "Modernization of military",
            "Western education system",
            "Isolation policy",
          ],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "The Meiji Restoration abolished feudalism, modernized the military, and adopted Western education.",
        },
        {
          question: "What was the name of the economic policy implemented in the Soviet Union under Lenin?",
          options: ["War Communism", "New Economic Policy", "Five-Year Plans", "Perestroika"],
          correct: [1],
          type: "single",
          explanation:
            "The New Economic Policy (NEP) was Lenin's economic policy that allowed some private enterprise.",
        },
        {
          question: "Which factors led to the decline of the Maya civilization? (Select all that apply)",
          options: ["Drought", "Warfare", "Overpopulation", "Spanish conquest"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation: "Drought, warfare, and overpopulation contributed to Maya decline before Spanish arrival.",
        },
        {
          question: "Who was the last emperor of the Western Roman Empire?",
          options: ["Romulus Augustulus", "Julius Nepos", "Majorian", "Anthemius"],
          correct: [0],
          type: "single",
          explanation: "Romulus Augustulus was the last emperor of the Western Roman Empire, deposed in 476 CE.",
        },
        {
          question:
            "Which technological innovations characterized the Second Industrial Revolution? (Select all that apply)",
          options: ["Electricity", "Steel production", "Internal combustion engine", "Steam engine"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Electricity, steel production, and internal combustion engines defined the Second Industrial Revolution.",
        },
        {
          question: "What was the name of the Chinese examination system for civil service?",
          options: ["Keju", "Mandarin system", "Imperial examination", "Scholar-bureaucrat system"],
          correct: [2],
          type: "single",
          explanation:
            "The Imperial examination system selected civil servants based on merit and knowledge of Confucian texts.",
        },
        {
          question: "Which battles were decisive in Napoleon's downfall? (Select all that apply)",
          options: ["Battle of Leipzig", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Austerlitz"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation: "Leipzig, Waterloo, and Trafalgar were all decisive defeats that led to Napoleon's downfall.",
        },
        {
          question: "Who was the Aztec emperor when Cortés arrived in Mexico?",
          options: ["Moctezuma I", "Moctezuma II", "Itzcoatl", "Axayacatl"],
          correct: [1],
          type: "single",
          explanation: "Moctezuma II was the Aztec emperor when Hernán Cortés arrived in 1519.",
        },
        {
          question: "Which factors contributed to the Protestant Reformation? (Select all that apply)",
          options: ["Corruption in the Catholic Church", "Rise of humanism", "Printing press", "Black Death"],
          correct: [0, 1, 2],
          type: "multiple",
          explanation:
            "Church corruption, humanism, and the printing press all contributed to the Protestant Reformation.",
        },
        {
          question: "What was the name of the trade route connecting Europe and Asia?",
          options: ["Amber Road", "Silk Road", "Spice Route", "Tea Horse Road"],
          correct: [1],
          type: "single",
          explanation: "The Silk Road was the ancient network of trade routes connecting East and West.",
        },
        {
          question: "Which empires controlled Constantinople throughout history? (Select all that apply)",
          options: ["Roman Empire", "Byzantine Empire"],
          correct: [0, 1],
          type: "multiple",
          explanation: "The Roman Empire and Byzantine Empire both controlled Constantinople at different times.",
        },
      ],
    },
  },
}

// Global Variables and State
let currentQuiz = {
  category: null,
  difficulty: null,
  questions: [],
  currentQuestion: 0,
  score: 0,
  answers: [],
  startTime: null,
  questionStartTime: null,
  timeRemaining: 0,
  totalTimeLimit: 0,
  questionTimeLimit: 15,
  timers: {
    question: null,
    total: null,
  },
}

let gameSettings = {
  soundEnabled: true,
  theme: "dark",
}

let leaderboard = []

// Difficulty Settings
const difficultySettings = {
  easy: { questions: 10, timePerQuestion: 15, totalTime: 300 },
  medium: { questions: 15, timePerQuestion: 20, totalTime: 450 },
  hard: { questions: 20, timePerQuestion: 25, totalTime: 600 },
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  loadSettings()
  loadLeaderboard()
  populateCategories()
  setupEventListeners()
  animateStats()
  updateTotalPlayers()
})

// Application Initialization
function initializeApp() {
  showWelcome()
  updateNavigation("home")
}

// Load Settings from Local Storage
function loadSettings() {
  const savedSettings = localStorage.getItem("quizSettings")
  if (savedSettings) {
    gameSettings = { ...gameSettings, ...JSON.parse(savedSettings) }
  }

  // Apply theme
  document.body.className = gameSettings.theme === "light" ? "light-theme" : "dark-theme"

  // Update sound toggle
  const soundToggle = document.getElementById("sound-toggle")
  if (soundToggle) {
    soundToggle.innerHTML = gameSettings.soundEnabled
      ? '<i class="fas fa-volume-up"></i>'
      : '<i class="fas fa-volume-mute"></i>'
    if (!gameSettings.soundEnabled) {
      soundToggle.classList.add("muted")
    }
  }

  // Update theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.innerHTML =
      gameSettings.theme === "light" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
  }
}

// Save Settings to Local Storage
function saveSettings() {
  localStorage.setItem("quizSettings", JSON.stringify(gameSettings))
}

// Load Leaderboard from Local Storage
function loadLeaderboard() {
  const savedLeaderboard = localStorage.getItem("quizLeaderboard")
  if (savedLeaderboard) {
    leaderboard = JSON.parse(savedLeaderboard)
  } else {
    // Initialize with sample data
    leaderboard = generateSampleLeaderboard()
    saveLeaderboard()
  }
}

// Save Leaderboard to Local Storage
function saveLeaderboard() {
  localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard))
}

// Generate Sample Leaderboard Data
function generateSampleLeaderboard() {
  const sampleNames = [
    "Alex Johnson",
    "Sarah Chen",
    "Mike Rodriguez",
    "Emma Wilson",
    "David Kim",
    "Lisa Thompson",
    "John Davis",
    "Maria Garcia",
    "Chris Lee",
    "Anna Brown",
  ]
  const categories = Object.keys(quizData)
  const difficulties = ["easy", "medium", "hard"]
  const sample = []

  for (let i = 0; i < 50; i++) {
    sample.push({
      name: sampleNames[Math.floor(Math.random() * sampleNames.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
      score: Math.floor(Math.random() * 1000) + 200,
      accuracy: Math.floor(Math.random() * 40) + 60,
      time: Math.floor(Math.random() * 300) + 120,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
    })
  }

  return sample.sort((a, b) => b.score - a.score)
}

// Navigation Functions
function showWelcome() {
  hideAllSections()
  document.getElementById("welcome-section").classList.remove("hidden")
  updateNavigation("home")
}

function showCategories() {
  hideAllSections()
  document.getElementById("category-section").classList.remove("hidden")
  updateNavigation("categories")
}

function showLeaderboard() {
  hideAllSections()
  document.getElementById("leaderboard-section").classList.remove("hidden")
  updateNavigation("leaderboard")
  populateLeaderboard()
}

function showAbout() {
  hideAllSections()
  document.getElementById("about-section").classList.remove("hidden")
  updateNavigation("about")
}

function hideAllSections() {
  const sections = [
    "welcome-section",
    "category-section",
    "quiz-section",
    "results-section",
    "review-section",
    "leaderboard-section",
    "about-section",
  ]
  sections.forEach((section) => {
    const element = document.getElementById(section)
    if (element) element.classList.add("hidden")
  })
}

function updateNavigation(activeSection) {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.section === activeSection) {
      link.classList.add("active")
    }
  })
}

// Populate Categories
function populateCategories() {
  const categoriesGrid = document.getElementById("categories-grid")
  if (!categoriesGrid) return

  categoriesGrid.innerHTML = ""

  Object.keys(quizData).forEach((categoryKey) => {
    const category = quizData[categoryKey]
    const categoryCard = document.createElement("div")
    categoryCard.className = "category-card"
    categoryCard.onclick = () => startQuiz(categoryKey)

    const totalQuestions = Object.values(category.questions).reduce((sum, questions) => sum + questions.length, 0)

    categoryCard.innerHTML = `
      <i class="${category.icon} category-icon"></i>
      <h3 class="category-title">${category.name}</h3>
      <p class="category-description">${category.description}</p>
      <div class="category-stats">
        <span>${totalQuestions} Questions</span>
        <span>3 Levels</span>
      </div>
    `

    categoriesGrid.appendChild(categoryCard)
  })
}

// Start Quiz
function startQuiz(categoryKey) {
  const difficulty = document.querySelector(".difficulty-btn.active").dataset.difficulty

  if (!quizData[categoryKey] || !quizData[categoryKey].questions[difficulty]) {
    alert("Quiz not available for this category and difficulty.")
    return
  }

  // Initialize quiz state
  currentQuiz = {
    category: categoryKey,
    difficulty: difficulty,
    questions: shuffleArray([...quizData[categoryKey].questions[difficulty]]),
    currentQuestion: 0,
    score: 0,
    answers: [],
    startTime: Date.now(),
    questionStartTime: Date.now(),
    timeRemaining: difficultySettings[difficulty].totalTime,
    totalTimeLimit: difficultySettings[difficulty].totalTime,
    questionTimeLimit: difficultySettings[difficulty].timePerQuestion,
    timers: { question: null, total: null },
  }

  // Limit questions based on difficulty
  currentQuiz.questions = currentQuiz.questions.slice(0, difficultySettings[difficulty].questions)

  hideAllSections()
  document.getElementById("quiz-section").classList.remove("hidden")

  setupQuizUI()
  displayQuestion()
  startTimers()
}

// Quick Start
function quickStart() {
  const categories = Object.keys(quizData)
  const difficulties = ["easy", "medium", "hard"]

  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)]

  // Set random difficulty as active
  document.querySelectorAll(".difficulty-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-difficulty="${randomDifficulty}"]`).classList.add("active")

  startQuiz(randomCategory)
}

// Setup Quiz UI
function setupQuizUI() {
  const categoryBadge = document.getElementById("current-category")
  const difficultyBadge = document.getElementById("current-difficulty")
  const questionCounter = document.getElementById("question-counter")

  if (categoryBadge) categoryBadge.textContent = quizData[currentQuiz.category].name
  if (difficultyBadge)
    difficultyBadge.textContent = currentQuiz.difficulty.charAt(0).toUpperCase() + currentQuiz.difficulty.slice(1)
  if (questionCounter)
    questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`

  // Setup progress indicators
  setupProgressIndicators()

  // Update total timer display
  updateTotalTimer()

  // Reset navigation buttons
  updateNavigationButtons()
}

// Setup Progress Indicators
function setupProgressIndicators() {
  const progressIndicators = document.getElementById("progress-indicators")
  if (!progressIndicators) return

  progressIndicators.innerHTML = ""

  for (let i = 0; i < currentQuiz.questions.length; i++) {
    const dot = document.createElement("div")
    dot.className = "progress-dot"
    dot.onclick = () => jumpToQuestion(i)
    progressIndicators.appendChild(dot)
  }

  updateProgressIndicators()
}

// Update Progress Indicators
function updateProgressIndicators() {
  const dots = document.querySelectorAll(".progress-dot")
  dots.forEach((dot, index) => {
    dot.classList.remove("current", "completed", "skipped")

    if (index === currentQuiz.currentQuestion) {
      dot.classList.add("current")
    } else if (index < currentQuiz.currentQuestion) {
      if (currentQuiz.answers[index] && currentQuiz.answers[index].skipped) {
        dot.classList.add("skipped")
      } else {
        dot.classList.add("completed")
      }
    }
  })

  // Update progress bar
  const progressFill = document.getElementById("progress-fill")
  if (progressFill) {
    const progress = (currentQuiz.currentQuestion / currentQuiz.questions.length) * 100
    progressFill.style.width = `${progress}%`
  }
}

// Display Question
function displayQuestion() {
  const question = currentQuiz.questions[currentQuiz.currentQuestion]
  if (!question) return

  // Update question text and type
  const questionText = document.getElementById("question-text")
  const questionType = document.getElementById("question-type")

  if (questionText) questionText.textContent = question.question
  if (questionType) {
    questionType.textContent =
      question.type === "multiple" ? "Multiple Choice (Select all that apply)" : "Single Choice"
  }

  // Update question counter
  const questionCounter = document.getElementById("question-counter")
  if (questionCounter) {
    questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`
  }

  // Display answers
  displayAnswers(question)

  // Reset question timer
  currentQuiz.questionStartTime = Date.now()
  startQuestionTimer()

  // Update navigation buttons
  updateNavigationButtons()

  // Update progress
  updateProgressIndicators()

  // Update score display
  updateScoreDisplay()
}

// Display Answers
function displayAnswers(question) {
  const answersGrid = document.getElementById("answers-grid")
  if (!answersGrid) return

  answersGrid.innerHTML = ""

  // Set grid layout based on question type
  if (question.type === "multiple") {
    answersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))"
  } else {
    answersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))"
  }

  question.options.forEach((option, index) => {
    const answerOption = document.createElement("div")
    answerOption.className = "answer-option"
    answerOption.dataset.index = index
    answerOption.onclick = () => selectAnswer(index)

    answerOption.innerHTML = `
      <span>${option}</span>
      <i class="fas fa-check answer-icon"></i>
    `

    answersGrid.appendChild(answerOption)
  })

  // Restore previous selections and feedback if any
  const previousAnswer = currentQuiz.answers[currentQuiz.currentQuestion]
  if (previousAnswer && previousAnswer.selected) {
    previousAnswer.selected.forEach((index) => {
      const option = document.querySelector(`[data-index="${index}"]`)
      if (option) {
        option.classList.add(question.type === "multiple" ? "multiple-selected" : "selected")
      }
    })

    // Restore feedback if it was shown
    if (previousAnswer.feedbackShown) {
      const answerOptions = document.querySelectorAll(".answer-option")
      answerOptions.forEach((option, index) => {
        if (question.correct.includes(index)) {
          option.classList.add("correct")
        } else if (previousAnswer.selected.includes(index)) {
          option.classList.add("incorrect")
        }
      })
    }
  }
}

// Select Answer
function selectAnswer(index) {
  const question = currentQuiz.questions[currentQuiz.currentQuestion]
  const answerOptions = document.querySelectorAll(".answer-option")
  const selectedOption = document.querySelector(`[data-index="${index}"]`)

  // Get current answer state
  const currentAnswer = currentQuiz.answers[currentQuiz.currentQuestion]
  const feedbackShown = currentAnswer && currentAnswer.feedbackShown

  // If feedback was shown and user is changing answer, clear feedback and recalculate
  if (feedbackShown) {
    // Clear visual feedback
    answerOptions.forEach((option) => {
      option.classList.remove("correct", "incorrect")
    })

    // Subtract previous score if it was correct
    if (currentAnswer.correct) {
      const timeBonus = Math.max(0, currentQuiz.questionTimeLimit - currentAnswer.timeSpent / 1000)
      const baseScore = difficultySettings[currentQuiz.difficulty].questions * 10
      const questionScore = baseScore + timeBonus * 2
      currentQuiz.score -= Math.round(questionScore)
    }
  }

  if (question.type === "single") {
    // Single choice - clear all selections and select this one
    answerOptions.forEach((option) => option.classList.remove("selected"))
    selectedOption.classList.add("selected")

    // Store answer
    currentQuiz.answers[currentQuiz.currentQuestion] = {
      selected: [index],
      timeSpent: Date.now() - currentQuiz.questionStartTime,
      skipped: false,
      feedbackShown: false,
      correct: false,
    }
  } else {
    // Multiple choice - toggle selection
    const isSelected = selectedOption.classList.contains("multiple-selected")

    if (isSelected) {
      selectedOption.classList.remove("multiple-selected")
    } else {
      selectedOption.classList.add("multiple-selected")
    }

    // Get all selected indices
    const selectedIndices = []
    answerOptions.forEach((option, idx) => {
      if (option.classList.contains("multiple-selected")) {
        selectedIndices.push(idx)
      }
    })

    // Store answer
    currentQuiz.answers[currentQuiz.currentQuestion] = {
      selected: selectedIndices,
      timeSpent: Date.now() - currentQuiz.questionStartTime,
      skipped: false,
      feedbackShown: false,
      correct: false,
    }
  }

  // Enable next button
  updateNavigationButtons()

  // Play sound
  playSound("select")
}

// Jump to Question
function jumpToQuestion(questionIndex) {
  if (questionIndex >= 0 && questionIndex < currentQuiz.questions.length) {
    currentQuiz.currentQuestion = questionIndex
    displayQuestion()
  }
}

// Next Question
function nextQuestion() {
  const answer = currentQuiz.answers[currentQuiz.currentQuestion]

  if (!answer || !answer.selected || answer.selected.length === 0) {
    if (!confirm("You haven't selected an answer. Do you want to skip this question?")) {
      return
    }
    skipQuestion()
    return
  }

  // Only check answer if feedback hasn't been shown yet
  if (!answer.feedbackShown) {
    checkAnswer()

    setTimeout(() => {
      proceedToNext()
    }, 1500)
  } else {
    // If feedback was already shown, proceed immediately
    proceedToNext()
  }
}

// Helper function to proceed to next question
function proceedToNext() {
  if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
    currentQuiz.currentQuestion++
    displayQuestion()
  } else {
    finishQuiz()
  }
}

// Previous Question
function previousQuestion() {
  if (currentQuiz.currentQuestion > 0) {
    currentQuiz.currentQuestion--
    displayQuestion()
  }
}

// Skip Question
function skipQuestion() {
  currentQuiz.answers[currentQuiz.currentQuestion] = {
    selected: [],
    timeSpent: Date.now() - currentQuiz.questionStartTime,
    skipped: true,
  }

  if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
    currentQuiz.currentQuestion++
    displayQuestion()
  } else {
    finishQuiz()
  }

  playSound("skip")
}

// Check Answer
function checkAnswer() {
  const question = currentQuiz.questions[currentQuiz.currentQuestion]
  const answer = currentQuiz.answers[currentQuiz.currentQuestion]
  const answerOptions = document.querySelectorAll(".answer-option")

  if (!answer || !answer.selected) return

  const isCorrect = arraysEqual(answer.selected.sort(), question.correct.sort())

  // Show correct/incorrect feedback
  answerOptions.forEach((option, index) => {
    if (question.correct.includes(index)) {
      option.classList.add("correct")
    } else if (answer.selected.includes(index)) {
      option.classList.add("incorrect")
    }
  })

  // Calculate score
  if (isCorrect) {
    const timeBonus = Math.max(0, currentQuiz.questionTimeLimit - answer.timeSpent / 1000)
    const baseScore = difficultySettings[currentQuiz.difficulty].questions * 10
    const questionScore = baseScore + timeBonus * 2
    currentQuiz.score += Math.round(questionScore)
    playSound("correct")
  } else {
    playSound("incorrect")
  }

  // Update score display
  updateScoreDisplay()

  // Store result
  answer.correct = isCorrect
  answer.feedbackShown = true
}

// Timer Functions
function startTimers() {
  startTotalTimer()
  startQuestionTimer()
}

function startTotalTimer() {
  clearInterval(currentQuiz.timers.total)

  currentQuiz.timers.total = setInterval(() => {
    currentQuiz.timeRemaining--
    updateTotalTimer()

    if (currentQuiz.timeRemaining <= 0) {
      clearInterval(currentQuiz.timers.total)
      finishQuiz()
    }
  }, 1000)
}

function startQuestionTimer() {
  clearInterval(currentQuiz.timers.question)

  let timeLeft = currentQuiz.questionTimeLimit
  updateQuestionTimer(timeLeft)

  currentQuiz.timers.question = setInterval(() => {
    timeLeft--
    updateQuestionTimer(timeLeft)

    if (timeLeft <= 0) {
      clearInterval(currentQuiz.timers.question)
      // Auto-skip question
      skipQuestion()
    }
  }, 1000)
}

function updateTotalTimer() {
  const totalTimer = document.getElementById("total-time")
  if (totalTimer) {
    const minutes = Math.floor(currentQuiz.timeRemaining / 60)
    const seconds = currentQuiz.timeRemaining % 60
    totalTimer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }
}

function updateQuestionTimer(timeLeft) {
  const timer = document.getElementById("timer")
  const timerBar = document.getElementById("timer-bar")

  if (timer) timer.textContent = timeLeft

  if (timerBar) {
    const percentage = (timeLeft / currentQuiz.questionTimeLimit) * 100
    timerBar.style.width = `${percentage}%`

    // Change color based on time remaining
    if (percentage <= 25) {
      timerBar.style.background = "linear-gradient(90deg, #ff4757, #ff3742)"
    } else if (percentage <= 50) {
      timerBar.style.background = "linear-gradient(90deg, #ffa502, #ff7675)"
    } else {
      timerBar.style.background = "linear-gradient(90deg, var(--primary-color), var(--secondary-color))"
    }
  }

  // Play warning sound
  if (timeLeft <= 5 && timeLeft > 0) {
    playSound("timer")
  }
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("current-score")
  if (scoreDisplay) {
    scoreDisplay.textContent = currentQuiz.score
  }
}

function updateNavigationButtons() {
  const prevButton = document.getElementById("prev-button")
  const nextButton = document.getElementById("next-button")
  const skipButton = document.getElementById("skip-button")

  if (prevButton) {
    prevButton.style.display = currentQuiz.currentQuestion > 0 ? "flex" : "none"
  }

  if (nextButton) {
    const answer = currentQuiz.answers[currentQuiz.currentQuestion]
    const hasAnswer = answer && answer.selected && answer.selected.length > 0

    nextButton.disabled = !hasAnswer
    nextButton.innerHTML =
      currentQuiz.currentQuestion === currentQuiz.questions.length - 1
        ? '<span>Finish Quiz</span><i class="fas fa-flag-checkered"></i>'
        : '<span>Next Question</span><i class="fas fa-arrow-right"></i>'
  }

  // Show buttons with animation
  setTimeout(() => {
    if (prevButton) prevButton.classList.add("show")
    if (nextButton) nextButton.classList.add("show")
    if (skipButton) skipButton.classList.add("show")
  }, 100)
}

// Finish Quiz
function finishQuiz() {
  clearInterval(currentQuiz.timers.total)
  clearInterval(currentQuiz.timers.question)

  const endTime = Date.now()
  const totalTime = Math.round((endTime - currentQuiz.startTime) / 1000)

  // Calculate final results
  const results = calculateResults(totalTime)

  // Save to leaderboard
  saveToLeaderboard(results)

  // Show results
  showResults(results)
}

// Calculate Results
function calculateResults(totalTime) {
  const correctAnswers = currentQuiz.answers.filter((answer) => answer && answer.correct).length
  const totalQuestions = currentQuiz.questions.length
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100)
  const skippedQuestions = currentQuiz.answers.filter((answer) => answer && answer.skipped).length

  return {
    score: currentQuiz.score,
    correctAnswers,
    totalQuestions,
    accuracy,
    skippedQuestions,
    totalTime,
    category: currentQuiz.category,
    difficulty: currentQuiz.difficulty,
  }
}

// Show Results
function showResults(results) {
  hideAllSections()
  document.getElementById("results-section").classList.remove("hidden")

  // Update results display
  document.getElementById("final-score").textContent = results.score
  document.getElementById("correct-answers").textContent = results.correctAnswers
  document.getElementById("total-questions").textContent = results.totalQuestions
  document.getElementById("accuracy").textContent = `${results.accuracy}%`

  const minutes = Math.floor(results.totalTime / 60)
  const seconds = results.totalTime % 60
  document.getElementById("time-taken").textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`

  // Performance message
  const performanceMessage = document.getElementById("performance-message")
  if (performanceMessage) {
    performanceMessage.textContent = getPerformanceMessage(results.accuracy)
  }

  // Achievement badges
  displayAchievementBadges(results)
}

// Get Performance Message
function getPerformanceMessage(accuracy) {
  if (accuracy >= 90) return "Outstanding! You're a quiz master! 🏆"
  if (accuracy >= 80) return "Excellent work! You really know your stuff! 🌟"
  if (accuracy >= 70) return "Great job! You're doing well! 👍"
  if (accuracy >= 60) return "Good effort! Keep practicing! 💪"
  return "Don't give up! Practice makes perfect! 📚"
}

// Display Achievement Badges
function displayAchievementBadges(results) {
  const badgesContainer = document.getElementById("achievement-badges")
  if (!badgesContainer) return

  badgesContainer.innerHTML = ""

  const badges = []

  if (results.accuracy === 100) badges.push({ icon: "fas fa-crown", text: "Perfect Score" })
  if (results.accuracy >= 90) badges.push({ icon: "fas fa-star", text: "Excellence" })
  if (results.skippedQuestions === 0) badges.push({ icon: "fas fa-check-circle", text: "Completionist" })
  if (results.difficulty === "hard") badges.push({ icon: "fas fa-fire", text: "Challenge Accepted" })
  if (results.totalTime < difficultySettings[results.difficulty].totalTime * 0.5) {
    badges.push({ icon: "fas fa-bolt", text: "Speed Demon" })
  }

  badges.forEach((badge) => {
    const badgeElement = document.createElement("div")
    badgeElement.className = "achievement-badge"
    badgeElement.innerHTML = `<i class="${badge.icon}"></i> ${badge.text}`
    badgesContainer.appendChild(badgeElement)
  })
}

// Save to Leaderboard
function saveToLeaderboard(results) {
  const playerName = prompt("Enter your name for the leaderboard:") || "Anonymous"

  const entry = {
    name: playerName,
    category: results.category,
    difficulty: results.difficulty,
    score: results.score,
    accuracy: results.accuracy,
    time: results.totalTime,
    date: new Date(),
  }

  leaderboard.push(entry)
  leaderboard.sort((a, b) => b.score - a.score)
  leaderboard = leaderboard.slice(0, 100) // Keep top 100

  saveLeaderboard()
}

// Review Answers
function reviewAnswers() {
  hideAllSections()
  document.getElementById("review-section").classList.remove("hidden")

  const reviewContent = document.getElementById("review-content")
  if (!reviewContent) return

  reviewContent.innerHTML = ""

  currentQuiz.questions.forEach((question, index) => {
    const answer = currentQuiz.answers[index]
    const reviewQuestion = document.createElement("div")
    reviewQuestion.className = "review-question"

    let resultClass = "skipped"
    let resultText = "Skipped"

    if (answer && !answer.skipped) {
      resultClass = answer.correct ? "correct" : "incorrect"
      resultText = answer.correct ? "Correct" : "Incorrect"
    }

    reviewQuestion.innerHTML = `
      <div class="review-question-header">
        <span class="review-question-number">Question ${index + 1}</span>
        <span class="review-result ${resultClass}">${resultText}</span>
      </div>
      <div class="review-question-text">${question.question}</div>
      <div class="review-answers" id="review-answers-${index}"></div>
      <div class="review-explanation">
        <strong>Explanation:</strong> ${question.explanation}
      </div>
    `

    reviewContent.appendChild(reviewQuestion)

    // Add answer options
    const answersContainer = document.getElementById(`review-answers-${index}`)
    question.options.forEach((option, optionIndex) => {
      const answerDiv = document.createElement("div")
      answerDiv.className = "review-answer"

      if (question.correct.includes(optionIndex)) {
        answerDiv.classList.add("correct-answer")
      }

      if (answer && answer.selected && answer.selected.includes(optionIndex)) {
        answerDiv.classList.add("user-selected")
        if (!question.correct.includes(optionIndex)) {
          answerDiv.classList.add("incorrect-selected")
        }
      }

      answerDiv.innerHTML = `
        <span>${option}</span>
        <div>
          ${question.correct.includes(optionIndex) ? '<i class="fas fa-check" style="color: var(--success-color);"></i>' : ""}
          ${answer && answer.selected && answer.selected.includes(optionIndex) ? '<i class="fas fa-user" style="color: var(--primary-color);"></i>' : ""}
        </div>
      `

      answersContainer.appendChild(answerDiv)
    })
  })
}

// Populate Leaderboard
function populateLeaderboard() {
  const categoryFilter = document.getElementById("leaderboard-category")
  const difficultyFilter = document.getElementById("leaderboard-difficulty")
  const leaderboardContent = document.getElementById("leaderboard-content")

  if (!leaderboardContent) return

  // Populate category filter
  if (categoryFilter && categoryFilter.children.length === 1) {
    Object.keys(quizData).forEach((categoryKey) => {
      const option = document.createElement("option")
      option.value = categoryKey
      option.textContent = quizData[categoryKey].name
      categoryFilter.appendChild(option)
    })
  }

  // Filter leaderboard
  const categoryValue = categoryFilter ? categoryFilter.value : "all"
  const difficultyValue = difficultyFilter ? difficultyFilter.value : "all"

  let filteredLeaderboard = leaderboard

  if (categoryValue !== "all") {
    filteredLeaderboard = filteredLeaderboard.filter((entry) => entry.category === categoryValue)
  }

  if (difficultyValue !== "all") {
    filteredLeaderboard = filteredLeaderboard.filter((entry) => entry.difficulty === difficultyValue)
  }

  // Display leaderboard
  leaderboardContent.innerHTML = ""

  if (filteredLeaderboard.length === 0) {
    leaderboardContent.innerHTML =
      '<p style="text-align: center; color: var(--text-secondary);">No scores found for the selected filters.</p>'
    return
  }

  filteredLeaderboard.slice(0, 20).forEach((entry, index) => {
    const leaderboardItem = document.createElement("div")
    leaderboardItem.className = "leaderboard-item"

    const rankClass = index < 3 ? "top-3" : ""
    const categoryName = quizData[entry.category] ? quizData[entry.category].name : entry.category

    leaderboardItem.innerHTML = `
      <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
      <div class="leaderboard-player">
        <div class="leaderboard-name">${entry.name}</div>
        <div class="leaderboard-details">${categoryName} - ${entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)} | ${entry.accuracy}% accuracy</div>
      </div>
      <div class="leaderboard-score">${entry.score}</div>
    `

    leaderboardContent.appendChild(leaderboardItem)
  })
}

// Share Results
function shareResults() {
  const modal = document.getElementById("share-modal")
  const shareText = document.getElementById("share-text")

  if (!modal || !shareText) return

  const results = calculateResults(Math.round((Date.now() - currentQuiz.startTime) / 1000))
  const categoryName = quizData[currentQuiz.category].name

  const text = `I just scored ${results.score} points on Quiz Master Pro! 🎯\n\nCategory: ${categoryName}\nDifficulty: ${currentQuiz.difficulty.charAt(0).toUpperCase() + currentQuiz.difficulty.slice(1)}\nAccuracy: ${results.accuracy}%\n\nCan you beat my score? Try it now!`

  shareText.textContent = text
  modal.classList.remove("hidden")
}

function closeShareModal() {
  const modal = document.getElementById("share-modal")
  if (modal) modal.classList.add("hidden")
}

function shareToTwitter() {
  const text = document.getElementById("share-text").textContent
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  window.open(url, "_blank")
}

function shareToFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
  window.open(url, "_blank")
}

function shareToLinkedIn() {
  const text = document.getElementById("share-text").textContent
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`
  window.open(url, "_blank")
}

function copyResults() {
  const text = document.getElementById("share-text").textContent
  navigator.clipboard.writeText(text).then(() => {
    alert("Results copied to clipboard!")
  })
}

// Quit Quiz
function quitQuiz() {
  if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
    clearInterval(currentQuiz.timers.total)
    clearInterval(currentQuiz.timers.question)
    showWelcome()
  }
}

// Theme and Settings
function toggleTheme() {
  gameSettings.theme = gameSettings.theme === "dark" ? "light" : "dark"
  document.body.className = gameSettings.theme === "light" ? "light-theme" : "dark-theme"

  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.innerHTML =
      gameSettings.theme === "light" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
  }

  saveSettings()
}

function toggleSound() {
  gameSettings.soundEnabled = !gameSettings.soundEnabled

  const soundToggle = document.getElementById("sound-toggle")
  if (soundToggle) {
    soundToggle.innerHTML = gameSettings.soundEnabled
      ? '<i class="fas fa-volume-up"></i>'
      : '<i class="fas fa-volume-mute"></i>'

    if (gameSettings.soundEnabled) {
      soundToggle.classList.remove("muted")
    } else {
      soundToggle.classList.add("muted")
    }
  }

  saveSettings()
}

// Sound Effects - Updated function
function playSound(type) {
  if (!gameSettings.soundEnabled) return

  // Create audio context for better browser compatibility
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()

  // Simple beep sounds using Web Audio API
  const sounds = {
    correct: () => playBeep(audioContext, 800, 0.2, "sine"),
    incorrect: () => playBeep(audioContext, 300, 0.3, "sawtooth"),
    timer: () => playBeep(audioContext, 600, 0.1, "square"),
    select: () => playBeep(audioContext, 400, 0.1, "sine"),
    skip: () => playBeep(audioContext, 200, 0.2, "triangle"),
  }

  const soundFunction = sounds[type]
  if (soundFunction) {
    try {
      soundFunction()
    } catch (error) {
      console.log("Audio playback failed:", error)
    }
  }
}

// Helper function to create beep sounds
function playBeep(audioContext, frequency, duration, type = "sine") {
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}

// Initialize audio context on first user interaction
let audioInitialized = false

function initializeAudio() {
  if (!audioInitialized) {
    // Create a silent audio context to enable audio
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    if (audioContext.state === "suspended") {
      audioContext.resume()
    }
    audioInitialized = true
  }
}

// Animate Statistics
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number")

  statNumbers.forEach((stat) => {
    const target = Number.parseInt(stat.dataset.count)
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      stat.textContent = Math.floor(current)
    }, 16)
  })
}

function updateTotalPlayers() {
  const totalPlayersElement = document.getElementById("total-players")
  if (totalPlayersElement) {
    const baseCount = 1000
    const additionalPlayers = leaderboard.length
    const total = baseCount + additionalPlayers
    totalPlayersElement.dataset.count = total
  }
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const section = link.dataset.section

      switch (section) {
        case "home":
          showWelcome()
          break
        case "categories":
          showCategories()
          break
        case "leaderboard":
          showLeaderboard()
          break
        case "about":
          showAbout()
          break
      }
    })
  })

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  // Sound toggle
  const soundToggle = document.getElementById("sound-toggle")
  if (soundToggle) {
    soundToggle.addEventListener("click", toggleSound)
  }

  // Difficulty selection
  document.querySelectorAll(".difficulty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".difficulty-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  // Quiz navigation
  const nextButton = document.getElementById("next-button")
  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion)
  }

  // Leaderboard filters
  const leaderboardCategory = document.getElementById("leaderboard-category")
  const leaderboardDifficulty = document.getElementById("leaderboard-difficulty")

  if (leaderboardCategory) {
    leaderboardCategory.addEventListener("change", populateLeaderboard)
  }

  if (leaderboardDifficulty) {
    leaderboardDifficulty.addEventListener("change", populateLeaderboard)
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("quiz-section").classList.contains("hidden")) return

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault()
        previousQuestion()
        break
      case "ArrowRight":
      case "Enter":
        e.preventDefault()
        nextQuestion()
        break
      case "Escape":
        e.preventDefault()
        quitQuiz()
        break
      case "1":
      case "2":
      case "3":
      case "4":
        e.preventDefault()
        const index = Number.parseInt(e.key) - 1
        const option = document.querySelector(`[data-index="${index}"]`)
        if (option) selectAnswer(index)
        break
    }
  })

  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("share-modal")
    if (modal && e.target === modal) {
      closeShareModal()
    }
  })

  // Initialize audio on first user interaction
  document.addEventListener("click", initializeAudio, { once: true })
  document.addEventListener("keydown", initializeAudio, { once: true })
  document.addEventListener("touchstart", initializeAudio, { once: true })
}

// Utility Functions
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false
  return a.every((val, index) => val === b[index])
}

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  }
})
