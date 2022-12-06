import RecentlySong from 'src/recentlysongs/recentlysong.entity';
export declare class RegisterDto {
    email: string;
    name: string;
    password: string;
    role: string;
    recentlySongs: RecentlySong;
}
export default RegisterDto;
