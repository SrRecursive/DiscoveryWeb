# If there is no arguments
if [ $# -eq 0 ];
then
    echo "You didn't give me any argument! (This one doesn't count :p)"
else # If there is arguments
    for i in "$@"; # Iterates through the arguments passed as parameters
    do
        mkdir "ex$i" # Creates a directory that starts with "ex" followed by the argument
    done
fi
