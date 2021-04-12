# UFO Sightings:

## Summary: 
The purpose of this project was to create a JavaScript file that would allow the users to filter our UFO sightings dataset by 5 different criteria, which are Date, City, State, Country, and Shape of sighting. 

Deployable Link: https://delacruzfranklyn93.github.io/UFO_Data_Filter/index.html

### Tools Used: D3, JavaScript, HTML, CSS

## Steps: 
1)	The first step was to select the tbody tag where our data will be appended to using D3. Once we inserted the data into the HTML, I then proceeded to create the input boxes for the five different criteria. . 

2)	Once the input fields and data table were inserted, I then proceeded to create a function that would filter the data. This function would use D3 to select all the individual input fields and store each input in an array. I then used a forEach statement to loop through each input value and check to see if the input value is in the dataset. If the value is in the dataset, then I proceeded to filter the dataset by that value. I did this for each input value that was given. Once I have the new filtered data, I cleared the tbody element so that I can append the new filtered data and called a function I created to append the new filtered table data. 

![image](https://user-images.githubusercontent.com/63375741/114476930-426b6b80-9bc9-11eb-994b-ae9f3c152c0a.png)


3)	Lastly, I created event handlers that would execute the function I created to filter and append the new data, so that when the filter button is clicked the new filtered data would be outputted. 

![image](https://user-images.githubusercontent.com/63375741/114476868-1a7c0800-9bc9-11eb-9ee1-8c46a0b0d657.png)


