import pandas as pd

DATA_FILE = "songs.csv"
TEMPLATE_FILE = "songs-template.html"
OUTPUT_FILE = "songs.html"

def generate_song_html(row):
    song = row['Songs']
    artist = row['Artists']

    tags = [tag.strip() for tag in row["Tags"].split(",")]
    tag_html = generate_tags(tags)

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
    try:
        df = pd.read_csv(DATA_FILE)
    except FileNotFoundError:
        print(f"Error: The file '{DATA_FILE}' was not found.")
        return
    
    try:
        with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
            template_content = f.read()
    except FileNotFoundError:
        print(f"Error: The file '{TEMPLATE_FILE}' was not found.")
        return

    all_songs_combined = "\n".join(
        generate_song_html(row)
        for _, row in df.iterrows()
    )

    final_content = template_content.replace('{{SONGS}}', all_songs_combined)

    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(final_content)
    except FileNotFoundError:
        print(f"Error: The file '{OUTPUT_FILE}' was not found.")
        return

    print("success")


if __name__ == "__main__":
    main()