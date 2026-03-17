export interface CrewTactic {
  id: string;
  category: string;
  text: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in seconds
  prompts: string[];
}

export const crewTactics: CrewTactic[] = [
  // Leadership Category (10 cards)
  {
    id: 'ct-lead-1',
    category: 'Leadership',
    text: 'When uncertainty increases, decrease your talk-to-listen ratio. Speak less, observe more.',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Notice what happens when you speak less in team settings',
      'What details do you observe when you increase listening?',
      'How does this affect team dynamics?'
    ]
  },
  {
    id: 'ct-lead-2',
    category: 'Leadership',
    text: 'Name the emotion you see in a teammate before addressing the task at hand.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Practice identifying emotions in others during training',
      'How does acknowledging emotion change the interaction?',
      'What happens when you skip this step?'
    ]
  },
  {
    id: 'ct-lead-3',
    category: 'Leadership',
    text: 'Take responsibility for the team\'s mistakes before claiming credit for successes.',
    difficulty: 'advanced',
    duration: 25,
    prompts: [
      'Reflect on a recent team failure - how did you respond?',
      'How does taking blame first affect team trust?',
      'Practice this mindset in your next after-action review'
    ]
  },
  {
    id: 'ct-lead-4',
    category: 'Leadership',
    text: 'Ask \"What do you need from me right now?\" before offering solutions.',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Try this with a teammate today',
      'Notice how it changes the conversation flow',
      'What did you learn about their actual needs?'
    ]
  },
  {
    id: 'ct-lead-5',
    category: 'Leadership',
    text: 'Conduct a 60-second pulse check: \"On a scale of 1-5, how are you really doing?\"',
    difficulty: 'beginner',
    duration: 60,
    prompts: [
      'Use this at the start of team meetings',
      'Notice patterns in responses over time',
      'How does this affect psychological safety?'
    ]
  },
  {
    id: 'ct-lead-6',
    category: 'Leadership',
    text: 'Share a personal failure that taught you something important before asking others to share.',
    difficulty: 'intermediate',
    duration: 40,
    prompts: [
      'Choose a failure that led to growth',
      'Notice how vulnerability invites vulnerability',
      'What boundaries do you maintain while sharing?'
    ]
  },
  {
    id: 'ct-lead-7',
    category: 'Leadership',
    text: 'When giving feedback, start with what they did well before discussing improvement areas.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Practice the \"feedback sandwich\" approach',
      'Notice receptiveness when starting positive',
      'How specific can you be about what worked?'
    ]
  },
  {
    id: 'ct-lead-8',
    category: 'Leadership',
    text: 'Delegate outcomes, not methods. Tell them what success looks like, not how to achieve it.',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Try delegating a task with only the end goal specified',
      'Notice creativity in approaches from team members',
      'Where do you need to provide more guidance?'
    ]
  },
  {
    id: 'ct-lead-9',
    category: 'Leadership',
    text: 'Create a \"red flag\" signal anyone can use to pause action when safety is compromised.',
    difficulty: 'advanced',
    duration: 45,
    prompts: [
      'Work with team to establish clear red flag criteria',
      'Practice using the signal in low-stakes situations',
      'How does this affect decision-making speed vs safety?'
    ]
  },
  {
    id: 'ct-lead-10',
    category: 'Leadership',
    text: 'End interactions by asking: \"What\'s your takeaway from our conversation?\"',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Use this after important conversations',
      'Notice gaps between intended and received messages',
      'How does this improve communication clarity?'
    ]
  },
  
  // Communication Category (10 cards)
  {
    id: 'ct-comm-1',
    category: 'Communication',
    text: 'Repeat back the mission-critical details you heard before acknowledging receipt.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Practice with radio checks or briefings',
      'Notice what details you typically miss',
      'How does this reduce errors in high-stress situations?'
    ]
  },
  {
    id: 'ct-comm-2',
    category: 'Communication',
    text: 'Use the \"three-sentence rule\" for situation reports: What, Where, What\'s needed.',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Apply this to your next field report',
      'Notice what information gets prioritized',
      'How does brevity affect clarity under stress?'
    ]
  },
  {
    id: 'ct-comm-3',
    category: 'Communication',
    text: 'When communicating under load, emphasize keywords through vocal variation.',
    difficulty: 'intermediate',
    duration: 25,
    prompts: [
      'Practice saying \"MOVE\" with different emphasis',
      'Notice how tone affects urgency perception',
      'Which words benefit most from emphasis in your context?'
    ]
  },
  {
    id: 'ct-comm-4',
    category: 'Communication',
    text: 'Establish a visual signal for \"I understand but cannot respond verbally right now.\"',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Choose a signal with your team (thumbs up, specific gesture)',
      'Practice using it during training exercises',
      'How does this maintain communication when verbal isn\'t possible?'
    ]
  },
  {
    id: 'ct-comm-5',
    category: 'Communication',
    text: 'Use the \"brief-back\" technique: Have others explain the plan in their own words.',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Use this after giving complex instructions',
      'Notice misunderstandings that surface',
      'How does this improve shared mental models?'
    ]
  },
  {
    id: 'ct-comm-6',
    category: 'Communication',
    text: 'When lost or confused, ask: \"What\'s the last thing we definitely knew for sure?\"',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Apply this during navigation exercises',
      'Notice how it reduces panic and focuses thinking',
      'How far back do you typically need to go?'
    ]
  },
  {
    id: 'ct-comm-7',
    category: 'Communication',
    text: 'Develop brevity codes for common team phrases (e.g., \"Check six\" for security scan).',
    difficulty: 'intermediate',
    duration: 25,
    prompts: [
      'Work with team to create 5 essential brevity codes',
      'Practice using them during drills',
      'Notice time saved and clarity gained'
    ]
  },
  {
    id: 'ct-comm-8',
    category: 'Communication',
    text: 'Use terrain features as reference points instead of just compass bearings.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Practice navigating using handrails, catchpoints, and landmarks',
      'Notice reduced cognitive load compared to azimuth-only navigation',
      'How does this affect team coordination?'
    ]
  },
  {
    id: 'ct-comm-9',
    category: 'Communication',
    text: 'Establish a \"noise discipline\" protocol: Who talks when, on which channel, about what.',
    difficulty: 'advanced',
    duration: 40,
    prompts: [
      'Define clear communication hierarchies for different scenarios',
      'Practice during simulated stress scenarios',
      'Notice reduction in cross-talk and confusion'
    ]
  },
  {
    id: 'ct-comm-10',
    category: 'Communication',
    text: 'After action, ask: \"What did we assume that turned out to be wrong?\"',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Use this in debriefs to uncover hidden assumptions',
      'Notice patterns in incorrect assumptions',
      'How does this improve future planning?'
    ]
  },
  
  // Decision Making Category (10 cards)
  {
    id: 'ct-dec-1',
    category: 'Decision Making',
    text: 'When time allows, use the \"10-10-10\" rule: How will we feel about this decision in 10 minutes, 10 months, 10 years?',
    difficulty: 'intermediate',
    duration: 25,
    prompts: [
      'Apply this to a current team decision',
      'Notice how perspective changes across timeframes',
      'Which timeframe matters most for different decisions?'
    ]
  },
  {
    id: 'ct-dec-2',
    category: 'Decision Making',
    text: 'Set a \"decision deadline\" - agree as a team when you must decide, then stick to it.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Set deadlines for upcoming decisions',
      'Notice how it prevents analysis paralysis',
      'What happens when you miss the deadline?'
    ]
  },
  {
    id: 'ct-dec-3',
    category: 'Decision Making',
    text: 'Identify the \"decision owner\" for each choice - the person accountable for the outcome.',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Clarify decision rights for upcoming team activities',
      'Notice how accountability affects engagement',
      'How does this clarify who needs to be consulted vs informed?'
    ]
  },
  {
    id: 'ct-dec-4',
    category: 'Decision Making',
    text: 'Use \"pre-mortem\" analysis: Imagine it\'s six months later and the decision failed - why?',
    difficulty: 'advanced',
    duration: 35,
    prompts: [
      'Apply this to a current plan or strategy',
      'Notice different failure modes that emerge',
      'How does this change your confidence in the decision?'
    ]
  },
  {
    id: 'ct-dec-5',
    category: 'Decision Making',
    text: 'When stuck between options, flip a coin not to decide, but to reveal your true preference.',
    difficulty: 'beginner',
    duration: 10,
    prompts: [
      'Try this with a decision you\'ve been pondering',
      'Notice your reaction to the coin flip result',
      'What does this reveal about your underlying preference?'
    ]
  },
  {
    id: 'ct-dec-6',
    category: 'Decision Making',
    text: 'Establish clear criteria for what constitutes an \"acceptable solution\" before brainstorming.',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Define must-haves vs nice-to-haves for a current problem',
      'Notice how this focuses idea generation',
      'How does it reduce time spent on impractical solutions?'
    ]
  },
  {
    id: 'ct-dec-7',
    category: 'Decision Making',
    text: 'Use the \"two-chair\" technique: Physically move between chairs representing different perspectives.',
    difficulty: 'intermediate',
    duration: 25,
    prompts: [
      'Apply this to a decision with competing viewpoints',
      'Notice insights gained from physical perspective shifts',
      'How does this reduce internal conflict?'
    ]
  },
  {
    id: 'ct-dec-8',
    category: 'Decision Making',
    text: 'Set a \"decision rhythm\" - regular times when the team reviews and makes certain types of decisions.',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Establish daily, weekly, monthly decision reviews',
      'Notice reduced decision fatigue and improved timing',
      'What types of decisions fit each rhythm?'
    ]
  },
  {
    id: 'ct-dec-9',
    category: 'Decision Making',
    text: 'When information is incomplete, decide based on \"directional accuracy\" rather than perfect precision.',
    difficulty: 'advanced',
    duration: 25,
    prompts: [
      'Practice making decisions with 70% information',
      'Notice speed vs accuracy trade-offs',
      'How does this affect adaptability in changing situations?'
    ]
  },
  {
    id: 'ct-dec-10',
    category: 'Decision Making',
    text: 'Create a \"decision journal\" to record not just what you decided, but why and what you assumed.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Start a decision journal for leadership decisions',
      'Review it monthly to identify patterns',
      'How does this improve future decision quality?'
    ]
  },
  
  // Adaptability Category (10 cards)
  {
    id: 'ct-adapt-1',
    category: 'Adaptability',
    text: 'When plans change, ask: \"What opportunities does this create that weren\'t there before?\"',
    difficulty: 'intermediate',
    duration: 20,
    prompts: [
      'Apply this to a recent plan change',
      'Notice hidden opportunities in disruption',
      'How does this shift mindset from loss to gain?'
    ]
  },
  {
    id: 'ct-adapt-2',
    category: 'Adaptability',
    text: 'Practice \"controlled exposure\" to discomfort: Gradually increase time in challenging conditions.',
    difficulty: 'beginner',
    duration: 60,
    prompts: [
      'Identify a discomfort you typically avoid',
      'Create a gradual exposure plan',
      'Notice increased tolerance over time'
    ]
  },
  {
    id: 'ct-adapt-3',
    category: 'Adaptability',
    text: 'Develop a \"transition ritual\" to shift mindsets between different types of activities.',
    difficulty: 'beginner',
    duration: 30,
    prompts: [
      'Create a ritual for shifting from planning to execution',
      'Notice improved focus and reduced mental carryover',
      'How long does your ritual need to be effective?'
    ]
  },
  {
    id: 'ct-adapt-4',
    category: 'Adaptability',
    text: 'When frustrated, ask: \"What would patience look like in this situation?\"',
    difficulty: 'beginner',
    duration: 15,
    prompts: [
      'Apply this during training delays or equipment issues',
      'Notice alternative responses that emerge',
      'How does this affect team morale?'
    ]
  },
  {
    id: 'ct-adapt-5',
    category: 'Adaptability',
    text: 'Maintain a \"beginner\'s mind\" approach: Regularly question assumptions you consider obvious.',
    difficulty: 'intermediate',
    duration: 25,
    prompts: [
      'Identify one \"obvious\" assumption in your current work',
      'Question it as if seeing it for the first time',
      'What new possibilities emerge?'
    ]
  },
  {
    id: 'ct-adapt-6',
    category: 'Adaptability',
    text: 'Practice \"micro-adaptations\": Make small adjustments based on real-time feedback rather than waiting for major failures.',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Apply this to pace adjustment during rucking',
      'Notice improved efficiency and reduced fatigue',
      'How does this prevent larger corrections later?'
    ]
  },
  {
    id: 'ct-adapt-7',
    category: 'Adaptability',
    text: 'Create a \"change response protocol\": Define how the team will communicate and replan when circumstances change.',
    difficulty: 'intermediate',
    duration: 35,
    prompts: [
      'Establish clear steps for when primary plan becomes untenable',
      'Practice during training scenarios',
      'Notice reduced panic and faster recovery time'
    ]
  },
  {
    id: 'ct-adapt-8',
    category: 'Adaptability',
    text: 'Use \"analogical thinking\": Solve current problems by asking \"What is this similar to that we\'ve handled before?\"',
    difficulty: 'intermediate',
    duration: 30,
    prompts: [
      'Apply this to a novel challenge',
      'Notice relevant past experiences that inform solutions',
      'How does this build confidence in unfamiliar situations?'
    ]
  },
  {
    id: 'ct-adapt-9',
    category: 'Adaptability',
    text: 'Maintain an \"optionality mindset\": Always keep at least one viable alternative to your current plan.',
    difficulty: 'advanced',
    duration: 25,
    prompts: [
      'Identify your current plan\'s key assumptions',
      'Develop contingencies for when those assumptions fail',
      'Notice increased confidence in uncertain situations'
    ]
  },
  {
    id: 'ct-adapt-10',
    category: 'Adaptability',
    text: 'After action, ask: \"What did we learn that we should start, stop, or continue doing?\"',
    difficulty: 'beginner',
    duration: 20,
    prompts: [
      'Use this simple framework in all debriefs',
      'Notice clarity it brings to improvement discussions',
      'How does it prevent vague or unfocused feedback?'
    ]
  }
];