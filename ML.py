# Streamlit is an open-source app framework for Machine Learning and Data Science projects. 
# It's a simple and efficient way to turn data scripts into shareable web apps.


# Import necessary libraries
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Title of the app
st.title('Streamlit App')

st.sidebar.title('AI Class')
st.sidebar.header('AI')
# Header
st.header('Introduction to Streamlit and Basic Python Libraries')

# Text
st.write('This is a simple example of a Streamlit app along with some basic Python libraries.')

# Load a sample dataset (I'm using a sample Iris dataset)
@st.cache
def load_data():
    data = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
    return data

data = load_data()

# Display the dataset
st.subheader('Sample Dataset')
st.write(data)

# Create a scatter plot using matplotlib
st.subheader('Scatter Plot')
fig, ax = plt.subplots()
ax.scatter(data['sepal_length'], data['sepal_width'])
ax.set_xlabel('Sepal Length')
ax.set_ylabel('Sepal Width')
st.pyplot(fig)

# Create a histogram using matplotlib
st.subheader('Histogram')
fig, ax = plt.subplots()
ax.hist(data['petal_length'], bins=20)
ax.set_xlabel('Petal Length')
ax.set_ylabel('Frequency')
st.pyplot(fig)

# Display a dataframe using st.table
st.subheader('Summary Statistics')
st.table(data.describe())

# Add a checkbox to show/hide raw data
if st.checkbox('Show Raw Data'):
    st.subheader('Raw Data')
    st.write(data)

# Add a selectbox for choosing a speciesc
species = st.selectbox('Select a Species', data['species'].unique())

# Filter data based on selected species
selected_data = data[data['species'] == species]

# Display the filtered data
st.subheader(f'Data for {species}')
st.write(selected_data)


# Explanation:

# Import Libraries: We import the necessary libraries, including Streamlit, Pandas for data manipulation, NumPy for numerical operations, and Matplotlib for creating plots.

# Title and Header: We set a title and a header for the app using st.title() and st.header().

# Text: We use st.write() to display some explanatory text.

# Load Data: We define a function load_data() to load a sample dataset (Iris dataset in this case) using Pandas. @st.cache decorator is used to cache the loaded data, which can improve app performance.

# Display Dataset: We display the loaded dataset using st.subheader() and st.write().

# Create Scatter Plot: We create a scatter plot using Matplotlib and display it using st.pyplot().

# Create Histogram: Similarly, we create a histogram and display it.

# Display Summary Statistics: We use st.table() to display summary statistics of the dataset.

# Show Raw Data Checkbox: We add a checkbox that, when checked, displays the raw data.

# Selectbox for Species: We add a selectbox to choose a species from the dataset.

# Filter Data: We filter the data based on the selected species.

# Display Filtered Data: We display the filtered data using st.subheader() and st.write().

# To run this code, you'll need to have Streamlit and the required libraries installed. You can install Streamlit using pip install streamlit. Also, make sure you have a suitable dataset or you can replace the URL in load_data() with your own dataset.

# To run the app, save this code in a file with a .py extension (e.g., app.py) and run it using the command streamlit run app.py in your terminal.

# This app provides a basic introduction to Streamlit and demonstrates its integration with common Python libraries for data manipulation and visualization. You can further customize and extend it according to your specific requirements.
