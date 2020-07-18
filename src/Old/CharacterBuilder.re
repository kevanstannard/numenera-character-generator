// type stat =
//   | Might
//   | Speed
//   | Intellect;
// type effort =
//   | Effort(int);
// type edge =
//   | Edge(int);
// type attackType =
//   | Melee
//   | Ranged;
// type attackBonus =
//   | AttackBonus(int);
// type cypher =
//   | DensityNodule
//   | Rejuvinator;
// type oddity =
//   | Oddity(string);
// type character = {
//   ignore: option(int),
//   characterType: option(Numenera.characterTypeEnum),
//   effort,
//   mightEdge: edge,
//   speedEdge: edge,
//   intellectEdge: edge,
//   meleeAttackBonus: attackBonus,
//   rangedAttackBonus: attackBonus,
// };
// let defaultCharacter = () => {
//   ignore: None,
//   characterType: None,
//   effort: Effort(0),
//   mightEdge: Edge(0),
//   speedEdge: Edge(0),
//   intellectEdge: Edge(0),
//   meleeAttackBonus: AttackBonus(0),
//   rangedAttackBonus: AttackBonus(0),
// };
// let setCharacterType =
//     (character: character, characterType: option(Numenera.characterTypeEnum))
//     : character => {
//   ...character,
//   characterType,
// };
// let addEffort = (character: character, effort: effort): character => {
//   let Effort(current) = character.effort;
//   let Effort(extra) = effort;
//   {...character, effort: Effort(current + extra)};
// };
// let addMightEdge = (character: character, edge: edge): character => {
//   let Edge(current) = character.mightEdge;
//   let Edge(extra) = edge;
//   {...character, mightEdge: Edge(current + extra)};
// };
// let addSpeedEdge = (character: character, edge: edge): character => {
//   let Edge(current) = character.speedEdge;
//   let Edge(extra) = edge;
//   {...character, speedEdge: Edge(current + extra)};
// };
// let addIntellectEdge = (character: character, edge: edge): character => {
//   let Edge(current) = character.intellectEdge;
//   let Edge(extra) = edge;
//   {...character, intellectEdge: Edge(current + extra)};
// };
// let addMeleeAttackBonusEdge =
//     (character: character, attackBonus: attackBonus): character => {
//   let AttackBonus(current) = character.meleeAttackBonus;
//   let AttackBonus(extra) = attackBonus;
//   {...character, meleeAttackBonus: AttackBonus(current + extra)};
// };
// let addRangedAttackBonusEdge =
//     (character: character, attackBonus: attackBonus): character => {
//   let AttackBonus(current) = character.rangedAttackBonus;
//   let AttackBonus(extra) = attackBonus;
//   {...character, rangedAttackBonus: AttackBonus(current + extra)};
// };
// let character =
//   defaultCharacter()
//   ->setCharacterType(Some(Numenera.Jack))
//   ->addEffort(Effort(1))
//   ->addMightEdge(Edge(1))
//   ->addIntellectEdge(Edge(0));
