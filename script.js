// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
function SplitNNotan(summa, antalVanner, dricks):
    totalSumma = summa * (1 + dricks)
    if (antalVanner <= 0)
        print "Felaktigt antal vänner. Ange åtminstone en vän."
        return 0
    end if
    return totalSumma / antalVanner
end function
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "EYE";
    SET variabel slutOrd till "LID";
    
    while (startOrd !== slutOrd){
        SET variabel nuvarandeOrd = inputAnvandare;
        if (nuvarandeOrd.length === startOrd.length)
            if(isOneLetterApart (nuvarandeOrd, startOrd) && ordbok.include(nuvarandeOrd)) // if anrop till isOneLetterApart är sant och ordbok innehåller nuvarandeOrd
                startOrd = nuvarandeOrd
            end if
        end if
    }
    print "grattis du har vunnit"
end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;
    
    För varje index i wordOne från 0 till längden av wordOne gör
        Om bokstaven på det aktuella indexet i wordOne inte är lika med bokstaven på samma index i wordTwo då
            Öka variabeln diffCount med 1.
        Slut om
    Slut för

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/