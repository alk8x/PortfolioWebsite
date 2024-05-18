from PIL import Image, ImageSequence

def crop_gif_center(input_path, output_path, crop_width, crop_height):
    with Image.open(input_path) as im:
        # Get the dimensions of the original GIF
        width, height = im.size
        
        # Calculate the coordinates for the center crop box
        left = (width - crop_width) // 2
        top = (height - crop_height) // 2
        right = left + crop_width
        bottom = top + crop_height
        crop_box = (left, top, right, bottom)
        
        # Crop each frame
        frames = [frame.crop(crop_box) for frame in ImageSequence.Iterator(im)]
        
        # Save the cropped GIF
        frames[0].save(output_path, save_all=True, append_images=frames[1:], loop=0)

# Desired crop dimensions
crop_width = 600  # Adjust as needed
crop_height = 393.99  # Adjust as needed

# Crop the MathMosaic GIF
crop_gif_center("images/mathmosaic_clip.gif", "images/mathmosaic_clip_cropped.gif", crop_width, crop_height)

# Crop the Interactive Music Systems GIF
crop_gif_center("images/ims_clip.gif", "images/ims_clip_cropped.gif", crop_width, crop_height)
