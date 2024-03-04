/**
 * Hardcode Prisma Types into this file, to avoid having to import the whole Prisma Client
 */

type Prisma_Base_Achievement = {
  playerId: number;
  name: string;
  metric: Metric;
  threshold: bigint;
  accuracy: bigint | null;
  createdAt: Date;
};

export type MemberActivity = {
  groupId: number;
  playerId: number;
  type: ActivityType;
  role?: GroupRole;
  previousRole?: GroupRole;
  createdAt: Date;
};

export type PlayerArchive = {
  playerId: number;
  previousUsername: string;
  archiveUsername: string;
  restoredUsername: string | null;
  createdAt: Date;
  restoredAt: Date | null;
};

type Prisma_Base_GroupSocialLinks = {
  id: number;
  groupId: number;
  website: string | null;
  discord: string | null;
  twitter: string | null;
  youtube: string | null;
  twitch: string | null;
  updatedAt: Date;
  createdAt: Date;
};

export type Membership = {
  playerId: number;
  groupId: number;
  role: GroupRole;
  createdAt: Date;
  updatedAt: Date;
};

export type Group = {
  id: number;
  name: string;
  clanChat: string | null;
  description: string | null;
  homeworld: number | null;
  verified: boolean;
  patron: boolean;
  profileImage: string | null;
  bannerImage: string | null;
  score: number;
  verificationHash: string;
  createdAt: Date;
  updatedAt: Date;
};

type Participation = {
  playerId: number;
  competitionId: number;
  startSnapshotId: number | null;
  endSnapshotId: number | null;
  teamName: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Competition = {
  id: number;
  title: string;
  metric: Metric;
  type: CompetitionType;
  startsAt: Date;
  endsAt: Date;
  groupId: number | null;
  score: number;
  verificationHash: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

type Prisma_Base_NameChange = {
  id: number;
  playerId: number;
  oldName: string;
  newName: string;
  status: NameChangeStatus;
  reviewContext: unknown | null;
  resolvedAt: Date | null;
  updatedAt: Date;
  createdAt: Date;
};

type Prisma_Base_Player = {
  id: number;
  username: string;
  displayName: string;
  type: PlayerType;
  build: PlayerBuild;
  status: PlayerStatus;
  country: Country | null;
  patron: boolean;
  exp: bigint;
  ehp: number;
  ehb: number;
  ttm: number;
  tt200m: number;
  registeredAt: Date;
  updatedAt: Date | null;
  lastChangedAt: Date | null;
  lastImportedAt: Date | null;
  latestSnapshotId: number | null;
};

type Prisma_Base_Record = {
  id: number;
  playerId: number;
  period: Period;
  metric: Metric;
  value: bigint;
  updatedAt: Date;
};

type Prisma_Base_Snapshot = {
  id: number;
  playerId: number;
  importedAt: Date | null;
  createdAt: Date;
  overallRank: number;
  overallExperience: bigint;
  attackRank: number;
  attackExperience: number;
  defenceRank: number;
  defenceExperience: number;
  strengthRank: number;
  strengthExperience: number;
  hitpointsRank: number;
  hitpointsExperience: number;
  rangedRank: number;
  rangedExperience: number;
  prayerRank: number;
  prayerExperience: number;
  magicRank: number;
  magicExperience: number;
  cookingRank: number;
  cookingExperience: number;
  woodcuttingRank: number;
  woodcuttingExperience: number;
  fletchingRank: number;
  fletchingExperience: number;
  fishingRank: number;
  fishingExperience: number;
  firemakingRank: number;
  firemakingExperience: number;
  craftingRank: number;
  craftingExperience: number;
  smithingRank: number;
  smithingExperience: number;
  miningRank: number;
  miningExperience: number;
  herbloreRank: number;
  herbloreExperience: number;
  agilityRank: number;
  agilityExperience: number;
  thievingRank: number;
  thievingExperience: number;
  slayerRank: number;
  slayerExperience: number;
  farmingRank: number;
  farmingExperience: number;
  runecraftingRank: number;
  runecraftingExperience: number;
  hunterRank: number;
  hunterExperience: number;
  constructionRank: number;
  constructionExperience: number;
  league_pointsRank: number;
  league_pointsScore: number;
  bounty_hunter_hunterRank: number;
  bounty_hunter_hunterScore: number;
  bounty_hunter_rogueScore: number;
  clue_scrolls_allRank: number;
  bounty_hunter_rogueRank: number;
  clue_scrolls_allScore: number;
  clue_scrolls_beginnerRank: number;
  clue_scrolls_easyRank: number;
  clue_scrolls_beginnerScore: number;
  clue_scrolls_easyScore: number;
  clue_scrolls_mediumRank: number;
  clue_scrolls_mediumScore: number;
  clue_scrolls_hardRank: number;
  clue_scrolls_hardScore: number;
  clue_scrolls_eliteRank: number;
  clue_scrolls_eliteScore: number;
  clue_scrolls_masterRank: number;
  clue_scrolls_masterScore: number;
  last_man_standingRank: number;
  last_man_standingScore: number;
  pvp_arenaRank: number;
  pvp_arenaScore: number;
  abyssal_sireRank: number;
  abyssal_sireKills: number;
  alchemical_hydraRank: number;
  alchemical_hydraKills: number;
  artioRank: number;
  artioKills: number;
  barrows_chestsRank: number;
  barrows_chestsKills: number;
  bryophytaKills: number;
  bryophytaRank: number;
  cerberusKills: number;
  chambers_of_xericRank: number;
  cerberusRank: number;
  callistoRank: number;
  callistoKills: number;
  calvarionRank: number;
  calvarionKills: number;
  chambers_of_xericKills: number;
  chambers_of_xeric_challenge_modeRank: number;
  chambers_of_xeric_challenge_modeKills: number;
  chaos_elementalKills: number;
  chaos_fanaticKills: number;
  chaos_fanaticRank: number;
  commander_zilyanaRank: number;
  chaos_elementalRank: number;
  commander_zilyanaKills: number;
  corporeal_beastRank: number;
  corporeal_beastKills: number;
  crazy_archaeologistRank: number;
  crazy_archaeologistKills: number;
  dagannoth_primeRank: number;
  dagannoth_primeKills: number;
  dagannoth_rexRank: number;
  dagannoth_rexKills: number;
  dagannoth_supremeRank: number;
  dagannoth_supremeKills: number;
  deranged_archaeologistRank: number;
  deranged_archaeologistKills: number;
  general_graardorRank: number;
  general_graardorKills: number;
  giant_moleRank: number;
  giant_moleKills: number;
  grotesque_guardiansRank: number;
  grotesque_guardiansKills: number;
  hesporiRank: number;
  kalphite_queenKills: number;
  hesporiKills: number;
  kalphite_queenRank: number;
  king_black_dragonRank: number;
  king_black_dragonKills: number;
  krakenRank: number;
  krakenKills: number;
  kreearraRank: number;
  kreearraKills: number;
  kril_tsutsarothRank: number;
  kril_tsutsarothKills: number;
  mimicRank: number;
  mimicKills: number;
  nightmareRank: number;
  nightmareKills: number;
  oborRank: number;
  oborKills: number;
  phantom_muspahRank: number;
  phantom_muspahKills: number;
  sarachnisRank: number;
  sarachnisKills: number;
  scorpiaRank: number;
  scorpiaKills: number;
  skotizoRank: number;
  skotizoKills: number;
  spindelRank: number;
  spindelKills: number;
  the_gauntletRank: number;
  the_gauntletKills: number;
  the_corrupted_gauntletKills: number;
  the_corrupted_gauntletRank: number;
  theatre_of_bloodRank: number;
  theatre_of_bloodKills: number;
  thermonuclear_smoke_devilRank: number;
  thermonuclear_smoke_devilKills: number;
  tombs_of_amascutRank: number;
  tombs_of_amascutKills: number;
  tombs_of_amascut_expertRank: number;
  tombs_of_amascut_expertKills: number;
  tzkal_zukRank: number;
  tzkal_zukKills: number;
  tztok_jadRank: number;
  tztok_jadKills: number;
  venenatisRank: number;
  venenatisKills: number;
  vetionRank: number;
  vetionKills: number;
  vorkathRank: number;
  vorkathKills: number;
  wintertodtRank: number;
  zalcanoRank: number;
  wintertodtKills: number;
  zalcanoKills: number;
  zulrahRank: number;
  zulrahKills: number;
  ehpValue: number;
  ehbValue: number;
  ehbRank: number;
  ehpRank: number;
  soul_wars_zealScore: number;
  soul_wars_zealRank: number;
  temporossKills: number;
  temporossRank: number;
  theatre_of_blood_hard_modeKills: number;
  theatre_of_blood_hard_modeRank: number;
  phosanis_nightmareKills: number;
  phosanis_nightmareRank: number;
  nexKills: number;
  nexRank: number;
  guardians_of_the_riftScore: number;
  guardians_of_the_riftRank: number;
};
