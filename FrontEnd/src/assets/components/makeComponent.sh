RED="$(tput setaf 198)"
GREEN="$(tput setaf 2)"
YELLOW="$(tput setaf 11)"
PINK="$(tput setaf 13)"
BOLD="$(tput bold)"
RESET="$(tput sgr0)"

# if too many args
if (( $# > 1 ))
  then
    echo -e "${BOLD}${RED}Too many arguments. (Use 1) \n#aborting!${RESET}"
    exit 1
fi

# if no arg
if [ $# -eq 0 ]
  then
    # ask for component name
    echo -e "${BOLD}${YELLOW}Component name?${RESET} "
    read COMPONENT
    # force capitalize
    COMPONENT="$(tr '[:lower:]' '[:upper:]' <<< ${COMPONENT:0:1})${COMPONENT:1}"
  else
  # else component name is arg
  ARG1=$1
  # force capitalize
  COMPONENT="$(tr '[:lower:]' '[:upper:]' <<< ${ARG1:0:1})${ARG1:1}"
fi

# verify information
read -p "$(printf $BOLD$YELLOW"Make component \"$PINK$COMPONENT$YELLOW\" in current dir \"$PINK${PWD##*/}$BOLD$YELLOW\" $RESET[y/n] ")" -n 1 -r
# new line
echo 
# if yes
if [[ $REPLY =~ ^[Yy]$ ]]
  then
    # create component file & write to component.js
    printf "%s\n" "import React from 'react'; " "import '../scss/${COMPONENT}.scss'; " "" "const ${COMPONENT} = () => {" "  return (" "   <div id=""'wrapper${COMPONENT}'""></div>" "  )" "}" "" "export default ${COMPONENT};" >> ${COMPONENT}.component.js
    echo -e "${GREEN}Created ${RESET}${COMPONENT}.component.js"
    # create styles file
    cd "../scss"
    touch "${COMPONENT}.scss"
    echo -e "${GREEN}Created ${RESET}${COMPONENT}.scss"
    cd "../../"
    printf "%s\n" "import ${COMPONENT} from './assets/components/${COMPONENT}.component.js'" >> App.js
    # done
    echo -e "${BOLD}${GREEN}Success!${RESET}"
    exit 0
else
  # if no
  echo -e "${BOLD}${RED}#canceled!${RESET}"
  exit 1
fi