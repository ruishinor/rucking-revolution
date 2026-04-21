// ==========================================
        // 1. WORKOUT DATABASE (JSON SOURCE)
        // ==========================================
        const workoutDB = [
            {
                "id": "hero_001",
                "title": "SANDBAG MURPH",
                "category": "HERO WOD",
                "difficulty": "Elite (5/5)",
                "time": "45-70 mins",
                "gear": "Ruck, Sandbag",
                "tags": ["hero", "sandbag"],
                "instructions": [
                    "Buy-In: 1 Mile Ruck",
                    "100 Sandbag Push Presses (L/R shoulder transfer = 1 rep)",
                    "200 Lunges (Chest Carry)",
                    "150 Situps (Chest Carry)",
                    "150 Squats (Chest Carry)",
                    "Cash-Out: 1 Mile Ruck",
                    "RULE: Sandbag cannot touch the ground. If resting, hold it or have partner hold it."
                ],
                "scaling": "Reduce reps by half; allow bag on ground for rest.",
                "standards": "Chest Carry: Bag held against chest, arms wrapped. Push Press: Dip and drive overhead to lockout."
            },
            {
                "id": "hero_002",
                "title": "KALSU (SANDBAG ED.)",
                "category": "HERO WOD",
                "difficulty": "Elite (5/5)",
                "time": "Variable (Cap 30)",
                "gear": "Sandbag",
                "tags": ["hero", "sandbag"],
                "instructions": [
                    "Goal: 100 Thrusters for Time",
                    "Constraint: Every Minute On The Minute (EMOM) perform 5 Burpees.",
                    "Start the workout with 5 Burpees.",
                    "In remaining time of the minute, perform Max Thrusters."
                ],
                "scaling": "Reduce to 50 Thrusters; Reduce to 3 Burpees EMOM.",
                "standards": "Thruster: Full squat to overhead lockout. Burpee: Chest to ground."
            },
            {
                "id": "hero_003",
                "title": "THE DON",
                "category": "HERO WOD",
                "difficulty": "Hard (4/5)",
                "time": "40+ mins",
                "gear": "Sandbag, Pull-up Bar",
                "tags": ["hero", "sandbag"],
                "instructions": [
                    "For Time, complete all reps in order:",
                    "66 Deadlifts",
                    "66 Tuck Jumps",
                    "66 Sandbag Swings",
                    "66 V-Ups",
                    "66 Russian Twists",
                    "66 Pull Ups",
                    "66 Sandbag Thrusters",
                    "66 Burpees",
                    "66 Side Lunges (33/side)"
                ],
                "scaling": "Scale reps to 33 per movement.",
                "standards": "Tuck Jump: Knees above hips. Swing: Eye level."
            },
            {
                "id": "team_001",
                "title": "COUPON INDIAN RUN",
                "category": "TEAM / SQUAD",
                "difficulty": "Moderate (3/5)",
                "time": "Distance Based",
                "gear": "Ruck, 1 Heavy Bag, 1 Light Weight",
                "tags": ["standard", "team", "coupon"],
                "instructions": [
                    "Formation: Single File while rucking.",
                    "Front person carries Heavy Bag.",
                    "Second person carries Light Weight.",
                    "Rear person sprints to the front.",
                    "Pass weights forward (New leader takes Heavy, Old leader takes Light).",
                    "Total Distance: 1km"
                ],
                "scaling": "Use lighter coupons; reduce sprint distance.",
                "standards": "Pass weights carefully. Maintain formation interval."
            },
            {
                "id": "team_002",
                "title": "IRON HALF-MILE",
                "category": "PARTNER (2 PAX)",
                "difficulty": "Hard (4/5)",
                "time": "30 mins",
                "gear": "Ruck, Heavy Coupon",
                "tags": ["standard", "team", "coupon"],
                "instructions": [
                    "Buy-In: 1 Mile Hill Carry",
                    "3 Rounds of 200m forward progress:",
                    "P1: Pushes/Carries coupon until failure.",
                    "P2: Does 9 reps of exercise, sprints lap, jogs behind P1 waiting for failure.",
                    "Round 1: Man-makers w/ Ruck Press",
                    "Round 2: Push-ups",
                    "Round 3: LBCs x25",
                    "Exit: Farmers Walk"
                ],
                "scaling": "Set fixed distance swap instead of failure.",
                "standards": "Man-Maker: Row L/R, Pushup, Clean & Press."
            },
            {
                "id": "str_001",
                "title": "THE BEATDOWN PYRAMID",
                "category": "STRENGTH",
                "difficulty": "Moderate (3/5)",
                "time": "15 mins / Round",
                "gear": "Ruck/Bodyweight",
                "tags": ["standard", "ruck_only"],
                "instructions": [
                    "Perform in order (Ruck On):",
                    "15 Push-ups -> 10 Goblet Squats",
                    "14 Push-ups -> 10 Good Mornings",
                    "13 Push-ups -> 10 Goblet Squats",
                    "12 Push-ups -> 10 Good Mornings",
                    "11 Push-ups -> 10 Goblet Squats",
                    "10 Push-ups",
                    "Total: 130 reps per round. Aim for 3 Rounds."
                ],
                "scaling": "Remove Ruck; Do pushups on knees.",
                "standards": "Goblet Squat: Ruck held at chest. Good Morning: Hinge at hips, flat back."
            },
            {
                "id": "team_003",
                "title": "DO THE HARDER THING",
                "category": "TEAM (3 PAX)",
                "difficulty": "Hard (4/5)",
                "time": "45 mins",
                "gear": "Rucks, 1 Overhead Weight",
                "tags": ["standard", "team", "coupon"],
                "instructions": [
                    "Rotation: Cycle positions when Sprinter returns.",
                    "A (Sprinter): Sprint Hill (or 200m).",
                    "B (Worker): Chips away at 100 Reps of Exercise.",
                    "C (Holder): Holds weight OVERHEAD (Static).",
                    "Exercises (100 Reps Team Total): Arm Circles, Merkins, Flutter Kicks, Jumping Jacks, LBCs, Burpees."
                ],
                "scaling": "Hold weight at chest instead of overhead.",
                "standards": "Weight must stay LOCKED OUT overhead for reps to count."
            },
            {
                "id": "str_002",
                "title": "SANDBAG 4x4",
                "category": "STRENGTH/STAMINA",
                "difficulty": "Hard (4/5)",
                "time": "30 mins",
                "gear": "Ruck, Sandbag",
                "tags": ["standard", "sandbag"],
                "instructions": [
                    "4 Rounds For Time:",
                    "4 Minute Ruck (Fast Pace)",
                    "30 Sandbag Thrusters",
                    "4 Minute Ruck (Fast Pace)",
                    "30 Lateral Pull + Mountain Climbers"
                ],
                "scaling": "15 Thrusters; 2 min Ruck.",
                "standards": "Lateral Pull: Plank position, drag bag under body L->R is one rep."
            }
        ,
            {
                "id": "hill_coupons_v1",
                "title": "HILL WORK - COUPON VARIATION",
                "category": "TEAM / HILL CONDITIONING",
                "difficulty": "Extreme (5/5)",
                "time": "30-45 mins",
                "gear": "Rucks and/or team weights (coupons)",
                "tags": [
                    "standard",
                    "sandbag",
                    "ruck_only",
                    "coupon",
                    "team"
                ],
                "instructions": [
                    "P1 selects coupon weight and runs to hill top, then returns.",
                    "While P1 moves, the team cycles continuous PT (ruck squats, overhead press, swings, LBCs).",
                    "Complete 4 full rounds of the hill and PT sequence.",
                    "If heavy coupon is repeatedly chosen, remove it for the next sprinter rotation."
                ],
                "scaling": "Choose lighter coupon; reduce rep counts; shorten hill length.",
                "standards": "When carrying overhead, lock arms and maintain vertical spine. For ruck squats, depth to parallel only."
            },
            {
                "id": "catch_me_if_you_can",
                "title": "CATCH ME IF YOU CAN",
                "category": "PARTNER / CARRY",
                "difficulty": "Moderate (3/5)",
                "time": "20-30 mins",
                "gear": "Rucks",
                "tags": [
                    "standard",
                    "ruck_only",
                    "team"
                ],
                "instructions": [
                    "P1 farmer-carries both rucks at steady pace.",
                    "P2 completes 15 pushups, then sprints to relieve P1.",
                    "Swap carry responsibility each time P2 catches P1.",
                    "Continue rotation for the planned distance or time cap."
                ],
                "scaling": "Reduce pushups or substitute knee pushups; shorten sprint distance.",
                "standards": "Farmers carry: upright torso, controlled steps, no swinging rucks."
            },
            {
                "id": "beatdown",
                "title": "BEATDOWN",
                "category": "STRENGTH / BODYWEIGHT",
                "difficulty": "Hard (4/5)",
                "time": "20-35 mins",
                "gear": "Bodyweight",
                "tags": [
                    "standard"
                ],
                "instructions": [
                    "Begin with 5 minutes of jogging in place and down-command cadence.",
                    "Run a descending pushup / goblet squat / good morning pyramid to 10 reps.",
                    "Aim for approximately 130 reps per full round.",
                    "Repeat rounds while maintaining clean movement standards."
                ],
                "scaling": "Reduce rep counts, extend rest intervals, allow incline pushups.",
                "standards": "Push-ups to chest and thighs; goblet squat depth to parallel."
            },
            {
                "id": "hill_work_2",
                "title": "HILL WORK #2 - TIGHT FORMATION",
                "category": "TEAM / HILL EVOLUTION",
                "difficulty": "Extreme (5/5)",
                "time": "20 mins cap",
                "gear": "Rucks / team weights",
                "tags": [
                    "standard",
                    "sandbag",
                    "ruck_only",
                    "coupon",
                    "team"
                ],
                "instructions": [
                    "Move 600m in tight team formation under a 20-minute time hack.",
                    "On uphill segments, forward progress only counts while weights are locked overhead.",
                    "On downhill return, execute casualty carry with litter and no ground contact.",
                    "Apply team penalties for missed time or broken formation discipline."
                ],
                "scaling": "Shorten distance; allow periodic rests where weights are front-racked.",
                "standards": "When overhead, full lockout; litter carry: no resting on ground; swap carriers smoothly."
            },
            {
                "id": "catch_me_if_you_can_sandbag",
                "title": "CATCH ME IF YOU CAN - SANDBAG",
                "category": "PARTNER / SANDBAG",
                "difficulty": "Moderate (3/5)",
                "time": "20-30 mins",
                "gear": "30 lb sandbags",
                "tags": [
                    "standard",
                    "sandbag",
                    "team"
                ],
                "instructions": [
                    "P1 performs 5 burpees before each rotation.",
                    "P2 sprints forward carrying a 30 lb sandbag.",
                    "Rotate roles continuously and keep handoffs controlled.",
                    "Use cadence or pyramid structure for progression."
                ],
                "scaling": "Use lighter bag or reduce burpees; substitute step-ups for sprints.",
                "standards": "Sandbag sprint: secure grip, controlled handoffs."
            },
            {
                "id": "8_min_hiit",
                "title": "8-MIN HIIT (TABATA)",
                "category": "CONDITIONING",
                "difficulty": "Hard (4/5)",
                "time": "8 mins",
                "gear": "Bodyweight",
                "tags": [
                    "standard"
                ],
                "instructions": [
                    "Set timer for 16 intervals of 20s work / 10s rest.",
                    "Alternate jumping squats and flutter kicks each interval.",
                    "Maintain maximum sustainable output throughout all 8 minutes.",
                    "Track reps to measure progression week to week."
                ],
                "scaling": "Switch jumping squats to bodyweight squats; reduce interval intensity.",
                "standards": "Jump squat depth to parallel; land softly with knees tracking toes."
            },
            {
                "id": "up_down_position",
                "title": "UP/DOWN POSITION",
                "category": "CORE / ISOMETRIC",
                "difficulty": "Moderate (3/5)",
                "time": "10-20 mins",
                "gear": "Sandbag optional",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "Hold a 6-inch off-ground position for core tension intervals.",
                    "On command, elevate slightly and re-stabilize under load if using sandbag.",
                    "Cycle between up/down holds without fully resting to the ground.",
                    "Use as accessory core endurance finisher."
                ],
                "scaling": "Hold higher if 6 inches is too intense; rest as needed.",
                "standards": "Maintain neutral spine and braced core; shoulders stable."
            },
            {
                "id": "100_burpee_challenge",
                "title": "100 BURPEE CHALLENGE",
                "category": "CONDITIONING CHALLENGE",
                "difficulty": "Extreme (5/5)",
                "time": "10-20 mins",
                "gear": "Bodyweight",
                "tags": [
                    "standard"
                ],
                "instructions": [
                    "Complete 100 full-standard burpees for time.",
                    "Use pacing targets (for example, 10-12 minute benchmark).",
                    "Break into short sets only as needed to preserve form.",
                    "Record finish time for repeatable progression."
                ],
                "scaling": "Reduce total count to 50 or partition into rounds with rest.",
                "standards": "Burpee includes full pushup and jump; chest and thighs must touch the ground on descent."
            },
            {
                "id": "emotm_pullups",
                "title": "EVERY MINUTE ON THE MINUTE (EMOTM)",
                "category": "EMOM / SKILL-ENDURANCE",
                "difficulty": "Hard (4/5)",
                "time": "20-120 mins",
                "gear": "Pullup bar or alternatives",
                "tags": [
                    "standard"
                ],
                "instructions": [
                    "EMOM: At each minute mark, perform programmed pullup or substitute set.",
                    "Choose one pattern per minute (for example: 5 pullups, or 10 pushups + 5 situps).",
                    "Continue for planned duration while maintaining clean movement quality."
                ],
                "scaling": "Replace pullups with ring rows or band-assisted pullups; reduce duration.",
                "standards": "Strict reps; no kipping unless the session permits it."
            },
            {
                "id": "sandbag_overhead_lunges",
                "title": "SANDBAG OVERHEAD LUNGES (50 STEPS)",
                "category": "STRENGTH / SANDBAG",
                "difficulty": "Hard (4/5)",
                "time": "15-25 mins",
                "gear": "Sandbag",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "Complete 50 overhead lunge steps with sandbag control.",
                    "Keep core braced and lockout stable through each step.",
                    "Follow with presses and goblet lunges based on session format.",
                    "Prioritize balance and knee tracking throughout."
                ],
                "scaling": "Reduce steps to 20; use lighter load or front-rack carry.",
                "standards": "Lock overhead, core braced, knee tracks toes; step length controlled."
            },
            {
                "id": "sandbaby_murph",
                "title": "SAND BABY MURPH",
                "category": "HERO WOD",
                "difficulty": "Extreme (5/5)",
                "time": "45-70 mins",
                "gear": "Sandbag",
                "tags": [
                    "hero",
                    "sandbag"
                ],
                "instructions": [
                    "Keep sandbag on shoulder/chest carry through the full circuit.",
                    "Complete lunges, situps, squats, and chest carry volume as prescribed.",
                    "Carrier calls exercise transitions while team manages rest cadence.",
                    "Sandbag does not touch ground unless scaled for safety."
                ],
                "scaling": "Reduce reps (e.g., 50/75); allow setting bag down for short rests for safety.",
                "standards": "Controlled lunges with knee touch; strict situp standard or V-up alternative."
            },
            {
                "id": "essential_basics",
                "title": "ESSENTIAL BASICS",
                "category": "FOUNDATIONS",
                "difficulty": "Easy (2/5)",
                "time": "15-25 mins",
                "gear": "No gear (optional farmers carry)",
                "tags": [
                    "standard"
                ],
                "instructions": [
                    "Cycle foundational movements: farmers carry, jumping squats, and dips.",
                    "Choose repeatable rep targets for clean baseline conditioning.",
                    "Keep transitions smooth and rest minimal between stations.",
                    "Use as entry-level session or maintenance day circuit."
                ],
                "scaling": "Adjust reps/weight to participant level.",
                "standards": "Farmer's carry upright, dips controlled to 90 degrees."
            },
            {
                "id": "four_mile_ruck_with_pts",
                "title": "4 MILE RUCK WITH PT AT EACH MILE",
                "category": "RUCK / ENDURANCE",
                "difficulty": "Moderate (3/5)",
                "time": "60-90 mins",
                "gear": "Ruck",
                "tags": [
                    "standard",
                    "sandbag",
                    "ruck_only"
                ],
                "instructions": [
                    "Ruck 4 total miles at consistent pace.",
                    "At each mile marker, stop for a prescribed PT set.",
                    "Example PT blocks: sandbag burpees, thrusters, or deadlifts.",
                    "Resume ruck immediately after each PT station."
                ],
                "scaling": "Shorten distance or reduce PT sets.",
                "standards": "Maintain ruck fit and no loose straps; PT reps with controlled form."
            },
            {
                "id": "six_rounds_for_time",
                "title": "6 ROUNDS FOR TIME (EVERY 6 MIN)",
                "category": "INTERVAL / SANDBAG",
                "difficulty": "Hard (4/5)",
                "time": "36 mins cap",
                "gear": "Sandbag and running area",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "Every 6 minutes for 6 rounds: run 200m, then complete sandbag push presses and bent-over rows.",
                    "Finish each round inside the 6-minute window when possible.",
                    "Use remaining time each round as recovery.",
                    "Track total completion quality across all rounds."
                ],
                "scaling": "Use lighter bag; drop rep counts; replace run with 100m.",
                "standards": "Row: neutral spine; push press: dip-drive-press rhythm."
            },
            {
                "id": "sandbag_fran",
                "title": "SANDBAG FRAN",
                "category": "BENCHMARK / SANDBAG",
                "difficulty": "Hard (4/5)",
                "time": "8-20 mins",
                "gear": "Sandbag, pullup bar",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "For time: 21-15-9 reps of pullups and sandbag thrusters.",
                    "Keep transitions tight and prioritize movement quality.",
                    "Choose a pullup variation that preserves intended intensity and clean form.",
                    "Record completion time for benchmark retests."
                ],
                "scaling": "Reduce reps to 15-10-5; replace pullups with ring rows.",
                "standards": "Thrusters require full extension overhead; pullups chin over bar."
            },
            {
                "id": "the_seven_hero",
                "title": "THE SEVEN (HERO WOD)",
                "category": "HERO WOD",
                "difficulty": "HERO (5/5)",
                "time": "35-60 mins",
                "gear": "Sandbag / Bar alternatives",
                "tags": [
                    "hero",
                    "sandbag"
                ],
                "instructions": [
                    "Complete 7 rounds for time with 7 reps per movement.",
                    "Sequence includes handstand pushups, thrusters, knees-to-elbows, deadlifts, burpees, swings, and pull-ups.",
                    "Hold movement standards under fatigue across all rounds.",
                    "Pace early rounds to avoid technical breakdown."
                ],
                "scaling": "Reduce rounds or substitute strict pushups/box pike pushups for HSPUs.",
                "standards": "HSPU must touch ground with head; knees-to-elbows full range."
            },
            {
                "id": "filthy_fifty_sandbag",
                "title": "FILTHY FIFTY (SANDBAG)",
                "category": "CHIPPER / SANDBAG",
                "difficulty": "Hard (4/5)",
                "time": "35-55 mins",
                "gear": "Sandbag, pullup option",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "Complete high-volume 50-rep stations with sandbag-focused substitutions.",
                    "Include movements such as tuck jumps, pullups, push presses, thrusters, and burpees.",
                    "Manage pace and breaks strategically to sustain quality.",
                    "Finish all stations for total time."
                ],
                "scaling": "Cull rep counts to 25 or choose half the movements.",
                "standards": "Maintain safe landing mechanics on jumps."
            },
            {
                "id": "chief_amrap",
                "title": "THE CHIEF (AMRAP - HERO STYLE)",
                "category": "HERO WOD",
                "difficulty": "HERO (5/5)",
                "time": "20 mins",
                "gear": "Sandbag",
                "tags": [
                    "hero",
                    "sandbag"
                ],
                "instructions": [
                    "AMRAP 3 mins:",
                    "3 Sandbag Power Cleans",
                    "6 Push Ups",
                    "9 Sandbag Squats (front or back)",
                    "Rest 1 minute",
                    "Repeat 5 rounds total"
                ],
                "scaling": "Reduce AMRAP interval or reps.",
                "standards": "Power cleans must meet front-rack catch position; pushups full depth."
            },
            {
                "id": "lumberjack_20",
                "title": "LUMBERJACK 20",
                "category": "CHIPPER / RUN + SANDBAG",
                "difficulty": "Hard (4/5)",
                "time": "35-50 mins",
                "gear": "Sandbag / Run",
                "tags": [
                    "standard",
                    "sandbag"
                ],
                "instructions": [
                    "Complete the full Lumberjack-style chipper for time.",
                    "Alternate 20-rep sandbag/bodyweight stations with 400m runs.",
                    "Include deadlifts, swings, overhead squats, burpees, and pullups.",
                    "Move steadily while preserving safe technique on loaded lifts."
                ],
                "scaling": "Cut reps in half; reduce run distance.",
                "standards": "Deadlift: hip hinge; overhead squat: wrist and shoulder mobility to maintain vertical torso."
            }
];

        // ==========================================
        // 2. RANDOMIZER LOGIC (WEEKLY DETERMINISTIC)
        // ==========================================
        function mulberry32(a) {
            return function () {
                let t = a += 0x6D2B79F5;
                t = Math.imul(t ^ (t >>> 15), t | 1);
                t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
                return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
            };
        }

        function getWeekSeed() {
            const now = new Date();
            const utcDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
            const dayNumber = (utcDate.getUTCDay() + 6) % 7;
            utcDate.setUTCDate(utcDate.getUTCDate() - dayNumber + 3);

            const isoYear = utcDate.getUTCFullYear();
            const firstThursday = new Date(Date.UTC(isoYear, 0, 4));
            const firstDayNumber = (firstThursday.getUTCDay() + 6) % 7;
            firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNumber + 3);

            const weekNumber = 1 + Math.round((utcDate - firstThursday) / 604800000);
            return (isoYear * 100) + weekNumber;
        }

        function getRandomWorkout(filteredList, rngFn = null) {
            if (filteredList.length === 0) {
                return null;
            }
            const rng = rngFn || mulberry32(getWeekSeed());
            const randomIndex = Math.floor(rng() * filteredList.length);
            return filteredList[randomIndex];
        }

        function normalizeDifficulty(workout) {
            const categoryText = String(workout.category || "").toLowerCase();
            const difficultyText = String(workout.difficulty || "").toLowerCase();

            if (categoryText.includes("hero")) return "hero";
            if (difficultyText.includes("elite") || difficultyText.includes("5/5")) return "elite";
            if (difficultyText.includes("hard") || difficultyText.includes("4/5")) return "hard";
            if (difficultyText.includes("moderate") || difficultyText.includes("3/5")) return "moderate";
            if (difficultyText.includes("easy") || difficultyText.includes("1/5") || difficultyText.includes("2/5")) return "easy";

            return "unknown";
        }

        function hasSandbag(workout) {
            return workout.tags.includes("sandbag") || /sandbag/i.test(workout.gear);
        }

        function hasAddedCoupons(workout) {
            return workout.tags.includes("coupon") || /coupon|heavy bag|light weight|overhead weight/i.test(workout.gear);
        }

        function getSelectedCount() {
            const input = document.getElementById("select-count");
            const parsed = parseInt(input.value, 10);
            const clamped = Number.isNaN(parsed) ? 1 : Math.max(1, Math.min(4, parsed));
            input.value = String(clamped);
            return clamped;
        }
        function getFilteredCandidates() {
            const typeSelect = document.getElementById("select-type").value;
            const gearSelect = document.getElementById("select-gear").value;
            const difficultySelect = document.getElementById("select-difficulty").value;

            let candidates = workoutDB.slice();

            if (typeSelect === "hero") {
                candidates = candidates.filter(w => w.tags.includes("hero"));
            } else if (typeSelect === "standard") {
                candidates = candidates.filter(w => w.tags.includes("standard"));
            }

            if (gearSelect === "ruck_only") {
                candidates = candidates.filter(w => w.tags.includes("ruck_only"));
            } else if (gearSelect === "with_coupon") {
                candidates = candidates.filter(hasAddedCoupons);
            } else if (gearSelect === "with_sandbag" || gearSelect === "sandbag") {
                candidates = candidates.filter(hasSandbag);
            }

            if (difficultySelect !== "all") {
                candidates = candidates.filter(w => normalizeDifficulty(w) === difficultySelect);
            }

            return candidates;
        }

        function getWorkoutChips(workout) {
            const chips = [];
            if (workout.tags.includes("ruck_only")) chips.push("RUCK ONLY");
            if (hasAddedCoupons(workout)) chips.push("WITH ADDED COUPONS");
            if (hasSandbag(workout)) chips.push("WITH SANDBAG");
            return chips;
        }

        function cleanLine(value) {
            return String(value || "").replace(/\s+/g, " ").trim();
        }

        function normalizeLine(value) {
            return cleanLine(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        }

        const workflowLabelOverrides = {
            "hero_001": "BUY-IN / CHIPPER / CASH-OUT",
            "team_001": "INDIAN RUN ROTATION",
            "team_003": "3-STATION TEAM RELAY",
            "hill_coupons_v1": "HILL SPRINT + PT STATIONS",
            "catch_me_if_you_can": "PARTNER CHASE + SWAP",
            "beatdown": "DESCENDING LADDER CIRCUIT",
            "hill_work_2": "OVERHEAD MARCH + CASUALTY CARRY",
            "catch_me_if_you_can_sandbag": "BURPEE-THEN-SPRINT RELAY",
            "8_min_hiit": "TABATA INTERVALS",
            "up_down_position": "UP/DOWN ISOMETRIC DRILL",
            "sandbag_overhead_lunges": "FOR-TIME STRENGTH CHIPPER",
            "sandbaby_murph": "NO-DROP ENDURANCE CHIPPER",
            "essential_basics": "FOUNDATIONAL MOVEMENT CIRCUIT",
            "four_mile_ruck_with_pts": "MILE MARKER PT STATIONS",
            "filthy_fifty_sandbag": "HIGH-VOLUME CHIPPER"
        };

        function inferFormatLine(workout, steps) {
            const source = `${workout.title} ${steps.join(" ")}`.toLowerCase();
            const minuteMatch = source.match(/(\d+)\s*(?:min|mins|minute|minutes)\b/);
            const roundMatch = source.match(/(\d+)\s*round/);
            const configuredWorkflow = cleanLine(workout.workflow || workout.flow || workout.flowLabel);

            if (configuredWorkflow && normalizeLine(configuredWorkflow) !== "workout flow") {
                return configuredWorkflow.toUpperCase();
            }

            if (source.includes("amrap")) {
                const minutePart = minuteMatch ? `${minuteMatch[1]} MINS` : "";
                const roundPart = roundMatch ? `${roundMatch[1]} ROUNDS` : "";
                const details = [minutePart, roundPart].filter(Boolean).join(" x ");
                return details ? `AMRAP ${details}` : "AMRAP";
            }

            if (source.includes("emom") || source.includes("emotm") || source.includes("every minute on the minute")) {
                return "EMOM";
            }

            if (source.includes("for time")) {
                return "FOR TIME";
            }

            if (roundMatch) {
                return `${roundMatch[1]} ROUNDS`;
            }

            const override = workflowLabelOverrides[workout.id];
            if (override) {
                return override;
            }

            return "WORKOUT FLOW";
        }

        function buildCardSections(workout) {
            const rawInstructions = Array.isArray(workout.instructions) ? workout.instructions : [];
            const scalingText = cleanLine(workout.scaling) || "Scale reps, load, or distance to keep quality movement.";
            const standardsText = cleanLine(workout.standards) || "Move through full, controlled range of motion on each rep.";
            const scalingNorm = normalizeLine(scalingText);
            const standardsNorm = normalizeLine(standardsText);
            const steps = [];
            const keyNotes = [];
            const stepSeen = new Set();
            const noteSeen = new Set();

            rawInstructions.forEach(item => {
                const line = cleanLine(item);
                const norm = normalizeLine(line);
                if (!line || !norm) return;
                if (stepSeen.has(norm) || noteSeen.has(norm)) return;
                if (norm === scalingNorm || norm === standardsNorm) return;
                if (/^(scale|scaling)\b/i.test(line)) return;
                if (/^movement standards?:/i.test(line)) return;
                if (scalingNorm && (scalingNorm.includes(norm) || norm.includes(scalingNorm))) return;
                if (standardsNorm && (standardsNorm.includes(norm) || norm.includes(standardsNorm))) return;

                if (/^(rule|constraint|time hack|penalty|note)\b/i.test(line) || /\b(must|cannot|can't|do not|never)\b/i.test(line.toLowerCase())) {
                    keyNotes.push(line.replace(/^(rule|constraint|note)\s*:\s*/i, ""));
                    noteSeen.add(norm);
                    return;
                }

                steps.push(line);
                stepSeen.add(norm);
            });

            if (Array.isArray(workout.notes)) {
                workout.notes.forEach(item => {
                    const line = cleanLine(item);
                    const norm = normalizeLine(line);
                    if (!line || !norm || noteSeen.has(norm)) return;
                    keyNotes.push(line);
                    noteSeen.add(norm);
                });
            }

            if (steps.length === 0) {
                steps.push("Follow the programmed sequence while maintaining safe movement quality.");
            }

            return {
                steps,
                keyNotes,
                scalingText,
                standardsText,
                formatLine: inferFormatLine(workout, steps)
            };
        }

        function pickWorkouts(candidates, count, forceRandom) {
            if (candidates.length === 0) {
                return [];
            }

            const selected = [];
            const usedIndices = new Set();
            const rng = forceRandom ? Math.random : mulberry32(getWeekSeed());
            const maxAttempts = candidates.length * 10;
            let attempts = 0;

            while (selected.length < count && usedIndices.size < candidates.length && attempts < maxAttempts) {
                attempts += 1;
                const workout = getRandomWorkout(candidates, rng);
                const index = candidates.indexOf(workout);
                if (index < 0 || usedIndices.has(index)) {
                    continue;
                }
                usedIndices.add(index);
                selected.push(workout);
            }

            if (selected.length < count) {
                for (let i = 0; i < candidates.length && selected.length < count; i += 1) {
                    if (usedIndices.has(i)) continue;
                    usedIndices.add(i);
                    selected.push(candidates[i]);
                }
            }

            return selected;
        }

        function renderCards(cards) {
            const displayArea = document.getElementById("display-area");
            const format = document.getElementById("select-format").value;

            if (cards.length === 0) {
                displayArea.classList.remove("single-card", "multi-card");
                displayArea.innerHTML = "<div class='empty-state'>No workouts found matching these filters. Try adjusting type, gear, or difficulty.</div>";
                return;
            }

            displayArea.classList.toggle("single-card", cards.length === 1);
            displayArea.classList.toggle("multi-card", cards.length > 1);

            const cardHtml = cards.map(workout => {
                const details = buildCardSections(workout);
                const shortMode = format === "short";
                const instructionItems = shortMode ? details.steps.slice(0, 5) : details.steps;
                const truncated = shortMode && details.steps.length > 5;
                const instructionsHtml = instructionItems.map(item => `<li>${item}</li>`).join("") + (truncated ? "<li class='overflow-marker'>...</li>" : "");
                const notesHtml = details.keyNotes.map(item => `<li>${item}</li>`).join("");
                const chips = getWorkoutChips(workout).map(label => `<span class='chip'>${label}</span>`).join("");

                return `
                    <article class="wow-card ${format === "short" ? "short" : "long"}">
                        <div class="card-header">
                            <h3 class="brand-title">RuckingRevolution.org</h3>
                            <div class="meta-tag">${workout.category}</div>
                        </div>

                        <h4 class="card-title">${workout.title}</h4>
                        ${chips ? `<div class="chip-row">${chips}</div>` : ""}

                        <div class="stats-bar">
                            <div class="stat-item stat-difficulty"><strong>Difficulty:</strong> ${workout.difficulty}</div>
                            <div class="stat-item stat-time"><strong>Time:</strong> ${workout.time}</div>
                            <div class="stat-item stat-gear"><strong>Gear:</strong> ${workout.gear}</div>
                        </div>

                        <div class="card-content">
                            <p class="section-title">WORKOUT FLOW</p>
                            <p class="format-line">${details.formatLine}</p>
                            <ul class="instruction-list">${instructionsHtml}</ul>
                        </div>

                        ${notesHtml ? `
                        <div class="notes-block">
                            <p class="section-title">KEY NOTES</p>
                            <ul class="note-list">${notesHtml}</ul>
                        </div>
                        ` : ""}

                        <div class="footer-section">
                            <div><span class="footer-label">Scaling:</span>${details.scalingText}</div>
                            <div><span class="footer-label">Movement Standards:</span>${details.standardsText}</div>
                        </div>

                        <p class="disclaimer">Disclaimer: Consult a physician before beginning. Rucking involves heavy loads; ensure proper form.</p>
                    </article>
                `;
            }).join("");

            displayArea.innerHTML = cardHtml;
        }

        function updateSeedInfo(forceRandom, candidateCount, shownCount) {
            const seedInfo = document.getElementById("seed-info");
            if (forceRandom) {
                seedInfo.textContent = `Mode: Random reroll | Matching workouts: ${candidateCount} | Showing: ${shownCount}`;
                return;
            }

            seedInfo.textContent = `Mode: Weekly deterministic (seed ${getWeekSeed()}) | Matching workouts: ${candidateCount} | Showing: ${shownCount}`;
        }

        // ==========================================
        // 3. GENERATION & RENDERING
        // ==========================================
        function generateWeeklyWorkout() {
            generateWorkout(false);
        }

        // forceRandom = false (Use Week Seed) | true (Use pure random)
        function generateWorkout(forceRandom = false) {
            const candidates = getFilteredCandidates();
            const count = getSelectedCount();
            const selectedWorkouts = pickWorkouts(candidates, count, forceRandom);

            renderCards(selectedWorkouts);
            updateSeedInfo(forceRandom, candidates.length, selectedWorkouts.length);
        }

        ["select-type", "select-gear", "select-difficulty", "select-format", "select-count"].forEach(id => {
            const control = document.getElementById(id);
            control.addEventListener("change", () => {
                generateWeeklyWorkout();
            });
        });

        document.getElementById("btn-weekly").addEventListener("click", generateWeeklyWorkout);
        document.getElementById("btn-reroll").addEventListener("click", () => generateWorkout(true));
        document.getElementById("btn-print").addEventListener("click", () => window.print());

        generateWeeklyWorkout();
