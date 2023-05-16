# If there is no arguments
if [ $# -eq 0 ];
then
    echo "You didn't give me any argument! (This one doesn't count :p)"
else # If there is arguments
    cont=0; # Declares a variable cont with the value 0
    for i in "$@"; # Iterates through the arguments passed as parameters
    do
        if [ $cont -lt 3 ];
        then
            echo "$i" # Prints the argument if cont is less than 3
        fi
        ((cont++)) # Adds cont 1
    done
fi
