import pandas as pd



def generate_song_html(row):
    song = row['Songs']
    artist = row['Artists']
    tag_html = generate_tags([tag.strip() for tag in row['Tags'].split(",")])
    return f'''
    <div class="song-item">
        <div class="song-info">
            <h3 class="song-title">{song}</h3>
            <p class="song-artist">{artist}</p>
            <div class="song-tags">{tag_html}</div>
        </div>
    </div>
    '''

def generate_tags(tags):
    return ''.join(f'<span class="tag">{tag}</span>' for tag in tags)


def main():
    df = pd.read_csv('data.csv')
    for _, row in df.iterrows():
        tags = [tag.strip() for tag in row['Tags'].split(",")]
        tag_html = generate_tags(tags)
        generate_song_html(row)


    
