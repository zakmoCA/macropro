# README

## Progress to MVP: 🟩🟩⬜️⬜️⬜️

This will be a simple tool to provide optimal macronutrient split and macros for individuals based on:

- Age, weight, sex, height (BMR)
- Total Daily Energy Expenditure (TDEE) and Macropro's Recommended Daily Intake
- Activity level and exercise level
- Appetite and eating habits
- Goals (athletic and physique)

A lot of calculators operate along a single dimension of these factors, but I want to build this tool 
in keeping with the latest literature on nutrition and training to help serve as a useful 'guide' when deciding 
on a diet plan personally. 

For example, let's take somebody engaging in frequent strength-training and cardio, and has an otherwise large
appetite. This person will need to make considerations usually not covered by most of the calculators built into various fitness apps, such as:

- Eating enough protein, as an already elevated protein requirement from strength-training is elevated even further to 
also provide adequate recovery from lots of running.


Such a person will need a protein intake that looks ridiculous on paper, but necessary in practice, with symptoms of overtraining and loss of lean tissue following otherwise. 

The way people have dealt with this problem is by seeking coaching from experts, as this arcane knowledge does exist in those silos. However, I don't think something as simple as a calculator for macronutrient intake and proportions is unable to take into account additional variables that would serve as a useful guide for the intake one should be aiming for, when having multiple fitness 
goals.

My calculations and sources will be added to this document. The equations themselves are well established but the final recommendations
will also take into account current best practices from strength training and endurance sports.

## Progress

- [x] Plumbing
- [x] Functionality for typical use-cases

Remaining to reach MVP is mostly the fleshing out of algorithms for making these recommendations. The plan is to start down common --> less common training/training x goals types. Once I have a minimum viable product in terms of functionality I will begin building the User Interface, and planning additional features.

### Todos

#### Base Model for Most Calculations

- [ ] Baseline parameters for Strength-Training Dominant vs Cardio/Endurance Dominant vs Hybrid users
- [ ] Recommendations for [Activity levels & Exercise Levels] x [Maintenance]. This will form the basis for the majority of the calculations for most users.
- [ ] Recommendations for [Activity levels & Exercise Levels] x [Goals]

#### Fine-Tuning

- [ ] Recommendations for [Exercise Dominance] x [Exercise Levels]
- [ ] Recommendations for [Exercise Dominance] x [Activity Levels & Exercise Levels]
- [ ] Recommendations for [(Activity levels & Exercise Levels) x Goals] x [Exercise Dominance]

#### Future Parameters

There will likely be additional parameters I will be incorporating in the future like diet type (2-3 meals a day? Intermittent fasting?) with recommendations for meal timing/macro timing for different training goals etc., macro recommendations taking into account users' existing feeding habits, preferences, and appetite (someone with large appetite trying to lose weight will result in increased weighting of Protein⬆️ for satiety, as an example). 

The project scope has the potential to expand quite a bit, so I'll reassess after MVP.