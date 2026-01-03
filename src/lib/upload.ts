import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function saveImage(file: File): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    // Sanitize filename to remove special chars
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${safeName}`;

    // Ensure uploads directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    try {
        await mkdir(uploadDir, { recursive: true });
    } catch (error) {
        // Ignore error if directory exists
        console.error('Error creating upload dir', error);
    }

    const filepath = join(uploadDir, filename);
    await writeFile(filepath, buffer);

    return `/uploads/${filename}`;
}
