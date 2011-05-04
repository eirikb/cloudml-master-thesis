var Profile = function(Common) {
    this.AWS = {
        EC2: {
            Instance: function() {
                Common.apply(this, arguments);
                this.AvailabilityZone = '';
                this.DisableApiTermination = '';
                this.ImageId = '';
                this.KernelId = '';
                this.KeyName = '';
                this.Monitoring = '';
                this.PlacementGroupName = '';
                this.PrivateIpAddress = '';
                this.RamDiskId = '';
                this.SecurityGroups = ['AWS::EC2::SecurityGroup'];
                this.SubnetId = '';
                this.Tags = ['AWS::EC2::Tags'];
                this.UserData = '';
                this.Volumes = ['AWS::EC2::MountPoin'];
                this.Description = '';
                this.meta.required.push('PlacementGroupName');
                this.init();
            },
            SecurityGroup: function() {
                Common.apply(this, arguments)
                this.SecurityGroupIngress = 'AWS::EC"::SecurityGroupRole?';
                this.GroupDescription = '';
                this.Description = '';
                this.meta.required.push('GroupDescription');
            },
            EIP : function() {
                Common.apply(this, arguments);
                this.Description = '';
            }
        }
    };
    this.AWS.EC2.Instance.prototype = new Common();
    this.AWS.EC2.SecurityGroup.prototype = new Common();
    this.AWS.EC2.EIP.prototype = new Common();
    this.Fn = {
        FindInMap: function() {

        }
    };
};