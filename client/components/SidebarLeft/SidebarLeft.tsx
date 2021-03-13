import { FC } from "react";
import s from "./SidebarLeft.module.css";
import Avatar from "../Avatar";
import Button from "../Button";

interface SidebarLeftProps {}

const SidebarLeft: FC<SidebarLeftProps> = () => {
  return (
    <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
      <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-8">
            <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
              {/* Profile */}
              <div className="flex items-center space-x-3">
                <Avatar
                  className={s.avatar}
                  // imageUrl="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=MEMSAnRVfh&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                  imageAlt=""
                  onClick={() => console.log("redirect to user profile")}
                />
                <div className="space-y-1">
                  <div className="text-sm font-medium text-gray-900">
                    Debbie Nakuya
                  </div>
                  <a href="/" className="group flex items-center space-x-2.5">
                    <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
                      debbienakuya@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row xl:flex-col">
                <Button variant="primary" className="text-sm">
                  Invite a Friend
                </Button>
                <Button variant="secondary" className="text-sm">
                  Share Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
