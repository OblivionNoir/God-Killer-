from tkinter import *
from functools import partial



#window
tkWindow = Tk()
tkWindow.geometry('400x150')
tkWindow.title('Tkinter Login Form - pythonexamples.org')



#login button
loginButton = Button(tkWindow, text="Login").grid(row=4, column=0)




tkWindow.mainloop()
