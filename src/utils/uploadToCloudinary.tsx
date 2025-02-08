const uploadToCloudinary = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("upload_preset", "blood-donation");
  formData.append("file", file);

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dtkl4ic8s/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result = await response.json();
    return result.secure_url || "";
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return "";
  }
};

export default uploadToCloudinary;
