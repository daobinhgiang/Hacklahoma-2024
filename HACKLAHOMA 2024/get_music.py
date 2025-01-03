# get_music.py (server-side script)
import numpy as np
import pandas as pd
import json

# Load music dataset 
music = pd.read_csv('tcc_ceds_music.csv')

# Extract columns 
music_df = music[['artist_name', 'track_name', 'release_date', 'genre', 'topic']]

# Rename column names 
music_df = music_df.rename(columns={'artist_name': 'artist', 'topic': 'type', 'track_name': 'song', 'release_date':'year'})

# Re-arrange the columns
want = ["year", "artist", "song", "type", "genre"]
music_df = music_df[want] 

# Filter data between two dates (mid 20th century)
mid_twentieth_century = music_df.loc[(music_df["year"] >= 1940) & (music_df["year"] <= 1969)]

# Randomly select a row from DataFrame
selected_song = mid_twentieth_century.sample().to_dict(orient='records')[0]

# Convert selected song to JSON
selected_song_json = json.dumps(selected_song)

print(selected_song_json)

