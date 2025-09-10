import React, { useState } from "react";
import '../App.css';


function WikiRaceGame() {
  // Pool of possible OSRS wiki pages
  const pages = [
    "Lumbridge",
    "Varrock",
    "Falador",
    "Ardougne",
    "Catherby",
    "Yanille",
    "Edgeville",
    "Draynor Village",
    "Al Kharid",
    "Karamja",
    "TzHaar City",
    "Rellekka",
    "Fremennik Isles",
    "Lunar Isle",
    "Mort'ton",
    "Port Phasmatys",
    "Burgh de Rott",
    "Canifis",
    "Slayer Tower",
    "Temple of Ikov",
    "Mage Arena",
    "Duel Arena",
    "Castle Wars",
    "Pest Control",
    "Barrows",
    "Ape Atoll",
    "Gnome Stronghold",
    "Tree Gnome Village",
    "Keldagrim",
    "Dorgesh-Kaan",
    "Zulrah",
    "Vorkath",
    "Kraken",
    "Cerberus",
    "Abyssal Sire",
    "Dagannoth Kings",
    "General Graardor",
    "Commander Zilyana",
    "K'ril Tsutsaroth",
    "Kree'arra",
    "Corporeal Beast",
    "Nex",
    "Obor",
    "Bryophyta",
    "Chaos Elemental",
    "Chaos Fanatic",
    "Crazy Archaeologist",
    "Scorpia",
    "Vet'ion",
    "Venenatis",
    "Callisto",
    "Nightmare of Ashihama",
    "Phosani's Nightmare",
    "Chambers of Xeric",
    "Theatre of Blood",
    "Tombs of Amascut",
    "Fire cape",
    "Infernal cape",
    "Quest Cape",
    "Achievement Diary Cape",
    "Max Cape",
    "Dragon scimitar",
    "Abyssal whip",
    "Dragon dagger",
    "Rune scimitar",
    "Rune platebody",
    "Rune full helm",
    "Armadyl godsword",
    "Bandos godsword",
    "Saradomin godsword",
    "Zamorak godsword",
    "Toxic blowpipe",
    "Twisted bow",
    "Scythe of Vitur",
    "Ghrazi rapier",
    "Dragon warhammer",
    "Elysian spirit shield",
    "Arcane spirit shield",
    "Spectral spirit shield",
    "Primordial boots",
    "Pegasian boots",
    "Eternal boots",
    "Ancestral robe top",
    "Ancestral robe bottom",
    "Ancestral hat",
    "Armadyl chestplate",
    "Armadyl chainskirt",
    "Bandos chestplate",
    "Bandos tassets",
    "Void Knight set",
    "Elite Void Knight set",
    "Graceful set",
    "Rune crossbow",
    "Armadyl crossbow",
    "Rune pouch",
    "Ancient Magicks",
    "Lunar Spells",
    "Arceuus Spells",
    "Recipe for Disaster",
    "Monkey Madness",
    "Desert Treasure",
    "Dragon Slayer II",
    "Song of the Elves",
    "Sins of the Father",
    "Beneath Cursed Sands",
    "Secrets of the North",
    "Hallowed Sepulchre",
    "Tempoross",
    "Wintertodt",
    "Volcanic Mine",
    "Motherlode Mine",
    "Blast Furnace",
    "Nightmare Zone",
    "Warriors' Guild",
    "Fishing Trawler",
    "Tithe Farm",
    "LMS",
    "Soul Wars",
    "Trouble Brewing",
    "Rogues' Den",
    "Stronghold of Security",
    "Fossil Island",
    "Zeah"
  ]; // 120 entries total ✅

  // Pick random start
  const startIndex = Math.floor(Math.random() * pages.length);
  let endIndex;

  // Ensure start and end are not the same
  do {
    endIndex = Math.floor(Math.random() * pages.length);
  } while (endIndex === startIndex);

  const startPage = pages[startIndex];
  const endPage = pages[endIndex];

  return (
  <div className="wikiRaceGameDiv">
    <h1>Get from start point to the end point with least amounts of clicks possible</h1>
    <br /><br />

   <h1>
    Start Page : <br />
  <a
    href={`https://oldschool.runescape.wiki/w/${startPage}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {startPage}
  </a>
</h1>

   <h1>
    End Page : <br />
  <a
    href={`https://oldschool.runescape.wiki/w/${endPage}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {endPage}
  </a>
</h1>
  </div>
);


}



export default WikiRaceGame