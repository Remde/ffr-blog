---
title: How the backtracking algorithm works
date: "2020-05-29T21:56:03.284Z"
description: "Like brute force... But way cooler"
---


<p>It was a beautiful day in Pelotas, Brazil. I was a high school student who wanted to compete in a local programming olympiad, so I was studying the to-be-regurgitated algorithms. I came across this particular problem:

<h3>Generate parentheses</h3>
<p>Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. Example:</p>
<p>When n = 3, a solution set is

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
</p>
<p>I don't remember exactly what I tried to do before reading the solution. Using stacks, maybe, which might even have worked. But, unbeknownst to me at the time, the best answer was something called "backtracking."


<h3>Backtracking</h3>
<p>"Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution." - Wikipedia.

Seems like what we want.
</p>
<h3>Blueprint</h3>
<p>We have almost always the same skeleton. Start with an empty data structure that will eventually be our final answer (in the example case, an array); an empty data structure that will be our current iteration (in the example case, a string). We call a helper function with both items, an input (in the example case, the number of parentheses n), maybe a few extras depending on the problem. On the helper function, we have a constraint. When CURRENT meets constraint, it gets added to FINAL. If it's not there yet, it calls itself again with every combination possible. Back to the main function, you return the final output.

 If you are anything like me a few years ago, the solution below will blow your mind.</p>

<h3>The solution</h3>
<p>

```python
def generateParenthesis(n):
    output = [] #our final data structure
    #input n, current string, final output, open and right parentheses count
    backtrack(n, "", output, 0, 0)
    return output

def backtrack(num, current, output, left, right):
    #our constraint. when n=3, every string will have 6 parentheses.
    if len(current) == 2*num:
        output.append(current) #so we append it.
        return output #and return it.

    #else we go to our recursive calls
    #left always comes first cause it's an open parentheses
    #so we update our current string with "("
    if left < num:
        backtrack(num, current+"(", output, left+1, right)
    #and right comes after left. so we update our current with ")"
    if right < left:
        backtrack(num, current+")", output, left, right+1)
```

If your mind hasn't been blown yet, let's try and analyze what happens here. Let's go with n = 2 for the sake of simplicity.
<p>Call 0: backtrack function is called with num=2, current="", output = [], left = 0, right = 0. Is len(current) == 2*num? No, it's 0, not 4, so we keep going. Is left less than 2? Yes, 0 < 3, so we go to our next call and this current call is now at the bottom of the stack.</p>
<p>Call 1: backtrack function is called with num=2, current="(", output=[], left=1, right = 0. len(current) < 4, but again left<num. 1 to the stack, new function called.</p>
<p>Call 2: backtrack function is called with num=2, current="((", output=[], left=2, right=0. len(current) still < 4, but this time left isn't less than 2. Is right < left? Yes. New call.</p>
<p>Call 3: backtrack called with num=2, current="(()", output=[], left=2, right=1. len(current) < 4, left == num, right < left. New call.</p>
<p>Call 4: backtrack called with num=2, current="(())", output=[], left=2, right=2. len(current) is 4, so we append it to the output and return. Back to call 3, which now ended, so back to call 2, which also ended, so back to call 1.</p>
<p>Call 1: backtrack function had num=2, current="(", output=["(())"] (now updated), left=1, right=0. First condition already called, now to the second, which is true, right is less than left, so we now call again backtrack but with "()" as current.</p>
You can certainly see where this is going, so I'll stop.

Our time complexity here is O(4^n/sqrt(n)) because each valid sequence has at most n steps during the backtracking procedure. Space is also O(4^n/sqrt(n)) because of the stack.


<p></p>
<h3>Final thoughts</h3>

<p>Maybe I just feel nostalgic because it's the first "hard" algorithm I learned, but I just love backtracking. A few good problems to solve using the same principles are: Combination Sum, Find All Permutations, Letter Combinations of a Phone Number, and Find All Subsets.</p>
