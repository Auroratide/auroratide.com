---
id: minesweeper
title: "Minesweeper"
category: Game
tags:
  - minesweeper
  - calculator
  - texas instruments
  - basic
  - puzzle
icon: bomb
color: red
cover:
  alt: "A bunch of numbers in arranged in a grid with some empty space, and a smiley face on the sidebar."
summary: "A port of the classic Minesweeper game for the TI-83/4 series of graphing calculators. This was my first ever substantial programming project."
summaryDisp: "Minesweeper on a calculator"
publishedAt: 2008-11-01T00:00:00.000Z
order: 250
links:
  - title: Download
    href: https://drive.google.com/open?id=1jtqDq88STd9bIIGqNKieHKHZABP7r_3v
    icon: bomb
    color: red
gallery:
  - src: "./gameplay.png"
    alt: "A bunch of numbers in arranged in a grid with some empty space, and a smiley face on the sidebar."
    caption: "Just minesweeper, but on your calculator!"
    width: 465
    height: 360
---

This port of Minesweeper is my first major program, written for TI calculators. Using pure TI-BASIC, the programming language I started off with, this version of Minesweeper has three difficulty settings, a custom dimension setter, and a way to track high scores.

I first started learning TI-BASIC early 2008, and if it wasn't for the existence of the TI-Basic Developer, I would not have gotten very far. The vast archive of others' accomplishments motivated me, and its shear wealth of information equipped me.

Unfortunately, this Minesweeper program is among the only surviving programs from my TI-BASIC period. Most of them have since been deleted or lost. At the very least, I still have this remnant from my past.

The code for this program is open source and free to use without my explicit permission.

```
AxesOff
FnOff
Full
ClrDraw
SetUpEditor MINE
If not(dim(⸤MINE
{999,999,999→⸤MINE
ClrHome
0→Xmin:1→ΔX
0→Ymin:1→ΔY
19→A
9→B
1→J
Repeat getKey=105 or J=12
	Pxl-On(A,B
	Pxl-On(A+8,B
	Pxl-On(A+8,B+6
	Pxl-On(A,B+6
	rand(20
	Text(-1,A+1,B+1,sub("MINESWEEPER",J,1
	B+6→B:J+1→J:rand(18
	Pxl-Off(A,B-6
	Pxl-Off(A+8,B-6
End
If J≠12
Goto 0
Pxl-On(A,B
Pxl-On(A+8,B
Pxl-On(A+8,B+6
Pxl-On(A,B+6
rand(20
For(A,10,70,5
	Circle(78,39,A,{i
End
rand(99
ClrDraw
Text(-1,1,15,"MINESWEEPER
Text(25,28,"VERSON 3.1
Text(50,21,"TIMOTHY FOSTER
{6,12,18,30,36,42,56,1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85→L₁
Repeat getKey
	Text(L₁(randInt(1,7)),L₁(randInt(8,25)),randInt(1,8
End
Lbl 0
ClrDraw
Text(-1,0,17,"Minesweeper
26
Text(9,Ans,"1:BEGINNER
Text(17,Ans,"2:INTERMEDIATE
Text(25,Ans,"3:EXPERT
Text(33,Ans,"4:CUSTOM
Text(41,Ans,"5:HIGHSCORES
Text(49,Ans,"6:INSTRUCTIONS
Repeat Ans
	getKey→K
End
ClrDraw
7(K>=92)+(K>92)+2(K>93→H
10(K>=92)+6(K>92)+4(K>93→W
8(K>=92)+12(K>92)+24(K>93→B
(K>=92)+(K>92)+(K>93→L
If K=83
Then
	ClrHome
	Disp "BEGINNER",⸤MINE(1
	Disp "INTERMEDIATE",⸤MINE(2
	Disp "EXPERT",⸤MINE(3:Pause
End
If K=84
Then
	Text(1,2,"MOVEMENT
	Text(19,2,"REVEAL
	Text(36,2,"FLAG
	Text(53,2,"EXIT BY PRESSING CLEAR
	Text(8,2,"MOVE WITH ARROW KEYS
	Text(26,2,"PRESS ENTER
	Text(43,2,"PRESS + TO FLAG OR UNFLAG
	Pause
End
If K=82
Then
	ClrHome
	Disp "DIMENSIONS?
	Input "HEIGHT ",H
	Input "WIDTH ",W
	Disp "BOMBS?
	Input B
	H-(H-10)(H>10)-(H-3)(H<3→H
	W-(W-20)(W>20)-(W-3)(W<3→W
	B-(B-(HW-4))(B>HW-4)-(B-3)(B<3→B:int(H→H:int(W→W
	int(B→B
End
If K=45
Then
	ClrDraw
	ClrHome
	Disp
	Stop
End
If max(K={83,84} or not(max(K={92,93,94,82
Goto 0
DelVar [B]{int(H),int(W→dim([B]
ClrHome
Output(1,1,"LOADING...
For(N,1,B)
	Output(4,8,int(N/B*100
	Repeat not(fPart([B](A,E
		randInt(1,H→A
		randInt(1,W→E
		A+(A+E=2→A
	End
	.5→[B](A,E
	For(C,-1,1
		For(D,-1,1
			If C+A>0 and C+A<=H and D+E>0 and D+E<=W
			1+[B](A+C,E+D→[B](A+C,E+D
		End
	End
End
Line(83,51,83,49
Line(84,48,84,47
Line(85,46,86,46
Line(87,45,89,45
Line(90,46,91,46
Line(92,47,92,48
Line(93,51,93,49
Line(92,52,92,53
Line(91,54,90,54
Line(89,55,87,55
Line(85,54,86,54
Line(84,52,84,53
Pxl-On(10,86
Pxl-On(10,90
Pxl-On(13,86
Pxl-On(13,90
Line(87,48,89,48
1→A
1→E
Line(4W+1,62,4W+1,60-6H
Line(0,60-6H,4W+1,60-6H
2→dim(L₁
HW-B→θ
{A,E→L₁
Pxl-On(6A-5,4E-4
Pxl-On(6A+1,4E-4
Pxl-On(6A+1,4E
Pxl-On(6A-5,4E
Text(30,82,B
startTmr→T
Repeat not(θ) or K=45 or fPart([B](L₁(1),L₁(2
	Repeat Ans
		getKey→K
		Text(40,82,checkTmr(T
	End
	Pxl-Off(6A-5,4E-4
	Pxl-Off(6A+1,4E-4
	Pxl-Off(6A+1,4E
	Pxl-Off(6A-5,4E
	min(W,max(1,E+sum(ΔList(K={24,26→E
	min(H,max(1,A+sum(ΔList(K={25,34→A
	Pxl-On(6A-5,4E-4
	Pxl-On(6A+1,4E-4
	Pxl-On(6A+1,4E
	Pxl-On(6A-5,4E
	If K=105 and not(pxl-Test(6A-2,4E-2)+pxl-Test(6A-4,4E-2
	Then
		{A,E→L₁
		Text(6A-5,4E-3,[B](A,E
		θ-1→θ
		If not([B](A,E
		Then
			For(U,-1,1
				For(V,-1,1
					If U+A>0 and U+A<=H and V+E>0 and V+E<=W
					Then
						If not(pxl-Test(6(A+U)-2,4(E+V)-2)+pxl-Test(6(A+U)-4,4(E+V)-2
						Then
							Text(6(A+U)-5,4(E+V)-3,[B](A+U,E+V
							θ-1→θ
						End
					End
				End
			End
		End
	End
	If K=95 and not(pxl-Test(6A-4,4E-2)+pxl-Test(6A-4,4E-3
	Then
		If pxl-Test(6A-1,4E-2) and pxl-Test(6A-2,4E-3
		Then
			B+1→B
			Pxl-Off(6A-1,4E-2
			Pxl-Off(6A-2,4E-3
			Pxl-Off(6A-2,4E-1
			Pxl-Off(6A-3,4E-2
			Pxl-Off(6A-2,4E-2
		Else
			B-1→B
			Text(6A-5,4E-3,"+
		End
		Text(30,82,"            "
		Text(30,82,B
	End
End
If not(θ
Then
	Pxl-On(9,85
	Pxl-On(9,91
	Line(87,52,89,52
	Line(86,51,90,51
	Pxl-Off(11,88
Else
	Pxl-Off(13,86
	Pxl-On(13,88
	Pxl-On(13,89
	Pxl-Off(13,90
	Pxl-On(14,86
	Pxl-Off(14,87
	Pxl-Off(14,88
	Pxl-Off(14,89
	Pxl-On(14,90
	Pxl-On(11,87
	Pxl-On(11,89
	Pxl-On(13,87
End
checkTmr(T→A
For(C,1,H)
	For(B,1,W)
		If fPart([B](C,B
		Then
			Text(6C-5,4B-3,"+
		Else
			Text(6C-5,4B-3,[B](C,B
		End
	End
End
Pause
ClrHome
Disp "YOU "+sub("LOSEWIN!",4(θ=0)+1,4
If Lnot(θ
Then
	Disp A
	If A<⸤MINE(L
	Then
		Disp "NEW HIGHSCORE!
		A→⸤MINE(L
	End
End
ClrDraw
Pause
Goto 0
```
