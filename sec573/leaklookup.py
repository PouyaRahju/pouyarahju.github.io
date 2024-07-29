from tkinter import *
from tkinter import ttk
from requests import post


API_KEY = "f8fb68e9af21e65f0891ac0ed595c509"
API_URL = "https://leak-lookup.com/api/search"
COMBO_VALUES = ['email_address','username','ipaddress','phone','domain','password','fullname']

def Search():
    result_label['text'] = "Wait for Response..."
    data = {
        "key": API_KEY,
        "type": combo.get(),
        "query": query_text.get()
    }
    result = post(API_URL , data = data )
    if result.status_code == 200:
        result_data =  result.json()
        if result_data['error'] == 'false':
            if result_data['message']:
                result_label['text']=  "Data Found In: \n" + "\n".join( result_data['message'].keys() ) 
            else:
                result_label['text'] = "No Data Found."
        else:
            result_label['text'] = result_data['message'] 
    else:
        result_label['text'] = f"Error {result.status_code}, {result.reason}"




mainwindow = Tk()
mainwindow.geometry("500x500")
mainwindow.title("Leak Check")


type_label = Label(mainwindow, text = "Type: ")
type_label.place(x= 10 , y = 10)


combo = ttk.Combobox(state="readonly" , values = COMBO_VALUES )
combo.place(x = 50 , y = 10 )

query_label = Label(mainwindow, text = "Query: ")
query_label.place(x= 10 , y = 40)


query_text = StringVar()
query_entry = Entry(mainwindow , textvariable= query_text )
query_entry.place(x = 50 , y = 40)


search_button = Button(mainwindow ,  text = "Search" , command=Search)
search_button.place(x = 20 , y= 80)


result_label = Label(mainwindow, text = "Result: ")
result_label.place(x= 20 , y = 150)

 

mainwindow.mainloop()
