## Megasoft weird

Make word processors. They would like me to build a spellchecker

## Client requirements

Input would be a string and output would be a string
Output should highlight words that have incorrect spelling, by prefix/suffixing with ~

As an example:
"words"	> "words"
"wrds"	> "~wrds~"

Words should be in UK english and should be checking for dictionary words. A small selection of example words can be used to demonstrate.

Inputs        | Outputs
a             | a
z             | ~z~
to            | to
ot            | ~ot~
the           | the  
thw           | ~thw~  
words         | words 
wrds          | ~wrds~
3             | ~3~
dog           | dog
walked        | walked
home          | home
dpg           | ~dpg~
wlked         | ~wlked~
hme           | ~hme~
The dog walked home | The dog walked home
Thw dpg wlked hme | ~Thw~ ~dpg~ ~wlked~ ~hme~
