
import React from'react';
import styles from './css/PersonalInfo.module.css'; // 假设使用 CSS Modules，需创建对应的样式文件

const PersonalInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                {/* 这里简单用文字替代头像，实际可替换为 img 标签加载图片 */}
                
            </div>
            <div className={styles.infoWrapper}>
                <h2 className={styles.name}>张渝</h2>
                <div className={styles.details}>
                    <span className={styles.detailItem}><strong>电话：</strong>18696796973</span>
                    <span className={styles.detailItem}><strong>邮箱：</strong>1083427099@qq.com</span>
                    <span className={styles.detailItem}><strong>城市：</strong>重庆</span>
                    <span className={styles.detailItem}><strong>年龄：</strong>31</span>
                    <span className={styles.detailItem}><strong>性别：</strong>男</span>
                    <span className={styles.detailItem}><strong>岗位：</strong>.net 后端开发、前端开发</span>
                    <span className={styles.detailItem}><strong>在职状态：</strong>在职</span>
                    <span className={styles.detailItem}><strong>工作城市：</strong>重庆</span>
                    <span className={styles.salary}><strong>薪资：</strong>12k - 18k</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;