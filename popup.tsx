// popup.tsx
import React, { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";

const ENDPOINT = "https://sora.com/backend/notif?limit=10";
const INTERVAL_MS = 1000;

const Popup: React.FC = () => {
    // State để lưu thông báo
    const [notifications, setNotifications] = useState<any[]>([]);
    // Khởi tạo storage
    const storage = new Storage();

    // Hàm fetch dữ liệu
    const fetchNotifications = async () => {
        try {
            const response = await fetch(ENDPOINT);
            if (!response.ok) {
                throw new Error("Fetch failed");
            }
            const data = await response.json();

            console.log("Fetched data:", data);

            // Cập nhật state và lưu dữ liệu nếu cần
            setNotifications(data);
            await storage.set("latestNotif", data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };

    useEffect(() => {
        // In ra thông điệp khởi động
        console.log(
            "Live now; make now always the most precious time. Now will never come again."
        );
        console.log("Interval set to fetch notifications every 1 second");

        // Thiết lập interval để fetch thông báo
        const intervalId = setInterval(fetchNotifications, INTERVAL_MS);

        // Dọn dẹp interval khi component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Notifications</h1>
            <ul>
                {notifications && notifications.length > 0 ? (
                    notifications.map((notif, index) => (
                        <li key={index}>
                            {/* Hiển thị dữ liệu của thông báo, có thể tuỳ chỉnh format */}
                            {JSON.stringify(notif)}
                        </li>
                    ))
                ) : (
                    <li>No notifications yet.</li>
                )}
            </ul>
        </div>
    );
};

export default Popup;
