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
    with open('songs-template.html', 'r', encoding='utf-8') as f:
        template_content = f.read()
    songs_html_list = []
    for _, row in df.iterrows():
        songs_html = generate_song_html(row)
        songs_html_list.append(songs_html)

    all_songs_combined = "\n".join(songs_html_list)

    final_content = template_content.replace('{{songs}}', all_songs_combined)

    with open('output.html', 'w', encoding='utf-8') as f:
        f.write(final_content)

    print("success")