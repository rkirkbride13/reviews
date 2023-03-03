## Academic maths papers
They make them easier to read
Product does this by scanning through papers looking for sums
It then extracts the sums as strings
Extracted sum strings are then evaluated and evaluated result is outputted along with the extracted string

## Client requirements
Build something that evaluates the sum strings containing either one or two terms

Example input/output:
Two term sum: 
Input "1 + 1"	-> output ["1 + 1", 2.0]

One term sum:
Input "1"	-> output ["1", 1.0]

If input contains string, output to be:
"Math error: Input must be valid mathematical equation with number seperated by spaces"


Input/Output table
Inputs        | Outputs
"1"           | ["1", 1.0]
"1 + 1"       | ["1 + 1", 2.0]
"1 - 1"       | ["1 - 1", 0.0]
"1 * 1"       | ["1 * 1", 1.0]
"1 / 1"       | ["1 / 1", 1.0]
"2 * 3"       | ["2 * 3", 6.0]
"6 / 3"       | ["6 / 3", 2.0]
              |
              |  


