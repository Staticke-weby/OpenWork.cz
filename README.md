# Startovní složka projektu openwork.cz / openwork.sk

Tato složka je pracovní prostor pro AI agenta. Otevřete ji v aplikaci OpenWork
a nechte agenta plnit zadání ze složky `zadani/` — v pořadí podle čísel.

## Jak začít

1. V OpenWork zvolte poskytovatele **OpenCode Go** a model **GLM-5.3-Flash**.
2. Otevřete tuto složku jako pracovní prostor.
3. Zadejte agentovi první úkol, například:
   „Přečti si AGENTS.md a slovnicek.md a pak splň zadání zadani/01-kostra-astro.md."
4. Výsledek zkontrolujte, poznámky pište přímo do souborů — agent na ně naváže.
5. Pokračujte zadáním 02 a 03.

## Co je v této složce

| Soubor / složka | K čemu slouží |
|---|---|
| AGENTS.md | Pravidla pro agenta — platí pro všechny úkoly. Agent si je čte vždy jako první. |
| slovnicek.md | Závazný slovník pojmů. Jak psát česky, co nechat v originále. |
| zadani/01-kostra-astro.md | Úkol 1: založit kostru webu (Astro, obě domény, první vlna stránek). |
| zadani/02-uvodni-stranka.md | Úkol 2: napsat úvodní stránku podle tří pilířů + ústřední SVG. |
| zadani/03-kontrola-cestiny.md | Úkol 3: projít vzniklé texty testem čitelnosti a opravit je. |
| data/bezplatne-urovne.yaml | Kostra dat pro tabulku bezplatných úrovní (naplní se později). |
| data/zdr-poskytovatele.yaml | Kostra dat pro tabulku ZDR — nulového uchovávání dat. |
| vystup/ | Sem agent ukládá hotový projekt webu. Vznikne při prvním úkolu. |

## Sledování nákladů

Do souboru `naklady.md` (založte si ho) si po každém sezení poznamenejte
spotřebu z konzole Go. Z těchto poznámek později vznikne článek
„Tento web vznikl za předplatné 10 dolarů měsíčně".
