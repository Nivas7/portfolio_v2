import BlogCard from "@/components/BlogCard";
import { blogmetadata } from "@/data/blogs";
import * as motion from "motion/react-client";

export default function Blogs() {
  return (
    <motion.main
      initial={{ filter: "blur(15px)", y: 20, opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
    >
      {blogmetadata.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </motion.main>
  );
}