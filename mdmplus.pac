// 禁止mdm.plus域名访问，其余所有域名全部直连
function FindProxyForURL(url, host) {
    // 核心规则：精准匹配mdm.plus域名（含所有子域名，如xxx.mdm.plus）
    if (dnsDomainIs(host, "mdm.plus")) {
        return "DIRECT; PROXY 0.0.0.0:0"; // 禁止访问该域名
    }
    
    // 所有其他域名/地址，全部采用「直连」模式（无代理）
    return "DIRECT";
}
