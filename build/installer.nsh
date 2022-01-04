!macro customInstall
    WriteRegStr HKCR "Directory\shell\i-converter" "" "i-converter ile Aç"
    WriteRegStr HKCR "Directory\shell\i-converter" "Icon" "$INSTDIR\i-converter.exe"
    WriteRegStr HKCR "Directory\shell\i-converter\command" "" '"$INSTDIR\i-converter.exe" "%V"'
!macroend